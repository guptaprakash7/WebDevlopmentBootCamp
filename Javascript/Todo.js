let userChoice = prompt("What you would like to to?");

const todo = [];
while (userChoice !== 'quit') {
    switch (userChoice) {
        case 'new':
            let item = prompt("Please enter your todo");
            todo.push(item);
            break;
        case 'list':
            for (const iterator of todo) {
                console.log(iterator);
            }
            break;
        case 'delete':
            let i = 0;
            for (const iterator of todo) {
                console.log(`${i++}: ${iterator}`);
            }
            let index = parseInt(prompt("Please enter the index you want to delete"));
            if (!isNaN(index)) {
                todo.splice(index, 1);

            }
            break;
    }
    userChoice = prompt("What you would like to to?");
}
console.log("OK, You quit the app.");
