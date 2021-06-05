import React from "react";
import { Field, Form } from "react-final-form";
import { profileHooks } from "../../state/ducks/profile";
import { ClearInputFE } from "../common/FormElems/PrimeReactFormElems";

const { useChangeStatusFn } = profileHooks;

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
            styled={{ width: "300px" }}
            autoFocus
          />
        </form>
      )}
    </Form>
  );
};

export default ChangeProfileStatusForm;
