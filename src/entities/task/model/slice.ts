import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { TaskStateEnum, TaskType } from "./types";
import { RootState } from "../../../app/appStore";
import { mockTasks } from "./_mockTasks";

export type sliceState = {
  tasks: TaskType[];
  status: string;
  error: any;
};

const initialState: sliceState = {
  tasks: mockTasks,
  status: "idle",
  error: null,
};

export const fetchTasks = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?userId=1"
  );
  const data = await response.json();
  const result = data.map((task: any) => ({
    userId: task.userId,
    id: `${task.id}`,
    title: task.title,
    state: task.completed ? "TASK_ARCHIVED" : "TASK_INBOX",
  }));
  return result;
});

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    pinTask: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const taskExist = state.tasks.find((task) => task.id === id);

      if (taskExist) {
        const taskIsPinned = taskExist.state === TaskStateEnum.TASK_PINNED;
        taskExist.state = taskIsPinned
          ? TaskStateEnum.TASK_INBOX
          : TaskStateEnum.TASK_PINNED;
      }
    },
    archiveTask: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const taskExist = state.tasks.find((task) => task.id === id);

      if (taskExist) {
        const taskIsArchived = taskExist.state === TaskStateEnum.TASK_ARCHIVED;
        taskExist.state = taskIsArchived
          ? TaskStateEnum.TASK_INBOX
          : TaskStateEnum.TASK_ARCHIVED;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.tasks = [];
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        // Add any fetched tasks to the array
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = "failed";
        state.error = "Something went wrong";
        state.tasks = [];
      });
  },
});

export const { pinTask, archiveTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks;
