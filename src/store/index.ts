import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { authInitialState, AuthState } from "./reducers/authReducer";
import rootReducer from "./reducers/rootReducer"
import { userInitialState, UserState } from "./reducers/userReducer";

interface State {
  user: UserState;
  auth: AuthState;
};

const initialState: State = {
  user: {...userInitialState},
  auth: {...authInitialState}
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
