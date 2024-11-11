async function loadTasks() {
    const response = await fetch('http://localhost:5000/tasks');
    const tasks = await response.json();
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = tasks.map(task => `<li>${task.title}: ${task.description}</li>`).join('');
}
window.onload = loadTasks;
