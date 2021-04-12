import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, useHistory } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

export const Context = React.createContext();

let reduxThunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }

  next(action);
};
const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

const sagaMiddleware = createSagaMiddleware();
let store;

function App({ children, reducers, appSaga }) {
  let history = useHistory();

  function delayLink(e) {
    document.body.classList.remove("menu-is-show");
    document.querySelector(".loading-page").style.transform = "scale(25)";
    e.preventDefault();
    setTimeout(() => {
      history.push(e.target.href.replace(window.location.origin, ""));
      document.querySelector(".loading-page").style.transform = "scale(0)";
    }, 1000);
  }

  if (!store) {
    if (!reducers) reducers = () => {};
    store = createStore(
      reducers,
      composeEnhancers(applyMiddleware(sagaMiddleware, reduxThunk))
    );
    sagaMiddleware.run(appSaga);
  }

  return (
    <Provider store={store}>
      <Context.Provider value={{ delayLink }}>{children}</Context.Provider>
    </Provider>
  );
}

const AppProvider = ({ children, reducers, appSaga }) => {
  return (
    <BrowserRouter>
      <App reducers={reducers} appSaga={appSaga}>
        {children}
      </App>
    </BrowserRouter>
  );
};

export default AppProvider;
