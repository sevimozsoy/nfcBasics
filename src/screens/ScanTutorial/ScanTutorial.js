import React, {useState, useEffect} from 'react';
import {View, Platform, Text} from 'react-native';
import AndroidPrompt from '../../components/AndroidPrompt';
import styles from '../../components/CustomView.style';
import stylesComp from './ScanTutorial.style';
import LottieView from 'lottie-react-native';
import CustomButton from '../../components/CustomButton';
import NfcManager from 'react-native-nfc-manager';

function ReadNDEF({navigation}) {
  const [prompt, setPrompt] = useState(false);

  const platform = Platform.OS;

  const renderPrompt = () => {
    if (platform === 'android') {
      return (
        prompt && (
          <AndroidPrompt
            prompt={prompt}
            setPrompt={setPrompt}
            navigation={navigation}
          />
        )
      );
    } else return null; //ios nfc config comes here.
  };

  const callPrompt = () => {
    setPrompt(true);
    NfcManager.start();
  };

  useEffect(() => {
    if (prompt === true) {
    }
  }, [prompt]);

  return (
    <View style={styles.container}>
      <View style={styles.outer_border}>
        <View style={styles.inner_border}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={stylesComp.textView}>
              <Text style={stylesComp.text}>
                Kartınızı aşağıdaki gibi okutmayı deneyin!
              </Text>
            </View>
            <LottieView
              source={require('../../../assets/animations/50037-nfc-card-read.json')}
              autoPlay
              loop
              style={stylesComp.lottie}
            />
          </View>
          <CustomButton onPress={callPrompt} text={'TARA'} type="PRIMARY" />
          {renderPrompt()}
        </View>
      </View>
    </View>
  );
}

export default ReadNDEF;
