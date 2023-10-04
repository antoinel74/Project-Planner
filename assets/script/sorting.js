function sortTasks() {
  let sortBy = sortSelect.value;
  if (sortBy === "name") {
    tasks.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "remainingTime") {
    tasks.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  }
  updateTasksDisplay();
}


sortSelect.addEventListener("change", sortTasks);
