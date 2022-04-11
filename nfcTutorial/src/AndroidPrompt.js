import React from 'react';
import { 
    View,
    Modal,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Animated
 } from "react-native";

 function AndroidPrompt(props, ref) {
     const [visible, setVisible] = React.useState(false);
     const [_visible, _setVisible] = React.useState(false);
     const [hintText, setHintText] = React.useState('');
     const animValue = React.useRef(new Animated.Value(0)).current;

     React.useEffect(() => {
        if(ref){
            ref.current = {
                setVisible: _setVisible,
                setHintText,
            };
        }
     }, [ref]);

     React.useEffect(() => {
         if(_visible) {
             setVisible(true);
             Animated.timing(animValue, {
                 duration: 0,
                 toValue: 1,
                 useNativeDriver: true,
             }).start();
         }else{
             Animated.timing(animValue, {
                 duration: 0,
                 toValue: 0,
                 useNativeDriver: true,
             }).start(() => {
                 setVisible(false),
                 setHintText('');
             });
         }
    }, [_visible, animValue])

    const backdropAnimStyle = {
        opacity: animValue,
    };

    const promptAnimStyle = {
        transform: [
            {
                translateY: animValue.interpolate({
                inputRange: [0,1],
                outputRange: [500,0],
            })
        },
        ],
    };

  return (
    <Modal visible={visible} transparent={true}>
        <View style={styles.content}>
            <Animated.View style={[styles.backdrop, StyleSheet.absoluteFill, backdropAnimStyle]}/>
            <Animated.View style={[styles.prompt, promptAnimStyle]}>
                <Text style={styles.hintHeader}>{hintText || 'Taramaya Hazır'}</Text>
                <Text style={styles.hint}>{hintText || 'Kartınızı sensöre yaklaştırın'}</Text>
                    <TouchableOpacity 
                    onPress={() => {
                        _setVisible(false);
                    }}
                    style={styles.btn}>
                        <Text>Vazgeç</Text>
                    </TouchableOpacity>
            </Animated.View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    content:{
        flex:1
    },
    backdrop: {
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    prompt: {
        position: 'absolute',
        bottom: 0,
        left: 20,
        width: Dimensions.get('window').width - 2 * 20,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    hintHeader:{
        fontSize: 20,
        marginBottom: 20
    },
    hint:{
        fontSize: 15,
    },
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10
    }
})
export default React.forwardRef(AndroidPrompt);