import inquirer from "inquirer";

async function addTodo(
  list: { Id: number; Name: string; Discription: string; Status: string }[]
) {
  const todoList = await inquirer.prompt([
    {
      name: "todoEntry",
      type: "input",
      message: "Please enter todo Title: ",
    },
    {
      name: "discription",
      type: "input",
      message:
        "Please enter Discription or leave it empty by just Pressing Enter Key: ",
      default: "N/A",
    },
  ]);

  let id = 0;
  for (let obj of list) {
    id = obj.Id;
  }

  const todoObj = {
    Id: ++id,
    Name: todoList.todoEntry,
    Discription: todoList.discription,
    Status: "Pending",
  };
  list.push(todoObj);
  console.log("Todo Added");
}

export default addTodo;
