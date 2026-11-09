const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskPrioritySelect = document.getElementById("task-priority");
const taskListContainer = document.getElementById("task-list");
const errorDisplay = document.getElementById("error-message");
const dashboardStatus = document.getElementById("dashboard-status");
const themeToggleButton = document.getElementById("theme-toggle");

function createTaskElement(taskName, priority) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item", "priority-" + priority);

    const taskText = document.createElement("span");
    taskText.textContent = taskName;

    const priorityBadge = document.createElement("span");
    priorityBadge.classList.add("badge");
    priorityBadge.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);

    taskItem.appendChild(taskText);
    taskItem.appendChild(priorityBadge);
    return taskItem;
}

function handleFormSubmit(event) {
    event.preventDefault();

    const taskName = taskNameInput.value.trim();
    const priority = taskPrioritySelect.value.trim();
    errorDisplay.textContent = "";
    taskNameInput.removeAttribute("aria-invalid");

    if (taskName === "") {
        errorDisplay.textContent = "Please enter a task name.";
        taskNameInput.setAttribute("aria-invalid", "true");
        taskNameInput.focus();
        return;
    }

    const newTask = createTaskElement(taskName, priority);
    taskListContainer.appendChild(newTask);

    const taskCount = taskListContainer.children.length;
    dashboardStatus.textContent = taskCount + (taskCount === 1 ? " task added." : " tasks added.");

    taskNameInput.value = "";
    taskNameInput.focus();
}

function toggleTheme() {
    const darkModeEnabled = document.body.classList.toggle("dark-theme");
    themeToggleButton.setAttribute("aria-pressed", String(darkModeEnabled));
}

taskForm.addEventListener("submit", handleFormSubmit);
themeToggleButton.addEventListener("click", toggleTheme);
