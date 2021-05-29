import React, { useState } from "react";
import { FORM_ERROR } from "final-form";
import { Field, Form } from "react-final-form";
import { useUploadProfilePhotoFn } from "../../hooks/profileHooks";
import { ButtonFE } from "../common/FormElems/PrimeReactFormElems";


const ChangeProfilePhotoForm = React.memo(() => {
  const uploadProfilePhoto = useUploadProfilePhotoFn();
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [currentPhotoBlob, setCurrentPhotoBlob] = useState(null);

  const setPhotoData = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setCurrentPhoto(file);
      setCurrentPhotoBlob(reader.result);
    };
    reader.onerror = () => {
      setCurrentPhoto(null);
      setCurrentPhotoBlob(null);
    };
  };

  return (
    <Form
      onSubmit={(fields) =>
        uploadProfilePhoto(fields.photo).then((err) => ({ [FORM_ERROR]: err }))
      }
      initialValues={{}}
    >
      {({ form, handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit}>
          {form.getState().values.photo &&
            form.getState().values.photo !== currentPhoto &&
            setPhotoData(form.getState().values.photo)}

          <Field id="photo" name="photo">
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

          {currentPhoto ? (
            <img
              src={currentPhotoBlob}
              alt=""
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          ) : null}

          {submitError && (
            <p
              className="p-error"
              dangerouslySetInnerHTML={{ __html: submitError }}
            />
          )}
        </form>
      )}
    </Form>
  );
});

export default ChangeProfilePhotoForm;
