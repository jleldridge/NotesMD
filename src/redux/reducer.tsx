import { createStore } from "redux";

function reduce(state = {}, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

let store = createStore(reduce);
export default store;
