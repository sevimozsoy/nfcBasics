import React from 'react';
import { TouchableOpacity, StyleSheet, Text, SafeAreaView, View, Dimensions, ImageBackground, Image } from "react-native";
import CustomInput from '../components/CustomInput';




export default function Entry({ navigation }) {

    return (
        <SafeAreaView style={styles.content}>
            <ImageBackground resizeMode='cover' source={require('../../assets/images/bg.png')} style={styles.bgImage} />
            <View style={styles.borderView}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
                <View style={styles.input}>
                    <CustomInput />
                    <CustomInput />
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("NfcCheck");
                }} style={styles.buttonSpecial}>
                    <Text style={styles.buttonText}>Başlayın!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    bgImage: {
        width: '100%',
        height: Dimensions.get('window').height / 2,
    },
    logo:{
        position: 'absolute',
        width: '50%',
        height: '50%',
    },
    borderView: {
        position: 'absolute',
        alignItems: 'center',
        bottom:0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 1.5,
        borderRadius: 12,
        backgroundColor: '#FF8B66',
    },
    input: {
        position: 'absolute',
        bottom: 130,
    },
    buttonSpecial: {
        position: 'absolute',
        bottom: 70,
        justifyContent: 'center',
        backgroundColor: '#6D7CC4',
        borderRadius: 12,
        width: 300,
        height: 43
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        color: '#ffff',
        fontSize: 20,
    }

})