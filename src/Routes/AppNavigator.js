import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import ForgotPassword from '../screens/ForgotPassword';
import TagDetails from '../screens/TagDetails';
import ScanTutorial from '../screens/ScanTutorial';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="HomePage"
        screenOptions={{headerShown: false}}>
        <Screen name="HomePage" component={Home}></Screen>
        <Screen name="ScanTutorial" component={ScanTutorial}></Screen>
        <Screen name="TagDetails" component={TagDetails} options={{headerShown:true}}></Screen>
        <Screen name="ForgotPassword" component={ForgotPassword}></Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
