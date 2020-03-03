import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { landOwnerRegisterReducer } from "./stateManagement/reducers";
import { rvOwnerRegisterReducer } from './stateManagement/reducers';
import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

const combinedReducer = combineReducers({
    loRegFormValues: landOwnerRegisterReducer,
    rvOwnerRegFormValues: rvOwnerRegisterReducer
});

const store = createStore(
  combinedReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
