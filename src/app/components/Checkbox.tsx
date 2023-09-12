import React from "react";
import { TaskType } from "../features/TodoList";
import { v4 } from "uuid";
type CBprops = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  task: TaskType;
};
const Checkbox: React.FC<CBprops> = ({ onChange, task }) => {
  const id = v4();

  return (
    <>
      <input
        className="form-check-input me-3 m-0 "
        id={id}
        type="checkbox"
        checked={task.completed}
        onChange={onChange}
      />
      <label className="form-check-label mwl " htmlFor={id}>
        {task.title}
      </label>
    </>
  );
};

export default Checkbox;
