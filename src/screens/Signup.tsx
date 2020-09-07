import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from '../components/Button';

export default function SignUp({navigation}: any) {
  return (
    <View style={styles.container}>
      <Button text={'Sign up'} onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
