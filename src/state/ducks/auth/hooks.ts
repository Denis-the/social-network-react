import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import authOperations from "./operations";
import authSelectors from "./selectors";
import { LoginDataType } from "../../../types/types";
import { IsFetchingType } from "./types";

const { loginToServer, logoutFromServer } = authOperations;
const { getIsAuth, getIsFetching } = authSelectors;



const useLoginFn = () => {
  const dispatch = useDispatch();
  const login = (fields: LoginDataType) => dispatch(loginToServer(fields));
  return login;
};

const useLogoutFromServerFn = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutFromServer());
  return logout;
};

const useLoginRedirect = () => {
  const isAuth = useSelector(getIsAuth);
  const isFetching: IsFetchingType = useSelector(getIsFetching);
  const history = useHistory();

  if (!isFetching && !isAuth) history.push("/login");
};

export default {
  useLogoutFromServerFn,
  useLoginFn,
  useLoginRedirect,
};
