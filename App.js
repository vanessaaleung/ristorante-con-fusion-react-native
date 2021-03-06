import 'react-native-gesture-handler';
import * as React from "react";
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore(); // will return store

export default function App() {
  return (
    <Provider store={store}> 
      <Main />
    </Provider>
    
  );
}
