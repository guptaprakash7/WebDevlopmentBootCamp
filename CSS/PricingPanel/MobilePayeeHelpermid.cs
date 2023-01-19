using BusinessLibrary;
using BusinessLibrary.Common;
using DCPLFramework;
using DCPLFramework.DataAccess;
using DFramework.Database;
using DFramework.Database.Expressions;
using ExtJSHelper;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Data;
using System.Data.Common;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using TLS.PeopleNet;

/// <summary>
/// Summary description for MobilePayeeHelper
/// </summary>
public class MobilePayeeHelper
{
	public static DataTable ValidateMobileLogin(string userName, string pwd, bool isDockWorker)
	{
		Query queryMobileLogin = new Query("SELECT Caption, PayeeId FROM dbo.Payee");
		queryMobileLogin.Where.And(new Expression("DriverHandHeldIdentity", CompareOperator.Equals, userName));
		queryMobileLogin.Where.And(new Expression("DriverPassword", CompareOperator.Equals, pwd));
		queryMobileLogin.Where.And(new NotDeleted());
		if (isDockWorker)
		{
			queryMobileLogin.Where.And(new Expression("TypeId", CompareOperator.Equals, (int)PayeeTypeEnum.DockWorker));
		}
		return queryMobileLogin.ExecuteDataTable();
	}

