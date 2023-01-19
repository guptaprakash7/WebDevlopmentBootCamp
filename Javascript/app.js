const password = prompt("Please enter password");

if (password.length >= 6) {
    if (password.indexOf(' ') > -1) {
        console.log("Password cannot include space");
    } else {
        console.log("Good Job!!");
    }
}
else {
    console.log("Password must be 6+ character.");
}

