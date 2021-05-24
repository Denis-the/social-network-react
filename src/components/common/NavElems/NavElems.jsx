import React from "react";
import { ButtonUI, SelectUI } from "../UI-components/UIElems";

export const SelectOption = ({ optionsData, keyName, ...props }) => (
  <SelectUI {...props}>
    {optionsData.map((option) => (
      <option key={option[keyName || "value"]} {...option}>
        {option.value}
      </option>
    ))}
  </SelectUI>
);

export const ButtonGroup = ({ buttonsData, keyName, ...props }) => (
  <div {...props}>
    {buttonsData.map((data) => (
      <ButtonUI key={data[keyName || "value"]} {...data}>
        {data.value}
      </ButtonUI>
    ))}
  </div>
);
