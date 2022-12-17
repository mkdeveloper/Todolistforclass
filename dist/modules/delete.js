import chalk from "chalk";
import inquirer from "inquirer";
async function deleteTodo(list) {
    if (list.length !== 0) {
        const deleteTodoList = await inquirer.prompt({
            name: "delete",
            type: "number",
            message: "Please enter Todo's Id no. to Delete: ",
        });
        const deleteNo = parseInt(deleteTodoList.delete);
        let todoIndex = list.findIndex((obj) => obj.Id === deleteNo);
        if (todoIndex !== -1) {
            list.splice(todoIndex, 1);
            console.log(chalk.greenBright(`Todo list ${deleteNo} deleted`));
        }
        else {
            console.log(chalk.redBright("Todo No. is Incorrect!"));
        }
    }
    else {
        console.log(chalk.redBright("Todo List is Empty!"));
    }
}
export default deleteTodo;
