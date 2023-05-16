import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../states";
import TodoListStats from "../components/TodoListStats";
import TodoListFilters from "../components/TodolistFilters";
import TodoItemCreator from "../components/TodoItemCreator";
import TodoItem from "../components/TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}
