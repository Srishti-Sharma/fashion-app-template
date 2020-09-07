import React, {FC} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import AppNavigator from './navigator/appNavigator';

const App: FC = () => {
  return <AppNavigator />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
