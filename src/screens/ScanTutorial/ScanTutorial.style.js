import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    lottie:{
          flex:3,
          width:100
    },
    text:{
        flex:1,
        fontSize:15, 
        color: 'white',
        textAlign:'center',
        fontWeight:'bold'
    },
    textView:{
        flex:0.4,
        backgroundColor:'rgb(27,27,27)',
        padding:25,
        height: Dimensions.get('window').height,
        borderRadius:10
    }
})