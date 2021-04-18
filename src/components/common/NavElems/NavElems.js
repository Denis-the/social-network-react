export const SelectOption = ({onSelect, options}) => {
    return (
        <select onChange={onSelect}>
            {options.map(option => <option key={option.value} {...option}>{option.value}</option>)}
        </select>
    )
}

export const ButtonGroup = ({buttonsData}) => {
    return ( 
        <div>
            {buttonsData.map(button => <button key={button.value} {...button}>{button.value}</button>)}
        </div>
    )
}