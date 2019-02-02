import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import { Text, View } from 'react-native';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

export class App extends Component {
  
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyB6OtdiWv_jCz1ODo3vpQWrmHJxXzJfoIU",
      authDomain: "manager-bp.firebaseapp.com",
      databaseURL: "https://manager-bp.firebaseio.com",
      projectId: "manager-bp",
      storageBucket: "manager-bp.appspot.com",
      messagingSenderId: "506300037012"
    };
    
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;
