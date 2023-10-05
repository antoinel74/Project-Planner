export const switchState = (taskState) => {
  if (taskState.classList.contains("filter-toDo")) {
    taskState.classList.remove("filter-toDo");
    taskState.classList.add("filter-inProgress");
  } else if (taskState.classList.contains("filter-inProgress")) {
    taskState.classList.remove("filter-inProgress");
    taskState.classList.add("filter-done");
  } else {
    taskState.classList.remove("filter-done");
    taskState.classList.add("filter-toDo");
  }
};
