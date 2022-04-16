import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Dimensions, ImageBackground } from "react-native";




export default function Entry({ navigation }) {

    return (
        <View style={styles.content}>
            <ImageBackground resizeMode='cover' source={require('../assets/images/bg.png')} style={styles.bgImage} />
            <View style={styles.borderView}></View>
            <TouchableOpacity onPress={() => {
                navigation.navigate("NfcCheck");
            }} style={styles.buttonSpecial}>
                <Text style={styles.buttonText}>Başlayın!</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    bgImage: {
        width: '100%',
        height: '100%'
    },
    borderView: {
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        borderRadius: 12,
        backgroundColor: '#FF8B66',
    },
    buttonSpecial: {
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