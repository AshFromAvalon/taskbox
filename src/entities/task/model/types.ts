export enum TaskStateEnum {
  TASK_ARCHIVED = "TASK_ARCHIVED",
  TASK_INBOX = "TASK_INBOX",
  TASK_PINNED = "TASK_PINNED",
}

export type TaskType = {
  userId: number;
  id: number;
  title: string;
  state: TaskStateEnum;
};
