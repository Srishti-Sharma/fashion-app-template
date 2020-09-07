import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../components/Button';

export default function Login({navigation}: any) {
  return (
    <View style={styles.container}>
      <Button text={'Login'} onPress={() => navigation.navigate('Seasons')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});
