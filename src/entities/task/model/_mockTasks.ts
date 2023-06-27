import { TaskStateEnum, TaskType } from "./types";

export const mockTasks: TaskType[] = [
  {
    userId: 1,
    id: 1,
    title: "Do something",
    state: TaskStateEnum.TASK_INBOX,
  },
  {
    userId: 1,
    id: 2,
    title: "Do Storybook",
    state: TaskStateEnum.TASK_INBOX,
  },
  {
    userId: 1,
    id: 3,
    title: "Do Typescript",
    state: TaskStateEnum.TASK_INBOX,
  },
  {
    userId: 1,
    id: 4,
    title: "Do Testing Library",
    state: TaskStateEnum.TASK_INBOX,
  },
];
