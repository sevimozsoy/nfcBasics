import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomInput = ({value, setValue, placeholder, secureTextEntry, icon}) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name={icon} solid style={styles.icon} color={'gray'} size={15} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        placeholderTextColor='gray'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width - 50,
    backgroundColor: 'rgb(27,27,27)',   
    borderRadius: 10,
    marginVertical: 5,
  },
  input: {
    paddingLeft:10,
    color:'white',
    fontFamily: 'Montserrat-Medium',
    fontSize:12,
    flex:10
  },
  icon: {
    paddingLeft:10,
    paddingBottom:2
  },
});

export default CustomInput;
