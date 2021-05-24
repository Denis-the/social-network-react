import React from 'react';
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import { InputFE } from "../FormElems/PrimeReactFormElems";

const Captcha = ({ url }) => (
  <div>
    <img className="p-error" src={url} alt='captcha' />
    <br />
    <Field render={InputFE} name="captcha" />
  </div>
);

Captcha.propTypes = {
    url: PropTypes.string.isRequired,
}

export default Captcha;
