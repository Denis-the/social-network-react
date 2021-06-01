import React from "react";
import { Checkbox } from "primereact/checkbox";
import { classNames } from "primereact/utils";
import { SelectButton } from "primereact/selectbutton";
import {
  InlineFormElemWrapper,
  StyledInputText,
  StyledTextarea,
} from "../styled/styled-components";

const isFormFieldValid = (meta) => meta.touched && (meta.error || meta.submitError)  && !meta.active;
const getFormErrorMessage = (meta) =>
  isFormFieldValid(meta) && <small className="p-error">{meta.error || meta.submitError}</small>;

const FormControl = ({ input, meta, children, className, ...props }) => {
  const childClass = classNames({
    className,
    'p-invalid': isFormFieldValid(meta),
  });
  return children({ ...input, ...props, className: childClass, meta });
};

export const InputFE = (outerProps) => (
  <FormControl {...outerProps}>
    {({ meta, ...props }) => (
      <InlineFormElemWrapper>
        <span className="p-float-label">
          <StyledInputText {...props} />
          <label htmlFor={props.id}>{props.id}</label>
        </span>
        {getFormErrorMessage(meta)}
      </InlineFormElemWrapper>
    )}
  </FormControl>
);

export const TextAreaFE = (outerProps) => (
  <FormControl {...outerProps}>
    {({ meta, ...props }) => (
      <InlineFormElemWrapper>
        <span className="p-float-label">
          <StyledTextarea {...props} />
          <label htmlFor={props.id}>{props.id}</label>
        </span>
        {getFormErrorMessage(meta)}
      </InlineFormElemWrapper>
    )}
  </FormControl>
);

export const ClearInputFE = (outerProps) => (
  <FormControl {...outerProps}>
    {({ meta, ...props }) => (
      <div>
        <StyledInputText {...props} />
        {getFormErrorMessage(meta)}
      </div>
    )}
  </FormControl>
);

export const CheckBoxFE = (outerProps) => (
  <FormControl {...outerProps}>
    {({ meta, ...props }) => (
      <InlineFormElemWrapper className="p-field-checkbox">
        <Checkbox inputId={props.id} {...props} />
        <label htmlFor={props.id}> {props.id}</label>
      </InlineFormElemWrapper>
    )}
  </FormControl>
);

export const SingleSelectButtonsFE = (outerProps) => (
  <FormControl {...outerProps}>
    {({ meta, value, ...props }) => {
      const innerValue = value === '' ? null : value;
      return (
        <InlineFormElemWrapper>
          <SelectButton {...props} value={innerValue} />
        </InlineFormElemWrapper>
      );
    }}
  </FormControl>
);

export const ButtonFE = (outerProps) => {
  const ButtonChild = outerProps.children;
  return (
    <FormControl {...outerProps}>
      {({ meta, ...props }) => (
        <InlineFormElemWrapper>
          <button
            type='button'
            {...props}
            className={`p-component p-button p-button-sm ${props.className || ''}`}
          >
            {ButtonChild}
          </button>
        </InlineFormElemWrapper>
      )}
    </FormControl>
  );
};
