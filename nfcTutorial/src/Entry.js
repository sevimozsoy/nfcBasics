import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Dimensions, Image } from "react-native";
import App from "./App";

export default function Entry() {
    return (
        <View style={styles.content}>
            <View style={styles.bgImage}>
                <Image source={require('../assets/images/bg.png')} />
            </View>
            <View style={styles.borderView}></View>
            <TouchableOpacity onPress={() => {
                    // going to add a navigation to the app component
                }} style={styles.butonSpecial}>
                <Text style={styles.buttonText}>Başlayın!</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    bgImage:{
        width: '100%',
        height:'100%'
    },
    borderView: {
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        borderRadius: 12,
        backgroundColor: '#FF8B66',
        zIndex: -1,
    },
    butonSpecial: {
        position: 'absolute',
        bottom: 70,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#6D7CC4',
        borderRadius: 12,
        width: 345,
        height: 43
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        color: '#ffff',
        fontSize: 20,
    }

})