import {SelectOption, ButtonGroup} from '../common/NavElems/NavElems'

const UsersPageNav = ({requestUsersHandler, isFetching, currentPage, perPage, pagesTotal}) => {
    const navButtonsData = [
        {value:'first', onClick: requestUsersHandler.requestFirstPage, styled:{width:'50px'},
        disabled: isFetching || currentPage === 1, className:'p-button-sm p-button-secondary p-m-1 p-shadow-3',},
        {value:'prev', onClick: requestUsersHandler.requestPrevPage, styled:{width:'50px'},
        disabled: isFetching || currentPage <= 1, className:'p-button-sm p-button-secondary p-m-1 p-shadow-3'},
        {value:'next', onClick: requestUsersHandler.requestNextPage, styled:{width:'50px'},
        disabled: isFetching || currentPage >= pagesTotal, className:'p-button-sm p-button-secondary p-m-1 p-shadow-3'},
        {value:'last', onClick: requestUsersHandler.requestLastPage, styled:{width:'50px'},
        disabled: isFetching || currentPage === pagesTotal, className:'p-button-sm p-button-secondary p-m-1 p-shadow-3'},
    ]
    const optionsData = [{value:10}, {value:25}, {value:50}, {value:100},]
    
    return (
        <div>
            <SelectOption optionsData={optionsData} value={perPage} className='p-button-sm p-button-secondary p-m-1 p-shadow-3'
            onChange={ (e) => requestUsersHandler.changePerPageCount(e.target.value)}/>
            <span className='p-button p-component p-button-text p-button-sm p-m-1'>{currentPage}/{pagesTotal}</span>
            <ButtonGroup buttonsData={navButtonsData}/>
        </div>
    )
} 
export default UsersPageNav