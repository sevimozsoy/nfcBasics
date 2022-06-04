import React from 'react';
import {View, ImageBackground, Image, Text, Alert, Button} from 'react-native';
import styles from './Home.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import nfcManager from 'react-native-nfc-manager';
import stylesView from '../../components/CustomView/CustomView.style';
import {Formik} from 'formik';
// import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import axios from 'axios';

export default function Entry({navigation}) {
  //checks for if the device have nfc or not
  async function onSignInPressed() {
    const supported = await nfcManager.isSupported();
    if (supported === true) {
      navigation.navigate('ScanTutorial');
    } else {
      Alert.alert(
        'Oppps!',
        'Cihazınızda Nfc bulunmadığı için işlemlerinizi gerçekleştiremiyoruz, lütfen başka bir cihazla deneyin.',
      );
    }
  }

  //navigates to password change screen
  const onForgotPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  async function getData(){
    console.log(axios.get(Config.API_URL))
  }

  //onSubmit checking values in here and if it fits the statements navigates ScanTutorial
  function submit(values) {
    if (values) {
      onSignInPressed();
    }
    console.log(values);

  }

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

          <Formik
            initialValues={{username: '', password: ''}}
            onSubmit={submit}>
            {({handleSubmit, handleChange, values}) => (
              <View style={styles.signIn_field}>
                <CustomInput
                  placeholder={'Kullanıcı Adı'}
                  value={values.username}
                  onChangeText={handleChange('username')}
                  icon={'user'}
                />
                <CustomInput
                  placeholder={'Parola'}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                  icon={'key'}
                />
                <CustomButton
                  onPress={handleSubmit}
                  text={'Giriş'}
                  type="PRIMARY"
                />
              </View>
            )}
          </Formik>
          <Button
            title={'bas'}
            onPress={() => {
              getData();
            }}></Button>
        </View>
      </View>
    </ImageBackground>
  );
}
