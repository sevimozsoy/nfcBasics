import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import nfcManager from 'react-native-nfc-manager';
import AndroidPrompt from "../components/AndroidPrompt";

function App() {
    const [hasNfc, setHasNfc] = React.useState(null);
    const promptRef = React.useRef();

    React.useEffect(() => {
        async function checkNfc() {
            const suppported = await nfcManager.isSupported();
            if (suppported) {
                await nfcManager.start();
            }
            setHasNfc(suppported);
        }
        checkNfc();
    }, []);


    if (hasNfc === null) {
        return null;
    } else if (!hasNfc) {
        return (
            <View style={styles.wrapper}>
                <Text>Cihazınız NFC desteklemiyor.</Text>
                <TouchableOpacity 
                onPress={() => {
                    promptRef.current.setVisible(true);
                }}>
                <Text>Test</Text>
                </TouchableOpacity>
                <AndroidPrompt ref={promptRef}/>
            </View>
        )
    }
    return (
        <View style={styles.wrapper}>
            <Text>Hello Nfc</Text>
            <TouchableOpacity 
                onPress={() => {
                    promptRef.current.setVisible(true);
                }}>
                <Text>Test</Text>
                </TouchableOpacity>
                <AndroidPrompt ref={promptRef}/>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
