

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {todoReducer} from './src/Redux/Reducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(todoReducer,enhancer);

const App = () => {

  return (
    <View>Hello</View>
  );
}  

export default App;
