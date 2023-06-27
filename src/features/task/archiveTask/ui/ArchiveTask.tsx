import { useAppDispatch } from "../../../../app/appStore";
import { TaskStateEnum } from "../../../../entities/task";
import { archiveTask } from "../../../../entities/task/model/slice";

type ArchiveTaskProps = {
  id: number;
  state: TaskStateEnum;
};

export function ArchiveTask({ state, id }: ArchiveTaskProps) {
  const dispatch = useAppDispatch();
  const onArchiveTask = (id: number) => {
    dispatch(archiveTask(id));
  };
  return (
    <label
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
    </label>
  );
}
