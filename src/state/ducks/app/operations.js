import actions from "./actions";
import { authOperations } from "../auth";

const { getAuthUserData } = authOperations;
const { initilizeSuccess } = actions;

const initilizeApp = () => (dispatch) => {
  dispatch(getAuthUserData()).then(() => dispatch(initilizeSuccess()));
};

export default {
  initilizeApp,
};
