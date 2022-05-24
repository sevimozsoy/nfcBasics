import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../components/CustomView.style';

function ForgotPassword() {
  return (
    <View style={styles.container}>
      <View style={styles.outer_border}>
        <View style={styles.inner_border}>
          <Text>ForgotPassword</Text>
        </View>
      </View>
    </View>
  );
}

export default ForgotPassword;
