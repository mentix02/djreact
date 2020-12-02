import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import BaseRouter from "./routes";
import store, { persistor } from "./store";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Navigation />
          <BaseRouter />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
