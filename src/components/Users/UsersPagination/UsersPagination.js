import {SelectOption, ButtonGroup} from '../../common/NavElems/NavElems'

const UsersPageNav = ({requestUsersHandler, isFetching, currentPage, perPage, pagesTotal}) => {
    const navButtonsData = [
        {value:'first', onClick: requestUsersHandler.requestFirstPage,
        disabled: isFetching || currentPage === 1},
        {value:'prev', onClick: requestUsersHandler.requestPrevPage,
        disabled: isFetching || currentPage <= 1},
        {value:'next', onClick: requestUsersHandler.requestNextPage,
        disabled: isFetching || currentPage >= pagesTotal},
        {value:'last', onClick: requestUsersHandler.requestLastPage,
        disabled: isFetching || currentPage === pagesTotal},
    ]

    const optionsData = [
        {value:10, selected: perPage === 10},
        {value:25, selected: perPage === 25},
        {value:50, selected: perPage === 50},
        {value:100, selected: perPage === 100},
    ]

    return (
        <div>
            <SelectOption options={optionsData} 
            onSelect={ (e) => requestUsersHandler.changePerPageCount(e.target.value)}/>
            <ButtonGroup buttonsData={navButtonsData}/>
        </div>
    )
} 
export default UsersPageNav