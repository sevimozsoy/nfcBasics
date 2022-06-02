import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import ForgotPassword from '../screens/ForgotPassword';
import ReadNDEF from '../screens/ScanTutorial';
import TagDetails from '../screens/TagDetails';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="HomePage"
        screenOptions={{headerShown: false}}>
        <Screen name="HomePage" component={Home}></Screen>
        <Screen name="ReadNDEF" component={ReadNDEF}></Screen>
        <Screen name="TagDetails" component={TagDetails} options={{headerShown:true}}></Screen>
        <Screen name="ForgotPassword" component={ForgotPassword}></Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
