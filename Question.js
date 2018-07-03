import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Question extends Component {
  render() {
    return(
      <View>
        <Text> {this.props.navigation.state.params.question} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //
})

export default Question;
