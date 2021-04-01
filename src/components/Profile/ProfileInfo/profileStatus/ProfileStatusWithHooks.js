import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';


// const useEditInput = (status) => {
//     const [editInputValue, setEditInputValue] = useState(status)
//     useEffect(() => {
//         setEditInputValue(status);
//     }, [status])

//     return [editInputValue, setEditInputValue]
// }


const useProfileStatus = () => {
    const status = useSelector( state => state.profileData.status )
    const [editInputValue, setEditInputValue] = useState(status)
    useEffect(() => {
        setEditInputValue(status);
    }, [status])

    return [editInputValue, setEditInputValue]
}
 

const ProfileStatusWithHooks = ({changeStatus}) => {
    const [editMode, setEditMode] = useState(false)
    const [editInputValue, setEditInputValue] = useProfileStatus()
    const [status] = useProfileStatus()
 
    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const updateEditInput = (e) => {
        setEditInputValue(e.target.value);
    }

    const saveStatus = () => {
        changeStatus(editInputValue);
        toggleEditMode();
    } 

    return (
        <div>
                { !editMode ?
                    <div onDoubleClick={toggleEditMode}>
                        status: {status || 'no status'}
                    </div>
                :
                    <div>
                        <input
                            onChange={updateEditInput}
                            value={editInputValue}></input>
                        <button
                            onClick={saveStatus}
                        >save</button>
                        <button
                            onClick={toggleEditMode}
                        >close</button>
                    </div>
                }
            </div>
    ) 
}

export default ProfileStatusWithHooks;
