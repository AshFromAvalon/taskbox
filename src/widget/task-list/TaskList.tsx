import "./TaskList.css";
import { Task, TaskType } from "../../entities/task";
import { useState } from "react";

type TaskListProps = {
  loading: boolean;
  tasks: TaskType[];
};

export function TaskList({ loading, tasks }: TaskListProps) {
  if (loading) {
    return <div className="">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="">empty</div>;
  }

  return (
    <ul className="list">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </ul>
  );
}

export default TaskList;
