import { getState } from "../store";

export const getUsers = (state: getState) => state.users.users;