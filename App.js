import 'react-native-gesture-handler';
import React from 'react';
import {
  Text,
  View,
  Pressable,
  Alert,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import welcomeScreen from './src/screen/welcomeScreen';
import loginScreen from './src/screen/loginScreen'
import createAccScreen from './src/screen/createAccScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen
          name='welcomeScr'
          component={welcomeScreen}
        />
        <Stack.Screen
          name='loginScr'
          component={loginScreen}
        />
        <Stack.Screen
          name='createAccScr'
          component={createAccScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
