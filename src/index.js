import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

// const reducer = (state = { hi: true }, action) => {
//   console.log("IN THE REDUCER");
//   console.log("state", state);
//   console.log("action", action);
//
//   switch (action.type) {
//     case "CHANGE_HI":
//       return { hi: !state.hi };
//     default:
//       return state;
//   }
// };
const rootReducer = combineReducers({});
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
