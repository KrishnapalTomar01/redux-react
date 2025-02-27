import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// store.dispatch({ type: "account/deposit", payload: 500 });

// console.log(store.getState());

// store.dispatch(deposit(500));

//console.log(store.getState());

// store.dispatch(createCustomer("Krish reg", "2423sf"));

// console.log(store.getState());
