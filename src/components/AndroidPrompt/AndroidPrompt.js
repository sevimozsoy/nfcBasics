import Modal from 'react-native-modal';
import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './AndroidPrompt.style';
import LottieView from 'lottie-react-native';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';
import CustomButton from '../CustomButton/CustomButton';
import {showMessage} from 'react-native-flash-message';
import authErrorMessage from '../../../utils/authErrorMessage';

function AndroidPrompt({prompt, setPrompt, navigation}) {
  let tag = null;
  const [cancelled, setCancelled] = useState();

  async function nfc() {
    try {
      await NfcManager.requestTechnology([NfcTech.Ndef]);
      tag = await NfcManager.getTag();
      tag.ndefStatus = await NfcManager.ndefHandler.getNdefStatus();

      const ndef =
        Array.isArray(tag.ndefMessage) && tag.ndefMessage.length > 0
          ? tag.ndefMessage[0]
          : null;

      let text = Ndef.text.decodePayload(ndef.payload);

      const tagDetailsJSON = JSON.parse(text);
      setPrompt(false);

      navigation.navigate('TagDetails', {userDetails: tagDetailsJSON});
    } catch (ex) {
      if (cancelled == !true) {
        showMessage({
          message: authErrorMessage(ex),
          type: 'danger',
        });
      }
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }

  useEffect(() => {
    let cancel = false;
    nfc();
    if (cancel) return;
    return () => {
      cancel = true;
    };
  }, []);

  const toggleModal = () => {
    setPrompt(false);
    setCancelled(true);
    NfcManager.cancelTechnologyRequest();
  };

  return (
    <View>
      <Modal
        isVisible={prompt}
        onSwipeComplete={toggleModal}
        swipeDirection="down"
        style={styles.modal}>
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

export default AndroidPrompt;
