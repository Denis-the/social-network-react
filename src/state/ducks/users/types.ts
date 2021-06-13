import { UserIdType } from "../auth/types";

const SET_USERS = "social/users/SET-USERS";
const SET_SEARCH_TERM = "social/users/SET_SEARCH_TERM";
const SET_SEARCH_FOLLOWED = "social/users/SET_SEARCH_FOLLOWED";
const SET_PER_PAGE_COUNT = "social/users/SET-PER-PAGE-COUNT";
const SET_TOTAL_USERS_COUNT = "social/users/SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "social/users/SET-CURRENT-PAGE";
const FOLLOW = "social/users/FOLLOW";
const UNFOLLOW = "social/users/UNFOLLOW";
const TOGGLE_IS_FETCHING = "social/users/TOGGLE-IS-FETCHING";
const ADD_FOLLOWING_IN_PROGRESS = "social/users/ADD-FOLLOWING-IN-PROGRESS";
const DELETE_FOLLOWING_IN_PROGRESS = "social/users/DELETE-FOLLOWING-IN-PROGRESS";

type UserType = {
  name: string;
  id: UserIdType;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  followed: boolean;
};

type FetchUsersArgType = {
  page: number;
  perPage: number;
  term: string | null;
  followed: boolean | null;
};

export type { UserType, FetchUsersArgType };

export default {
  SET_USERS,
  SET_SEARCH_TERM,
  SET_SEARCH_FOLLOWED,
  SET_PER_PAGE_COUNT,
  SET_TOTAL_USERS_COUNT,
  SET_CURRENT_PAGE,
  FOLLOW,
  UNFOLLOW,
  TOGGLE_IS_FETCHING,
  ADD_FOLLOWING_IN_PROGRESS,
  DELETE_FOLLOWING_IN_PROGRESS,
};
