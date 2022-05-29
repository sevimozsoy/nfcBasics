import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#fff',
    height: Dimensions.get('screen').height / 2,
  },
  lottie:{
    width: 300,
    height:300,
    padding:0,
    margin: 0
  }
});
