import React, { memo } from "react";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import {
  ButtonFE,
  InputFE,
  SingleSelectButtonsFE,
  TextAreaFE,
} from "../common/FormElems/PrimeReactFormElems";
import {
  requiredField,
  maxLengthFieldCreator,
  minLengthFieldCreator,
  composeValidators,
} from "../../utils/validators/validators";
import { useChangeProfileFn } from "../../hooks/profileHooks";

const maxLengthField300 = maxLengthFieldCreator(300);
const maxLengthField50 = maxLengthFieldCreator(50);
const minLengthField3 = minLengthFieldCreator(3);

const ChangeProfileInfoForm = memo(({ profileInfo }) => {
  const changeProfileFn = useChangeProfileFn();
  return (
    <Form
      onSubmit={(fields) =>
        changeProfileFn(fields).then((err) => ({ [FORM_ERROR]: err }))
      }
      initialValues={{ ...profileInfo }}
    >
      {({ form, handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit} className="">
          <div>
            <h4>Main info</h4>
            <div>
              <Field
                id="Fullname"
                name="fullName"
                component={InputFE}
                validate={composeValidators(
                  requiredField,
                  maxLengthField50,
                  minLengthField3
                )}
                className="p-inputtext-sm p-shadow-3"
                styled={{ width: "350px" }}
              />
            </div>
            <div>
              <Field
                id="About me"
                name="aboutMe"
                component={TextAreaFE}
                validate={composeValidators(requiredField, maxLengthField300)}
                styled={{ width: "350px", height: "200px" }}
                className="p-inputtextarea-resizable p-shadow-3"
              />
            </div>
          </div>
          <div>
            <h4>Job</h4>
            <div className="p-d-inline-flex" style={{ alignItems: "center" }}>
              <span>Looking for a job:</span>
              <Field
                id="Job"
                name="lookingForAJob"
                component={SingleSelectButtonsFE}
                className="p-shadow-3"
                options={[
                  { name: "NO", value: false, className: "p-button-sm" },
                  { name: "YES", value: true, className: "p-button-sm" },
                ]}
                value={profileInfo.lookingForAJob}
                optionLabel="name"
              />
            </div>
            {form.getState().values.lookingForAJob ? (
              <div>
                <Field
                  id="Job description"
                  name="lookingForAJobDescription"
                  component={TextAreaFE}
                  validate={composeValidators(maxLengthField300)}
                  className="p-inputtextarea-resizable p-shadow-3"
                  styled={{ width: "350px", height: "200px" }}
                />
              </div>
            ) : null}
          </div>
          <div>
            {submitError && (
              <p
                className="p-error"
                dangerouslySetInnerHTML={{ __html: submitError }}
              />
            )}
            <Field
              name="submit"
              component={ButtonFE}
              type="submit"
              className="p-shadow-3"
            >
              Save
            </Field>
          </div>
        </form>
      )}
    </Form>
  );
});

export default ChangeProfileInfoForm;