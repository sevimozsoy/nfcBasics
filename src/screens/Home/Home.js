import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  Alert,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import nfcManager from 'react-native-nfc-manager';
import stylesView from '../../components/CustomView.style'

export default function Entry({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    const supported = nfcManager.isSupported();
    console.log(supported);
    if (supported) {
      navigation.navigate('ReadNDEF');
    } else {
      Alert.alert('Telefonunuzda NFC bulunmamakta :(');
    }
  };
  const onForgotPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../../assets/images/O-que-e-NFC-e-como-funciona-em-smartphones.jpg')}
      style={styles.bgImage}>
      <View style={stylesView.outer_border}>
        <View style={stylesView.inner_border}>
          <View style={styles.logo_field}>
            <Image
              style={styles.logo}
              source={require('../../../assets/images/pngegg.png')}
            />
            <Text numberOfLines={1} style={styles.sign_in}>
              Oturum Açın
            </Text>
          </View>

          <View style={styles.signIn_field}>
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
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: 'center',
  },

  signIn_field: {
    flex: 1,
  },

  logo_field: {
    flex: 1.5,
  },

  logo: {
    width: 190,
    height: 190,
    tintColor: 'white',
  },

  sign_in: {
    alignSelf: 'center',
    paddingTop: 30,
    fontSize: 25,
    fontFamily: 'Montserrat-Thin',
    color: 'white',
  },
});
