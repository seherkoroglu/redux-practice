/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// App.js


import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Provider  store = {store}>
      <TodoList />
      
      </Provider>
  );
  
};

export default App;



