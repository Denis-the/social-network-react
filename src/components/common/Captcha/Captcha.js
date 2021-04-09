import { Field } from "react-final-form"
import { InputFormElem } from "../FormElems/FormElems";



const Captcha = ({url}) => {
    return (
        <div>
            <img src={url}/><br/>
            <Field render={InputFormElem} name="captcha"></Field> 
        </div>
    )
}


export default Captcha;