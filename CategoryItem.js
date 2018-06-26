import React, { Component } from 'react';
import { View, Platform, TouchableNativeFeedback, Text, StyleSheet } from 'react-native';

class CategoryItem extends Component {
  render() {
    return(
      <TouchableNativeFeedback
        background={
          Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''
        }
      >
        <View style={styles.button} >
          <Text style={styles.buttonText}> { this.props.category } </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 18
  },
  button: {
    marginBottom: 1,
    width: 360,
    alignItems: 'center',
    backgroundColor: 'hotpink'
  }
})

export default CategoryItem;
