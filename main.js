#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
const answer1 = await inquirer.prompt([
    {
        name: "question1",
        type: "input",
        message: "What do you want to add in your todos :"
    }
]);
todo.push(answer1.question1);
console.log(todo);
while (condition) {
    const answer2 = await inquirer.prompt([
        {
            name: "question2",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want to add more",
        }
    ]);
    if (answer2.question2 === "Yes") {
        const answer3 = await inquirer.prompt([{
                name: "question3",
                type: "input",
                message: "Write it"
            }]);
        todo.push(answer3.question3);
        console.log(todo);
    }
    else if (answer2.question2 === "No") {
        console.log("Your Total todo list is : ");
        console.log((todo));
        break;
    }
}
