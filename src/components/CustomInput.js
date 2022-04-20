import { View, TextInput, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input} 
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width - 20,
        backgroundColor:'#FFC1AD',
        borderColor:'#DE6139',
        borderWidth:1,
        borderRadius:10,
        marginVertical:5,
    },
    input:{
        alignSelf:'center'
    }
})

export default CustomInput