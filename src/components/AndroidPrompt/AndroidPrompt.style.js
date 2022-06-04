import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    
    margin: 0,
    
  },
  container: {
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    backgroundColor: '#fff',
    height: Dimensions.get('screen').height / 2,
  },
  lottie:{
    width: 300,
    height:250,
    alignSelf:'center',

  },
  text:{
    alignSelf:'center',
    fontSize:16, 
    marginBottom:22,
    color:'#8d8d8d'
  }
});
