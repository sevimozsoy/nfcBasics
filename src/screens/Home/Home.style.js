import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    width:Dimensions.get("screen").width,
    height:Dimensions.get("screen").height - 20
  },

  keyboardAvoid:{
    margin:10
  },

  logo_field: {
    flex: 0.7,
    marginBottom:50,
    padding:10,
  },

  logo: {
    width: 150,
    height: 150,
    justifyContent:'center',
    alignSelf:'center',
    tintColor: 'white',

    
  },

  signIn_field:{
    flex:1.7
  }

});
