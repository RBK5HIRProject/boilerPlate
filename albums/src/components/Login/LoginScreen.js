import firebase from 'firebase';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Button, Spinner, CardSection } from '../common';
import LoginForm from './LoginForm';

class LoginScreen extends Component {
  // null: not sure if logged in, false: not logged in, true: logged in
  state = { loggedIn: null };
  const = { spinnerCenter } = Styles;

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAvwxCGoh-wVNxvOO5-mHOmyv8S9Efjhk0',
      authDomain: 'remotereview-9a7f7.firebaseapp.com',
      databaseURL: 'https://remotereview-9a7f7.firebaseio.com',
      projectId: 'remotereview-9a7f7',
      storageBucket: 'remotereview-9a7f7.appspot.com',
      messagingSenderId: '141980297000'
    });

    // track whether user is logged in
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn : true});
      } else {
        this.setState({ loggedIn : false});
      }
    });
  }

  // Change display based on whether user is signed in
  renderContent() {
    if (this.state.loggedIn === null) {
      return (
        <View style = { spinnerCenter }>
          <Spinner size = "large" />
        </View>
      );
    } else if (this.state.loggedIn === true) {
      return (
        <CardSection>
          <Button onPress = {() => firebase.auth().signOut()}>
            Logging Out
          </Button>
        </CardSection>
      )
    } else {
      return <LoginForm />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText = 'Login Page'/>
        {this.renderContent()}
      </View>
    ); 
  }

}

const Styles = StyleSheet.create({
  spinnerCenter: {
    alignSelf: 'center',
    justifyContent: 'center'
  }  
});

export default LoginScreen;
