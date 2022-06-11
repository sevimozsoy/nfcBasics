import React from 'react';
import AppNavigator from './src/Routes/AppNavigator';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  return (
    <>
      <AppNavigator></AppNavigator>
      <FlashMessage />
    </>
  );
}
