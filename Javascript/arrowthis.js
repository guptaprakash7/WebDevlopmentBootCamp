const person = {
    firstName: 'Prakash',
    lastName: 'Gupta',
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    },
    fullNameArrow: () => {
        console.log(`${this.firstName} ${this.lastName}`);
    },
    callSetTimeOut: function () {
        setTimeout(function () {
            console.log(`${this.firstName} ${this.lastName}`);
        }, 3000);
    }
}