import {Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text, type}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
        <Text style={[styles.input, styles[`input_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        justifyContent: 'center',
    },
    container_PRIMARY:{
        backgroundColor: '#6D7CC4',
        borderRadius: 12,
        width: 300,
        height: 43
    },
    container_TERTIARY:{},
    input: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
    },
    input_PRIMARY:{
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    input_TERTIARY:{
        color:'black',

    }
})

export default CustomButton