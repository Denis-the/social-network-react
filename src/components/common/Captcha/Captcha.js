import { Field } from "react-final-form"
import { InputFE } from "../FormElems/PrimeReactFormElems";



const Captcha = ({url}) => {
    return (
        <div>
            <img className="p-error" src={url}/><br/>
            <Field render={InputFE} name="captcha"></Field> 
        </div>
    )
}


export default Captcha;