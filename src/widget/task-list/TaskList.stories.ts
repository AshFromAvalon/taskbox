import type { Meta, StoryObj } from "@storybook/react";
import { TaskList } from "./index";
import { TaskStateEnum } from "../../entities/task";
import { mockTasks } from "../../entities/task/model/_mockTasks";

const meta: Meta<typeof TaskList> = {
  title: "widget/TaskList",
  component: TaskList,
};

export default meta;

type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  args: {
    tasks: mockTasks,
  },
};

export const WithPinnedTasks: Story = {};
WithPinnedTasks.args = {
  tasks: [
    ...mockTasks,
    {
      userId: 1,
      id: 5,
      title: "Do Testing Library",
      state: TaskStateEnum.TASK_PINNED,
    },
  ],
};
export const WithArchivedTasks: Story = {};
WithArchivedTasks.args = {
  tasks: [
    ...mockTasks,
    {
      userId: 1,
      id: 6,
      title: "Do Testing Library",
      state: TaskStateEnum.TASK_ARCHIVED,
    },
  ],
};

export const Loading: Story = {};
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty: Story = {};
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
