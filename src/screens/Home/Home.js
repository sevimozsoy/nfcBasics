import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  Alert,
} from 'react-native';
import styles from './Home.style'
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import nfcManager from 'react-native-nfc-manager';
import stylesView from '../../components/CustomView.style';

export default function Entry({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

//checks for if the device have nfc or not
  async function onSignInPressed() {
    const supported = await nfcManager.isSupported();    
    if (supported === true) {
      navigation.navigate('ReadNDEF');
    } else {
      Alert.alert('Oppps!','Cihazınızda Nfc bulunmadığı için işlemlerinizi gerçekleştiremiyoruz, lütfen başka bir cihazla deneyin.')
    }
  }


  //navigates to password change screen
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


