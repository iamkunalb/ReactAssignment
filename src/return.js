import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';

export default class Return extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Add Todo screen</Text>
      </View>
    );
  }
}
