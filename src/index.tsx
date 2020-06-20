import React from 'react';
import { AppRegistry } from "react-native";
import * as serviceWorker from './serviceWorker'; 
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Home/>
      </Provider>
    </React.StrictMode>
  );
}

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();