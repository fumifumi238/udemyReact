import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"

import EventsIndex from "./components/events_index";
import reducer from "./reducers";
import reportWebVitals from "./reportWebVitals";

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <EventsIndex />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your EventsIndex, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
