import firebase from 'firebase';
import React,{Component} from 'react';
import {View} from 'react-native';
import {Header} from './component/common';
import LoginForm from './component/LoginForm.js';
class App extends Component{
    componentWillMount(){
        firebase.initializeApp({
    apiKey: "AIzaSyCG1m6ZmVovWbGrTc2DZ1sJNJm5L3SNBQQ",
    authDomain: "authentication-99476.firebaseapp.com",
    databaseURL: "https://authentication-99476.firebaseio.com",
    projectId: "authentication-99476",
    storageBucket: "authentication-99476.appspot.com",
    messagingSenderId: "889644366622"
  });
    }
    render(){
        return(
            <View>
                <Header headerText='Authentication'/>
                <LoginForm />
            </View>
        )
    }
}

export default App;