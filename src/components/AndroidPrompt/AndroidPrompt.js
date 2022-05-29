import Modal from 'react-native-modal';
import {Button, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Android.style';
import LottieView from 'lottie-react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';

function ModalTester({prompt, setPrompt, navigation}) {
  async function nfc() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
      navigation.navigate('TagDetails');
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  useEffect(() => {
    nfc();
  }, []);

  const toggleModal = () => {
    setPrompt(false);
    NfcManager.cancelTechnologyRequest();
  };

  return (
    <View>
      <Modal isVisible={prompt} swipeDirection="down" style={styles.modal}>
        <View style={styles.container}>
          <LottieView
            source={require('../../../assets/animations/68987-nfc-blue-reader.json')}
            autoPlay
            loop
            style={styles.lottie}
          />
          <Text>bottom half</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;
