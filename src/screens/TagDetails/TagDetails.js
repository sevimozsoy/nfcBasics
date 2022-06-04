import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './TagDetails.style';
import stylesView from '../../components/CustomView/CustomView.style';

const TagDetails = ({route, navigation}) => {
  const {userDetails} = route.params;
  return (
    <View style={stylesView.outer_border}>
      <View style={stylesView.inner_border}>
        <View style={styles.boxing}>
          <Text style={styles.text}>User Name: {userDetails.name}</Text>
          <Text style={styles.text}>User Surname: {userDetails.surname}</Text>
          <Text style={styles.text}>User Age: {userDetails.age}</Text>
          <Text style={styles.text}>User City: {userDetails.city}</Text>
        </View>
      </View>
    </View>
  );
};

export default TagDetails;
