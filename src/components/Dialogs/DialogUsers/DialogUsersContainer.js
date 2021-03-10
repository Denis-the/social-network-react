import {connect} from 'react-redux';
import DialogUsers from './DialogUsers';



const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsData.dialogs,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const DialogUsersContainer = connect(mapStateToProps, mapDispatchToProps)(DialogUsers);


export default DialogUsersContainer;