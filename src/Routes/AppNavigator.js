import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import ForgotPassword from '../screens/ForgotPassword';
import ReadNDEF from '../screens/ReadNDEF';
import TagDetails from '../screens/TagDetails'
import NoNfc from '../screens/NoNfc';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator initialRouteName="HomePage" screenOptions={{headerShown: false}}>
      <Screen name="HomePage" component={Home}></Screen>
      <Screen name="ReadNDEF" component={ReadNDEF}></Screen>
      <Screen name="NoNfc" component={NoNfc}></Screen>
      <Screen name="ForgotPassword" component={ForgotPassword}></Screen>
      <Screen name="TagDetails" component={TagDetails}></Screen>
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
