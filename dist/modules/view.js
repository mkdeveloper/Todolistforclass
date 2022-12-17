import chalk from "chalk";
function view(list) {
    if (list.length !== 0) {
        for (let obj of list) {
            const { Id, Name, Discription, Status } = obj;
            const viewMsg = chalk.greenBright(`
**********************************
 Id: ${Id}
 Name: ${Name}
 Discription: ${Discription}
 Status: ${Status}
**********************************
    `);
            console.log(viewMsg);
        }
    }
    else {
        console.error(chalk.redBright("Todo list is Empty"));
    }
}
export default view;
