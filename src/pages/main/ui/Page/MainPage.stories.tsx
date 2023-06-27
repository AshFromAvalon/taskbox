import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import { MainPage } from "./Page";
import { mockTasks } from "../../../../entities/task/model/_mockTasks";
import { TaskStateEnum } from "../../../../entities/task";

const meta: Meta<typeof MainPage> = {
  title: "page/MainPage",
  component: MainPage,
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Default: Story = {};
Default.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://jsonplaceholder.typicode.com/todos?userId=1",
        (req, res, ctx) => {
          return res(
            ctx.json([
              ...mockTasks,
              {
                userId: 111,
                id: 111,
                title: "SHIIIIIIT",
                state: TaskStateEnum.TASK_ARCHIVED,
              },
            ])
          );
        }
      ),
    ],
  },
};

export const Error: Story = {};
Error.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://jsonplaceholder.typicode.com/todos?userId=1",
        (req, res, ctx) => {
          return res(ctx.status(403));
        }
      ),
    ],
  },
};
