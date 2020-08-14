import React from "react";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { QuoteForm } from "./components/QuoteForm";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <QuoteForm />
    </Provider>
  );
}

export default App;
