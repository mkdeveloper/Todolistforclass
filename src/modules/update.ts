import chalk from "chalk";
import inquirer from "inquirer";

async function updateTodo(list: { Id: number; Status: string }[]) {
  if (list.length !== 0) {
    const updateStat = await inquirer.prompt({
      name: "status",
      type: "number",
      message: "Please enter Todo list no. to update it's status as Completed",
    });

    const updateNo = parseInt(updateStat.status);
    let updateIndex = list.findIndex((obj) => obj.Id === updateNo);

    if (updateIndex !== -1) {
      list[updateIndex].Status = "Completed";
      console.log(chalk.greenBright("Status Updated"));
    } else {
      console.log(chalk.redBright("Wrong Todo Id Entered!"));
    }
  } else {
    console.log(chalk.redBright("Todo List Is Empty!"));
  }
}

export default updateTodo;
