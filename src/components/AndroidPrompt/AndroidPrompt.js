import Modal from 'react-native-modal';
import {Button, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './AndroidPrompt.style';
import LottieView from 'lottie-react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import CustomButton from '../CustomButton';

function ModalTester({prompt, setPrompt, navigation}) {
  async function nfc() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.ndefHandler.getCachedNdefMessageAndroid();
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
            source={require('../../../assets/animations/lf30_editor_ck3py0ei.json')}
            autoPlay
            loop
            style={styles.lottie}
          />
          <View style={styles.lowerPrompt}>
            <Text style={styles.text}>Tarama işlemi yapmaya hazır!</Text>
            <CustomButton
              style={styles.button}
              text={'İptal'}
              type="PRIMARY_BLACK"
              onPress={toggleModal}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;
