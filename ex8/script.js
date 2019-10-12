/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

let button = document.getElementById("add-button");
let tags = document.querySelectorAll("li");

button.addEventListener("click", function () {
    item = document.createElement("li");
    item.classList.add("item")
    item.innerHTML = document.getElementById("description").value;
    item.addEventListener("click", () => item.style.textDecorationLine = "line-through");
    document.getElementById("todo-list").appendChild(item);

    // const strikethrough = event => {
    //     event.target.style.textDecoration = "strikethrough";
    // }

    // const item = `
    // <li onclick='(e) => ${strikethrough(e)}'>${document.getElementById("description").value}</li>
    // `
    // document.getElementById("todo-list").insertAdjacentHTML("beforeend", item);
})

tags.forEach(tag => tag.addEventListener("click", function () {
    this.style.textDecorationLine = "line-through";
}))
