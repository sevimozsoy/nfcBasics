import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import AndroidPrompt from '../components/AndroidPrompt';



function ReadNDEF() {
  const promptRef = React.useRef();
  return (
    <View style={styles.wrapper}>
      <Button
        onPress={() => {
          promptRef.current.setVisible(true);
        }}
        title="scan"></Button>
      <AndroidPrompt ref={promptRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReadNDEF;
