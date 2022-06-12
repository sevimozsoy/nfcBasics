import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../components/CustomView/CustomView.style';
import stylesForgotPassword from '../ForgotPassword/ForgotPassword.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';


function ForgotPassword() {
  const [loading, setLoading] = useState(false)



  async function forgotPassword(values) {
    setLoading(true);
    if (values.username == '') {
      console.log(' kjdfnbjksdbf');
      showMessage({
        message: 'Bilgilerinizi eksik girdiniz!',
        type: 'warning',
      });
      setLoading(false);
    } else {
      auth()
        .sendPasswordResetEmail(values.username)
        .then(function () {
          showMessage({
            message: 'E-postanızı kontrol edin!',
            type: 'success',
          });
        });
      setLoading(false).catch(function (e) {});
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.outer_border}>
        <View style={styles.inner_border}>
          <Image
            source={require('../../../assets/images/lock.png')}
            resizeMethod="scale"
            style={stylesForgotPassword.logo}
          />
          <Formik initialValues={{username: ''}} onSubmit={forgotPassword}>
            {({handleSubmit, handleChange, values}) => (
              <View style={stylesForgotPassword.signIn_field}>
                <CustomInput
                  placeholder={'E-postanızı giriniz...'}
                  value={values.username}
                  onChangeText={handleChange('username')}
                />
                <CustomButton
                  onPress={handleSubmit}
                  loading={loading}
                  text={'Şifre Sıfırla'}
                  type="PRIMARY"
                />
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
}

export default ForgotPassword;
