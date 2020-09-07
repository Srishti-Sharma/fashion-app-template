import 'react-native-gesture-handler';
import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import Details from '../screens/Details';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/Header';

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
        <Stack.Screen name="Seasons" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
