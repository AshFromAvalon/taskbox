import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../app/appStore";
import { selectTasks, fetchTasks } from "../../../../entities/task/model/slice";
import { TaskList } from "../../../../widget/task-list";

type PageProps = {};

export function MainPage({}: PageProps) {
  const dispatch = useAppDispatch();
  const { error } = useSelector((state: RootState) => state.task);
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  if (error) {
    return <div>ERROR</div>;
  }
  return (
    <div>
      <TaskList loading={false} tasks={tasks} />
    </div>
  );
}
