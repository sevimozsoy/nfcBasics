import React, {useState} from 'react';
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import ForgotPassword from '../screens/ForgotPassword';
import TagDetails from '../screens/TagDetails';
import ScanTutorial from '../screens/ScanTutorial';
import auth from '@react-native-firebase/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => {
  const [logged, setLogged] = useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setLogged(user);
    });
  }, []);

  const logOut = () => {
    auth().signOut();
    setLogged(false);
    console.log(logged);
  };

  const AuthStack = () => {
    return (
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home}></Screen>
        <Screen name="ForgotPassword" component={ForgotPassword}></Screen>
      </Navigator>
    );
  };

  const options = {
    title: '',
    headerStyle: {
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    headerTintColor: '#fff',

    headerRight: () => (
      <FontAwesome5
        name="chevron-circle-left"
        size={23}
        onPress={logOut}
        title="Info"
        color="#fff"
      />
    ),
  };

  return (
    <NavigationContainer>
      <Navigator>
        {!logged ? (
          <Screen
            name="AuthStack"
            component={AuthStack}
            options={{headerShown: false}}></Screen>
        ) : (
          <>
            <Screen
              name="ScanTutorial"
              component={ScanTutorial}
              options={options}></Screen>
            <Screen
              name="TagDetails"
              component={TagDetails}
              options={options}></Screen>
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
