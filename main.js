let tasks = [];

function renderTasks() {
    const list = document.getElementById("task-list");
    list.innerHTML = "";
    tasks.map((task, index) => {
        const item = document.createElement("li");

        item.innerHTML = `
      <strong>${task.title}</strong>: ${task.description}
      <div class="actions">
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
        list.appendChild(item);
    });
}

function addTask() {
    const title = document.getElementById("task-title").value.trim();
    const description = document.getElementById("task-desc").value.trim();

    if (title === "") return alert("Title is required!");

    tasks.push({ title, description, completed: false });

    document.getElementById("task-title").value = "";
    document.getElementById("task-desc").value = "";
    renderTasks();
}

function editTask(index) {
    const newTitle = prompt("Edit Task Title:", tasks[index].title);
    const newDesc = prompt("Edit Task Description:", tasks[index].description);

    if (newTitle !== null && newDesc !== null) {
        tasks.splice(index, 1, {
            ...tasks[index],
            title: newTitle.trim(),
            description: newDesc.trim()
        });
        renderTasks();
    }
}

function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        renderTasks();
    }
}
