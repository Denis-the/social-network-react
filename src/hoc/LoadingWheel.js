import { useState } from "react";



const LoadingWheelWrapper = (WrappedComponent) => {
    
    return (props) => {
        
        
    
        return <WrappedComponent
            {...props}
            wheel={true}

            />
    }
}

export default LoadingWheelWrapper;