import { FC } from "react";
import "./textbox.css";

export const TextBox: FC = () => {
  return (
    <label>
      <span className="textbox-002-label">ラベルの例</span>
      <input
        type="text"
        className="textbox-002"
        placeholder="テキストボックスの例"
      />
    </label>
  );
};
