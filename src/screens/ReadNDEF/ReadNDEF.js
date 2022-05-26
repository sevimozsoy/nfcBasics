import React, {useState} from 'react';
import {View, Button } from 'react-native';
import AndroidPrompt from '../../components/AndroidPrompt';
import styles from '../../components/CustomView.style';
import LottieView from 'lottie-react-native'

function ReadNDEF() {
  const promptRef = React.useRef();
  
  return (
    <View style={styles.container}>
      <View style={styles.outer_border}>
        <View style={styles.inner_border}>
        <LottieView
            source={require('../../../assets/animations/98904-nfc-id-card-scan-iphone.json')}
            autoPlay
            loop
            style={styles.lottie}
          />
          <Button
            onPress={() => {
              promptRef.current.setVisible(true);
            }}
            title="scan"></Button>
          {<AndroidPrompt ref={promptRef} />}
        </View>
      </View>
    </View>
  );
}

export default ReadNDEF;
