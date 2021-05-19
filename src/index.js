import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// Store Import
import store from "./redux/store";
import App from "./App";
//import AddDataToFirebase from "./firebase/addDataHelper/AddDataToFirebase";
// CSS Import
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      {/* <AddDataToFirebase /> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
