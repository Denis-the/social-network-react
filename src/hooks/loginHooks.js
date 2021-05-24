import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loginToServer, logoutFromServer } from "../redux/authReducer";
import { getIsAuth, getIsFetching } from "../redux/selectors/authSelectors";

export const useLoginFn = () => {
    const dispatch = useDispatch();
    const login = (fields) => dispatch(loginToServer(fields));
    return login;
  };

export const useLogoutFromServerFn = () => {
    const dispatch = useDispatch();
    const logout = () => dispatch(logoutFromServer());
    return logout;
}

export const useLoginRedirect = () => {
    const isAuth = useSelector(getIsAuth);
    const isFetching = useSelector(getIsFetching);
    const history = useHistory();

    if (!isFetching && !isAuth) history.push('/login')
}
