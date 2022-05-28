import React, {useState} from 'react';
import {View} from 'react-native';
import AndroidPrompt from '../../components/AndroidPrompt';
import styles from '../../components/CustomView.style';
import stylesComp from './ReadNDEF.style';
import LottieView from 'lottie-react-native';
import CustomButton from '../../components/CustomButton';

function ReadNDEF() {
  const promptRef = React.useRef();

  const callPrompt = () => {
    promptRef.current.setVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.outer_border}>
        <View style={styles.inner_border}>
          <View style={{flex:1}}>
            <LottieView
              source={require('../../../assets/animations/98904-nfc-id-card-scan-iphone.json')}
              autoPlay
              loop
              style={stylesComp.lottie}
            />
            </View>
            <CustomButton onPress={callPrompt} text={'TARA'} type="PRIMARY" />

            {<AndroidPrompt ref={promptRef} />}
          
        </View>
      </View>
    </View>
  );
}

export default ReadNDEF;
