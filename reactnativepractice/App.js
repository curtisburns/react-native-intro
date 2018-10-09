/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';


export default class App extends Component {
  getUserLocationHandler = () => {
    console.log('press!');
    navigator.geolocation.getCurrentPosition(position =>
      console.log(position), err =>
      console.log(err)
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello world!!</Text>
        <FetchLocation onGetLocation={this.getUserLocationHandler}/>
        <UsersMap />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
