import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Profile, Home, Details, Login, Signup} from '../screens';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'white',
            height: 120,
          },
          headerTitleStyle: {
            fontFamily: 'Times New Roman',
            fontSize: 25,
            fontStyle: 'italic',
          },
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            paddingLeft: 10,
            paddingTop: 5,
          },
          // header: () => {
          //   return <Header />;
          // },
        }}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Seasons" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
