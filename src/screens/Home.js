import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

export default function Entry({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    navigation.navigate('NfcCheck');
  };
  const onForgotPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.content}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/images/bg.png')}
        style={styles.bgImage}
      >
        <View style={styles.outer_border}>
          <View style={styles.inner_border}>

          <Image style={styles.logo} source={require('../../assets/images/nfc-icon-18.jpg')}/>

            <Text>Oturum Açın</Text>

            <CustomInput
              placeholder={'Kullanıcı Adı'}
              value={username}
              setValue={setUsername}
              icon={'user'}
            />
            <CustomInput
              placeholder={'Parola'}
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
              icon={'key'}
            />
            <CustomButton
              onPress={onSignInPressed}
              text={'Giriş'}
              type="PRIMARY"
            />
            <CustomButton
              onPress={onForgotPressed}
              text={'Şifremi Unuttum'}
              type="TERTIARY"
            />
          </View>
        </View>
      </ImageBackground>
    </View >
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  logo:{
    width:100,
    height:100,
    color:'white'
  },
  inner_border: {
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: 100,
    borderRadius: 20,
    margin: 10

  },
  outer_border: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',

  },
  bgImage: {
    flex: 1,
  }
});
