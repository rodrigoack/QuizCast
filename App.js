import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Routes
import { createStackNavigator } from 'react-navigation';

// Components
import CategoryList from './CategoryList';
import Question from './Question';

const RootStack = createStackNavigator(
  {
    Home:  CategoryList,
    Question: Question
  },
  {
    initialRouteName: 'Home',
  }
);

class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24
  },
});

export default App;
