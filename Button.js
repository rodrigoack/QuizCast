import React, { Component } from 'react';
import { View, Platform, TouchableNativeFeedback, Text, StyleSheet } from 'react-native';

// Routes
import { withNavigation } from 'react-navigation';

class Button extends Component {
  render() {
    return(
      <TouchableNativeFeedback
        background={
          Platform.OS === 'android'
            ? TouchableNativeFeedback.SelectableBackground()
            : ''
        }
        onPress={this.props.onPress}
      >
        <View style={styles.button} >
          <Text style={styles.buttonText}> { this.props.text } </Text>
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
});

export default withNavigation(Button);
