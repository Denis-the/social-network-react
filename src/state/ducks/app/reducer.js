import types from "./types";

const { INITIALIZATION_SUCCESS } = types;

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZATION_SUCCESS:
      return { ...state, initialized: true };
  }
  return state;
};

export default appReducer