const tweetForm = document.querySelector("#tweetForm");
const tweetContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function(e){
    e.preventDefault();
debugger    
const userNameInput = tweetForm.elements.username;
const tweetInput = tweetForm.elements.tweet;

AddTweets(userNameInput.value, tweetInput.value);
userNameInput.value = '';
tweetInput.value = '';

})

AddTweets = (userName, tweet) => {
const liTag = document.createElement('LI');
const bTag = document.createElement('b');
bTag.append(userName);
liTag.append(bTag);
liTag.append(` - ${tweet}`);
tweetContainer.append(liTag);
}

tweetContainer.addEventListener('click', function(e){
    debugger
e.target.nodeName === "LI" && e.target.remove();
})