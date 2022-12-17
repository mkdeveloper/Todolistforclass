import inquirer from "inquirer";
import addTodo from "./modules/add.js";
import deleteTodo from "./modules/delete.js";
import list from "./modules/list.js";
import updateTodo from "./modules/update.js";
import view from "./modules/view.js";
import welcome from "./modules/welcome.js";
let msg = `
***********************************
*** Welcome To "MK's TODO LIST" ***
***********************************
`;
await welcome(msg);
async function main() {
    const options = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Please select your desire option: ",
        choices: ["View", "Add", "Update", "Delete", "Exit Program"],
    });
    switch (options.select) {
        case "View":
            view(list);
            break;
        case "Add":
            await addTodo(list);
            break;
        case "Update":
            await updateTodo(list);
            break;
        case "Delete":
            await deleteTodo(list);
            break;
        case "Exit Program":
            msg = `
*********************************************
*** Thank You for using  "Mk's TODO LIST" ***
*********************************************
`;
            await welcome(msg);
            process.exit(0);
    }
    main();
}
main();
