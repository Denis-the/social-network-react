import React from "react"


class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            inputValue: this.props.status || '',
        }
    }

    displayEditInput = () => {
        this.setState({
            isEditing: true,
        })
    }

    hideEditInput = () => {
        this.setState({
            isEditing: false,
        })
    }

    inputOnChange = (e) => {
        let newValue = e.target.value;
        this.setState({
            inputValue: newValue
        })
    }

    saveChangedStatus = () => {
        this.props.changeStatus(this.state.inputValue)
        this.hideEditInput();

    }

    render() {
        return (
            <div>
                { !this.state.isEditing ?
                    <div onDoubleClick={this.displayEditInput}>
                        status: {this.props.status}
                    </div>
                    :
                    <div>
                        <input
                            onChange={this.inputOnChange}
                            value={this.state.inputValue}></input>
                        <button
                            onClick={this.saveChangedStatus}
                        >save</button>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;