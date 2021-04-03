import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';


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
    const [statusInputValue, setStatusInputValue] = useProfileStatus()
    const [status] = useProfileStatus()
 
    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const updateStatusInputValue = (e) => {
        setStatusInputValue(e.target.value);
    }

    const saveStatus = () => {
        changeStatus(statusInputValue);
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
                            onChange={updateStatusInputValue}
                            value={statusInputValue}></input>
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
