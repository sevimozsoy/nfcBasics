import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Dimensions, ImageBackground, Image } from "react-native";
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';




export default function Entry({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        navigation.navigate("NfcCheck");
    };
    const onForgotPressed = () => {
        navigation.navigate("ForgotPassword");
    };

    return (
        <SafeAreaView style={styles.content}>
            <ImageBackground resizeMode='cover' source={require('../../assets/images/bg.png')} style={styles.bgImage} />
            <View style={styles.borderView}>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                <View style={styles.input}>
                    <CustomInput placeholder={'Kullanıcı Adı'} value={username} setValue={setUsername} />
                    <CustomInput placeholder={'Parola'} value={password} setValue={setPassword} secureTextEntry={true} />
                    <CustomButton onPress={onSignInPressed} text={'Giriş'} type="PRIMARY" />
                    <CustomButton onPress={onForgotPressed} text={'Şifremi Unuttum'} type="TERTIARY"/>
                </View>
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
    logo: {
        position: 'absolute',
        width: '40%',
        height: '40%',
    },
    borderView: {
        position: 'absolute',
        alignItems: 'center',
        bottom: -10,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 1.5,
        borderRadius: 12,
        backgroundColor: '#FF8B66',
    },
    input: {
        position: 'absolute',
        bottom: 60,
        alignItems:'center',
        marginVertical: 5,
    },
})