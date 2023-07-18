import { getState } from "../store";

export const getFind = (state: getState) => state.filters.find;
