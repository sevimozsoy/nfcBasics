import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './Home.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import nfcManager from 'react-native-nfc-manager';
import stylesView from '../../components/CustomView/CustomView.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessage from '../../../utils/authErrorMessage';

export default function Entry({navigation}) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);

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

  useEffect(() => {
    auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
        console.log(user)
      } else {
        console.log("kullanıcı yok")
      }
    });
  }, []);

  //navigates to password change screen
  const onForgotPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  //onSubmit checking values in here and if it fits the statements navigates ScanTutorial
  async function submit(values) {
    setLoading(true);
    if (values.username == '' || values.password == '') {
      showMessage({
        message: 'Bilgilerinizi eksik girdiniz!',
        type: 'warning',
      });
      setLoading(false);
    } else {
      auth()
        .signInWithEmailAndPassword(values.username, values.password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Registered with:', user.email);
          onSignInPressed();
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          showMessage({
            message: authErrorMessage(error.code),
            type: 'danger',
          });
        });
    }
  }

  if(user){
    onSignInPressed();
  }

  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../../assets/images/O-que-e-NFC-e-como-funciona-em-smartphones.jpg')}
      style={styles.bgImage}>
      <View style={stylesView.outer_border}>
        <View style={stylesView.inner_border}>
          <KeyboardAvoidingView behavior="height">
            <View style={styles.logo_field}>
              <Image
                resizeMethod="scale"
                style={styles.logo}
                source={require('../../../assets/images/pngegg.png')}
              />
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
                    loading={loading}
                    text={'Oturum aç'}
                    type="PRIMARY"
                  />
                  <CustomButton
                    onPress={onForgotPressed}
                    text={'Şifremi Unuttum'}
                    type="TERTIARY"
                  />
                </View>
              )}
            </Formik>
          </KeyboardAvoidingView>
        </View>
      </View>
    </ImageBackground>
  );
}
