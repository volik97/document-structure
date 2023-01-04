const userInput = document.querySelector("input");
const tasksList = document.getElementById("tasks__list");
const addButton = document.getElementById("tasks__add");

function addTask(event) {
  if (
    event.code == "Enter" ||
    (this.textContent == "Добавить" && userInput.value == "")
  ) {
    return false;
  }
  if (event.code == "Enter" || this.textContent == "Добавить") {
    tasksList.insertAdjacentHTML(
      "afterbegin",
      `<div class="task">
                        <div class="task__title">
                          ${userInput.value}
                        </div>
                        <a href="#" class="task__remove">&times;</a>
                      </div>`
    );
    userInput.value = "";
  }
}

document.body.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.matches(".task__remove")) {
    event.target.parentElement.remove();
  }
});

addButton.addEventListener("click", addTask);
document.addEventListener("keydown", addTask);
