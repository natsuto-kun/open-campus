import { FC } from "react";
import "./chackbox.css"

export const CheckBox: FC = () => {
    return(
        <fieldset className="checkbox-003">
    <label>
        <input type="radio" name="checkbox-003" checked/>
        radio1
    </label>
    <label>
        <input type="radio" name="checkbox-003"/>
        radio2
    </label>
    <label>
        <input type="radio" name="checkbox-003"/>
        radio3
    </label>
</fieldset>
    )
}
