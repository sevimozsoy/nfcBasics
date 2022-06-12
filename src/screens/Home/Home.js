import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './Home.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import stylesView from '../../components/CustomView/CustomView.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessage from '../../../utils/authErrorMessage';
import RNBootSplash from 'react-native-bootsplash';
import nfcManager from 'react-native-nfc-manager';

export default function Entry({navigation}) {
  const [loading, setLoading] = useState(false);
  const [hasNfc, setHasNfc] = useState(false);

  useEffect(() => {
    RNBootSplash.hide({fade: true});

    checkNfc();
    return () => {
      setHasNfc();
    };
  }, []);

  //checks for if the device have nfc or not
  async function checkNfc() {
    const supported = await nfcManager.isSupported();
    if (supported === true) {
      setHasNfc(true);
    }
  }

  //navigates to password change screen
  const onForgotPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  //onSubmit checking values in here and if it fits the statements navigates ScanTutorial
  async function submit(values) {
    if (hasNfc == !true) {
      showMessage({
        message:
          'Cihazınızda NFC olmadığı için istediğiniz işlemleri gerçekleştiremeyeceğiz :(',
        type: 'danger',
      });
      return;
    }
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

  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../../assets/images/lovepik-technology-circuit-chip-mobile-phone-wallpaper-background-image_400706151.jpg')}
      style={styles.bgImage}>
      <View style={stylesView.inner_border}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoid}>
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
    </ImageBackground>
  );
}
