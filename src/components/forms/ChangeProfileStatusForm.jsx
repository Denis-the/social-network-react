import React from "react";
import { Field, Form } from "react-final-form";
import { useChangeStatusFn } from "../../hooks/profileHooks";
import { ClearInputFE } from "../common/FormElems/PrimeReactFormElems";
import { maxLengthFieldCreator } from "../../utils/validators/validators";

const maxLengthField300 = maxLengthFieldCreator(300);

const ChangeProfileStatusForm = ({ onSave, status }) => {
  const saveStatus = useChangeStatusFn();
  const onSaveStatus = (newStatus) => {
    saveStatus(newStatus);
    onSave();
  };
  return (
    <Form
      onSubmit={(fields) => onSaveStatus(fields.status)}
      initialValues={{ status }}
    >
      {({ handleSubmit }) => (
        <form onBlur={handleSubmit} onSubmit={handleSubmit}>
          <Field
            name="status"
            component={ClearInputFE}
            validate={maxLengthField300}
            styled={{ width: "300px" }}
            autoFocus
          />
        </form>
      )}
    </Form>
  );
};

export default ChangeProfileStatusForm;
