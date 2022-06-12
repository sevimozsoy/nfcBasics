import {View, Text} from 'react-native';
import React from 'react';
import styles from './TagDetails.style';
import stylesView from '../../components/CustomView/CustomView.style';


const TagDetails = ({route, navigation}) => {
  const {userDetails} = route.params;

  return (
    <View style={stylesView.outer_border}>
      <View style={stylesView.inner_border}>
        <View style={styles.boxing}>
          <Text style={styles.text}>Öğrenci Adı Soyadı: {userDetails.name}</Text>
          <Text style={styles.text}>Öğrenci Numarası: {userDetails.number}</Text>
          <Text style={styles.text}>Öğrenci TCNO: {userDetails.tc}</Text>
          <Text style={styles.text}>Öğrenci Fakültesi: {userDetails.fac}</Text>
          <Text style={styles.text}>Öğrenci Bölümü: {userDetails.dep}</Text>
          <Text style={styles.text}>Öğrenci Telefon Numarası: {userDetails.phone}</Text>
        </View>
      </View>
    </View>
  );
};

export default TagDetails;
