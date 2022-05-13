import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import NfcCheck from '../components/NfcCheck';
import ForgotPassword from '../screens/ForgotPassword';
import ReadNDEF from '../screens/ReadNDEF';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator initialRouteName="HomePage" screenOptions={{headerShown: false}}>
      <Screen name="HomePage" component={Home}></Screen>
      <Screen name="ReadNDEF" component={ReadNDEF}></Screen>
      <Screen name="NfcCheck" component={NfcCheck}></Screen>
      <Screen name="ForgotPassword" component={ForgotPassword}></Screen>
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
