import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name='user' solid style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#FFC1AD',
    borderColor: '#DE6139',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
  },
  input: {},
  icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomInput;
