import { combineReducers } from "redux";
import get from "lodash/get";
import { initialState } from "./constants";

const CommonState = (state = initialState, action) => {
  const payload = get(action, "payload", null);
  switch (action.type) {
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  CommonState,
});

export default rootReducer;
