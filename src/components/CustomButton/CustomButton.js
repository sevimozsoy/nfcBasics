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
        marginTop: 20,
        justifyContent: 'center',
    },
    container_PRIMARY:{
        backgroundColor: 'rgba(214,214,214,0.3)',
        borderRadius: 12,
        padding: 10
    },
    container_PRIMARY_BLACK:{
        backgroundColor: '#8d8d8d',
        borderRadius: 12,
        padding: 10,
        margin: 15
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
        color:'rgba(192,192,192,0.4)',
    },
    input_PRIMARY_BLACK:{
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 20,
    },
})

export default CustomButton