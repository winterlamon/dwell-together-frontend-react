import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {
  authReducer,
  householdReducer,
  usersReducer,
  listCategoriesReducer
} from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const rootReducer = combineReducers({
  authReducer,
  householdReducer,
  usersReducer,
  listCategoriesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
