// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Task, TaskProps } from "./Task";
import { TaskStateEnum } from "../../model/types";

const meta: Meta<typeof Task> = {
  title: "entities/Task",
  component: Task,
  tags: ["autodocs"],
  argTypes: {
    task: { userId: 1, id: 1, title: "Test Task" },
  },
};

export default meta;

type Story = StoryObj<typeof Task>;

export const Pinned: Story = {
  args: {
    task: {
      userId: 1,
      id: 1,
      title: "Task is Pinned",
      state: TaskStateEnum.TASK_PINNED,
    },
  },
};

export const Archived: Story = {
  args: {
    ...Pinned.args,
    task: {
      userId: 1,
      id: 1,
      title: "Task is Archived",
      state: TaskStateEnum.TASK_ARCHIVED,
    },
  },
};
export const Inbox: Story = {
  args: {
    ...Pinned.args,
    task: {
      userId: 1,
      id: 1,
      title: "Task is Inbox",
      state: TaskStateEnum.TASK_INBOX,
    },
  },
};
