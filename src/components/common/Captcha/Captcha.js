import { Field } from "react-final-form"
import { InputFormElem } from "../FormElems/PrimeReactFormElems";



const Captcha = ({url}) => {
    return (
        <div>
            <img className="p-error" src={url}/><br/>
            <Field render={InputFormElem} name="captcha"></Field> 
        </div>
    )
}


export default Captcha;