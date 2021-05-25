import React from "react";
import { FORM_ERROR } from "final-form";
import { Field, Form } from "react-final-form";
import { useUploadProfilePhotoFn } from "../../hooks/profileHooks";
import {
  ButtonFE,
} from "../common/FormElems/PrimeReactFormElems";

// добавить вывод фотки рядом
// добавить валидатор размера для фото
const ChangeProfilePhoto = React.memo(() => {
  const uploadProfilePhoto = useUploadProfilePhotoFn();

  return <Form
    onSubmit={(fields) => (
      uploadProfilePhoto(fields.photo).then((err) => ({ [FORM_ERROR]: err })) 
    )}
    initialValues={{}}
  >
    {({ form, handleSubmit, submitError }) => (
      <form onSubmit={handleSubmit}>
        <Field
          id="photo"
          name="photo"
        >
          {({ input: { value, onChange, ...input } }) => (
            <input
              {...input}
              onChange={({ target }) => onChange(target.files[0])}
              type="file"
              accept=".jpg, .jpeg, .png"
              className="p-inputtext-sm p-shadow-3"
            />
          )}
        </Field>
        <Field
          name="submit"
          component={ButtonFE}
          type="submit"
          className="p-shadow-3"
        >
          Upload
        </Field>
        {submitError && (
          <p
            className="p-error"
            dangerouslySetInnerHTML={{ __html: submitError }}
          />
        )}
      </form>
    )}
  </Form>
});

export default ChangeProfilePhoto;
