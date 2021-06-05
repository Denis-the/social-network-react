import types from "./types";

const initialProfileState = {
  profileInfo: null,
  status: null,
  isFetching: false,
};

const profileReducer = (state = initialProfileState, action) => {
  switch (action.type) {
    case types.SET_STATUS:
    case types.TOGGLE_IS_FETCHING:
    case types.SET_PROFILE: {
      return { ...state, ...action.payload };
    }
  }

  return state;
};

export default profileReducer;
