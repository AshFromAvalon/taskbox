import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskStateEnum, TaskType } from "./entities/task";
import { TaskList } from "./widget/task-list";
import { RootState, useAppDispatch } from "./app/appStore";
import { useSelector } from "react-redux";
import { fetchTasks, selectTasks } from "./entities/task/model/slice";
import { MainPage } from "./pages/main";

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
