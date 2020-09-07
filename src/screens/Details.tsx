import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {colors} from '../styles/color';

export default class Details extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DETAILS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.primary,
  },
});
