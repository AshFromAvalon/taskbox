import React from "react";
import "./Task.css";
import { TaskStateEnum, TaskType } from "../../model/types";
import { ArchiveTask, PinTask } from "../../../../features/task";

export type TaskProps = {
  task: TaskType;
};

export function Task({ task: { id, title, state } }: TaskProps) {
  return (
    <li className={`list-item ${state}`}>
      <div>
        <ArchiveTask state={state} id={id} />
        {/* <label
          htmlFor="checked"
          aria-label={`archiveTask-${id}`}
          className="checkbox"
        >
          <input
            type="checkbox"
            name="checked"
            id={`archiveTask-${id}`}
            checked={state === TaskStateEnum.TASK_ARCHIVED}
            onChange={() => onArchiveTask(id)}
          />
        </label> */}

        <label htmlFor="title" aria-label={title} className="title">
          <input
            type="text"
            value={title}
            readOnly={true}
            name="title"
            placeholder="Input title"
          />
        </label>
      </div>

      <div>
        {state !== "TASK_ARCHIVED" && (
          <PinTask state={state} id={id} />

          // <button
          //   className={`pin-button ${state}`}
          //   onClick={() => onPinTask(id)}
          //   id={`pinTask-${id}`}
          //   aria-label={`pinTask-${id}`}
          //   key={`pinTask-${id}`}
          // >
          //   {/* <span className={`icon-star`} /> */}
          // </button>
        )}
      </div>
    </li>
  );
}
