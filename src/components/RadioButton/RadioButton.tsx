import { FC } from "react";
import "./radiobutton.css";

export const RadioButton: FC = () => {
  return (
    <fieldset className="radio-001">
      <label>
        <input type="radio" name="radio-001" checked />
        radio1
      </label>
      <label>
        <input type="radio" name="radio-001" />
        radio2
      </label>
      <label>
        <input type="radio" name="radio-001" />
        radio3
      </label>
    </fieldset>
  );
};
