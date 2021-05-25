import React from "react";
import { useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { Button } from "primereact/button";
import Captcha from "../common/Captcha/Captcha";
import { InputFE, CheckBoxFE } from "../common/FormElems/PrimeReactFormElems";
import {
  requiredField,
  maxLengthFieldCreator,
  minLengthFieldCreator,
  composeValidators,
} from "../../utils/validators/validators";
import { getCaptchaUrl, getIsCaptchaRequired } from "../../redux/selectors/authSelectors";
import { useLoginFn }  from "../../hooks/loginHooks";

const maxLengthField15 = maxLengthFieldCreator(15);
const minLengthField6 = minLengthFieldCreator(6);

const LoginForm = () => {
  const isCaptchaRequired = useSelector(getIsCaptchaRequired);
  const captchaUrl = useSelector(getCaptchaUrl);
  const login = useLoginFn();

  return (
    <Form
      onSubmit={(fields) =>
        login(fields).then((err) => ({ [FORM_ERROR]: err }))
      }
      initialValues={{
        email: "",
        password: "",
        rememberMe: true,
        captcha: "",
      }}
    >
      {({ form, handleSubmit, submitError }) => (
        <form className="p-fluid" onSubmit={handleSubmit}>
          <div className="p-d-flex p-jc-center">
            <div className="card">
              <h4 className="p-text-center">LOGIN</h4>

              <div>
                <Field
                  id="Email"
                  name="email"
                  type="email"
                  validate={requiredField}
                  component={InputFE}
                />
              </div>
              <div>
                <Field
                  id="Password"
                  name="password"
                  type="password"
                  component={InputFE}
                  validate={composeValidators(
                    requiredField,
                    maxLengthField15,
                    minLengthField6
                  )}
                />
              </div>
              <div>
                <Field
                  id="Remember me"
                  name="rememberMe"
                  type="checkbox"
                  component={CheckBoxFE}
                />
              </div>
              {isCaptchaRequired && <Captcha url={captchaUrl} />}
              {submitError && <p className="p-error">{submitError}</p>}

              <Button type="submit" label="Submit" className="p-mt-2" />
            </div>
          </div>
        </form>
      )}
    </Form>
  );
};


export default LoginForm;