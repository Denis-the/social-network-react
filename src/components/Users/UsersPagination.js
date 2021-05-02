import {SelectOption, ButtonGroup} from '../common/NavElems/NavElems'

const UsersPageNav = ({requestUsersHandler, isFetching, currentPage, perPage, pagesTotal}) => {
    const navButtonsData = [
        {value:'first', onClick: requestUsersHandler.requestFirstPage,
        disabled: isFetching || currentPage === 1, className:'p-button-sm p-button-secondary',},
        {value:'prev', onClick: requestUsersHandler.requestPrevPage,
        disabled: isFetching || currentPage <= 1, className:'p-button-sm p-button-secondary'},
        {value:'next', onClick: requestUsersHandler.requestNextPage,
        disabled: isFetching || currentPage >= pagesTotal, className:'p-button-sm p-button-secondary'},
        {value:'last', onClick: requestUsersHandler.requestLastPage,
        disabled: isFetching || currentPage === pagesTotal, className:'p-button-sm p-button-secondary'},
    ]
    const optionsData = [{value:10}, {value:25}, {value:50}, {value:100},]
    
    return (
        <div>
            <SelectOption optionsData={optionsData} value={perPage} className='p-button-sm p-button-secondary'
            onChange={ (e) => requestUsersHandler.changePerPageCount(e.target.value)}/>
            <ButtonGroup styled={{width:'200px'}} buttonsData={navButtonsData}/>
        </div>
    )
} 
export default UsersPageNav