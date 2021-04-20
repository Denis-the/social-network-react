import { useDispatch, useSelector } from "react-redux";
import { getQueryParams, getTotalUsersCount } from "../../redux/selectors/usersSelectors";
import { fetchUsers, followTC, unfollowTC } from "../../redux/usersReducer";


export const useRequestUsersHandler = () => {
    const {currentPage, perPage, searchTerm, searchFollowed} = useSelector(getQueryParams);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const pagesTotal = Math.ceil(totalUsersCount / perPage);
    const dispatch = useDispatch();

    const requestUsersHandler = {
        requestUsers({page, perPage, term, followed}) {dispatch(fetchUsers({page, perPage, term, followed}))},
        changePerPageCount(perPage) {this.requestUsers({page:1, perPage, term:searchTerm, followed:searchFollowed})},
        requestPage(page) {this.requestUsers({page, perPage:perPage, term:searchTerm, followed:searchFollowed})},
        requestFirstPage() {this.requestUsers({page: 1, perPage:perPage, term:searchTerm, followed:searchFollowed})},
        requestLastPage() {this.requestUsers({page: pagesTotal, perPage:perPage, term:searchTerm, followed:searchFollowed})},
        requestNextPage() {this.requestUsers({page: currentPage+1, perPage:perPage, term:searchTerm, followed:searchFollowed})},
        requestPrevPage() {this.requestUsers({page: currentPage-1, perPage:perPage, term:searchTerm, followed:searchFollowed})},
    }
    requestUsersHandler.requestUsers = requestUsersHandler.requestUsers.bind(requestUsersHandler);
    requestUsersHandler.changePerPageCount = requestUsersHandler.changePerPageCount.bind(requestUsersHandler);
    requestUsersHandler.requestPage = requestUsersHandler.requestPage.bind(requestUsersHandler);
    requestUsersHandler.requestFirstPage = requestUsersHandler.requestFirstPage.bind(requestUsersHandler);
    requestUsersHandler.requestLastPage = requestUsersHandler.requestLastPage.bind(requestUsersHandler);
    requestUsersHandler.requestNextPage = requestUsersHandler.requestNextPage.bind(requestUsersHandler);
    requestUsersHandler.requestPrevPage = requestUsersHandler.requestPrevPage.bind(requestUsersHandler);

    return requestUsersHandler
}


export const useFollowUsersHandler = () => {
    const dispatch = useDispatch();
    return {
        requestFollowUser(userId) {dispatch(followTC(userId))},
        requestUnfollowUser(userId) {dispatch(unfollowTC(userId))},
    }
}