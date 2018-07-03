import React, { Component } from 'react';
import { View, Platform, TouchableNativeFeedback, Text, StyleSheet } from 'react-native';

// Routes
import { withNavigation } from 'react-navigation';

// Components
import Button from './Button'

class CategoryItem extends Component {
  render() {
    return(
      <Button
        text={this.props.category}
        onPress={() =>
          this.props.navigation.navigate('Question', { question: this.props.question })
        } />
    );
  }
}

export default withNavigation(CategoryItem);
