import { useAppDispatch } from "../../../../app/appStore";
import { TaskStateEnum } from "../../../../entities/task";
import { pinTask } from "../../../../entities/task/model/slice";

export type PinTaskProps = {
  id: number;
  state: TaskStateEnum;
};

export function PinTask({ state, id }: PinTaskProps) {
  const dispatch = useAppDispatch();
  const onPinTask = (id: number) => {
    dispatch(pinTask(id));
  };

  return (
    <button
      className={`pin-button ${state}`}
      onClick={() => onPinTask(id)}
      id={`pinTask-${id}`}
      aria-label={`pinTask-${id}`}
      key={`pinTask-${id}`}
    >
      {/* <span className={`icon-star`} /> */}
    </button>
  );
}