	public static void SaveImage(MobileMethodClasses.PendingChanges changes, Order order, DispatchOrderTask actualOrderTask, bool isComingFromDock)
	{
		int documentTypePodLookupId = LookupHelper.GetLookupId((int)LookupType.DocumentType, "POD");

		var tiffFileNameWithPath = ImageUtility.SaveBase64Image(changes.PhotoImageBase64, 0, 600);
		if (tiffFileNameWithPath != null)
		{
			Document doc = new Document();
			if (changes.DocumentTypeId == (int)MobileDocumentType.POD)
			{
				//It's POD
				changes.DocumentTypeId = AppUtility.AppConfig.AppConfigTailoredMobileDocumentTypeIdForPOD != 0 ? AppUtility.AppConfig.AppConfigTailoredMobileDocumentTypeIdForPOD : documentTypePodLookupId;
				if (AppUtility.AppConfig.AppConfigDocumentAutomaticallyCompleteOrdersForPOD && order.StatusId != (int)OrderStatus.Completed && actualOrderTask.EndDate != null)
				{
					OrderUtility.CompleteOrder(order, 0, DateTime.Now, 0, "Completed from POD document.");
				}
			}
			AppUtility.AppConfig.SetBusinessRulesNextBatchNumber(AppUtility.AppConfig.BusinessRulesNextBatchNumber + 1);
			var businessRulesNextBatchNumber = AppUtility.AppConfig.BusinessRulesNextBatchNumber;

			doc.DocumentTypeId = changes.DocumentTypeId == (int)MobileDocumentType.BOLForPickup || changes.DocumentTypeId == (int)MobileDocumentType.BOL ? (AppUtility.AppConfig.AppConfigTailoredMobileDocumentTypeIdForBOL != 0 ? AppUtility.AppConfig.AppConfigTailoredMobileDocumentTypeIdForBOL : (int)DocumentManagementType.BOL) : changes.DocumentTypeId;

			doc.StatusId = changes.DocumentTypeId == (int)MobileDocumentType.BOLForPickup ? (int)DocumentStatus.Pickup : (int)DocumentStatus.Indexed;
			doc.IndexedById = (int)DocumentIndexer.Mobile;
			doc.FileName = new FileInfo(tiffFileNameWithPath).Name;
			doc.DocumentBatchId = -businessRulesNextBatchNumber;
			doc.StorageLocation = tiffFileNameWithPath;
			if (isComingFromDock)
			{
				doc.OrderId = changes.OrderId;
			}
			else
			{
				doc.OrderId = changes.DocumentTypeId == (int)MobileDocumentType.BOLForPickup ? changes.OrderId : order.Id;
			}
			doc.Save();
			if (changes.DocumentTypeId == (int)MobileDocumentType.Signature)
			{
				NameValueCollection drParameters = new NameValueCollection();
				drParameters.Add("Id", order.Id.ToString());
				drParameters.Add("report", "DeliveryReceipts");
				drParameters.Add("userId", SecurityHelper.UserId.ToString());
				drParameters.Add("isManifestDelivery", "true");

				Controllers_Report drReport = new Controllers_Report();
				drReport.Init(drParameters);
				drReport.GetOutputMultiple(0, delegate (MemoryStream ms, double batches)
				{
					DCPLFramework.Business.Attachment attachment = new DCPLFramework.Business.Attachment();
					FormEventArgs args = new FormEventArgs();
					string fileName = "DeliveryReceipt" + DateTime.Now.ToString("yyyyMMdd-HHmmss") + "_" + SecurityHelper.UserId + "_.pdf";
					attachment.AttachmentTypeId = (int)BusinessLibrary.Common.AttachmentType.DeliveryReceipt;
					attachment.AssociationId = order.Id;
					AttachmentUtility.SaveAttachment(args, (int)BusinessObjectType.Order, attachment, ms, fileName);
					Tags tags = new Tags();
					tags.Add("AttachmentId", attachment.Id.ToString());
					Notifications.ProcessColumns(tags, "OrderId", order.Id, Notifications.EventType.ElectronicPOD);
					Notifications.Queue(Notifications.EventType.ElectronicPOD, tags, order.Id);
				});
			}
		}
	}
	public static List<MobileMethodClasses.OptionsButtons> GetMobileOptions(FormEventArgs args)
	{
		Database db = DBHelper.Db;
		List<MobileMethodClasses.OptionsButtons> mobileOptions = new List<MobileMethodClasses.OptionsButtons>();
		String queryMobileOptions = "SELECT [DisplayValue] AS Name, [CustomStringValue] As ItemId FROM dbo.[LookUp] WHERE [LookupTypeId] = @LookupTypeId AND [IsDefault] = @IsDefault AND [IsDeleted] = 0  ORDER BY [SortOrder]";
		DbCommand cm = db.GetSqlStringCommand(queryMobileOptions);
		db.AddInParameter(cm, "LookupTypeId", DbType.Int32, MobileMethodEnum.MobileOptions.MobileOptionLookupTypeId);
		db.AddInParameter(cm, "IsDefault", DbType.Int32, MobileMethodEnum.MobileOptions.Isdefault);
		MobileMethodClasses.OptionsButtons op = null;
		using (DCPLFramework.DataAccess.NullableDataReader dr = DBHelper.ExecuteReader(db, cm))
		{
			while (dr.Read())
			{
				op = new MobileMethodClasses.OptionsButtons();
				op.Name = dr.GetString("Name");
				op.ItemId = dr.GetString("ItemId");
				mobileOptions.Add(op);
			}
		}
		return mobileOptions;

	}
	public static void UpdatePayeeLogin(int payeeId, bool isLoggedIn)
	{
		DateTime currentUtcDateTime = isLoggedIn ? DateTime.UtcNow : DateTime.UtcNow.AddMinutes(-2);
		Query updatePayeeLogin = new Query("UPDATE dbo.PayeeAttribute SET LastLoginPingTimeUTC = @LastLoginPingTimeUTC");
		updatePayeeLogin.AddParameter(new ParameterInfo("LastLoginPingTimeUTC", currentUtcDateTime));
		updatePayeeLogin.Where.And(new Expression("PayeeId", CompareOperator.Equals, payeeId));
		updatePayeeLogin.ExecuteNonQuery();
	}
	public static void WriteLogOnLoginLogout(int payeeId, bool isLogin)
	{
		int eventId = 0;
		string requestData = string.Empty;
		if (isLogin)
		{
			eventId = (int)MobileMethodEnum.MobileEvent.Login;
			requestData = "Login Successfull";
		}
		else
		{
			eventId = (int)MobileMethodEnum.MobileEvent.Logout;
			requestData = "Logout Successfull";
		}
		Query saveRequestQuery = new Query(@"INSERT INTO dbo.TailoredMobileEventLog (EventId, UserId, RequestData, ResponseData, EventDateTime, OrderTaskId) VALUES (@EventId, @UserId, @RequestData, @ResponseData, @EventDateTime, @OrderTaskId)");
		saveRequestQuery.Parameters.Add(new ParameterInfo("EventId", eventId));
		saveRequestQuery.Parameters.Add(new ParameterInfo("UserId", payeeId));
		saveRequestQuery.Parameters.Add(new ParameterInfo("RequestData", requestData));
		saveRequestQuery.Parameters.Add(new ParameterInfo("ResponseData", "True"));
		saveRequestQuery.Parameters.Add(new ParameterInfo("EventDateTime", DateTime.UtcNow));
		saveRequestQuery.Parameters.Add(new ParameterInfo("OrderTaskId", 0));
		saveRequestQuery.ExecuteNonQuery();

		MobilePayeeHelper.UpdatePayeeLogin(payeeId, isLogin);
	}

}