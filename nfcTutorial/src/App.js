import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import nfcManager from 'react-native-nfc-manager';

function App() {
    const [hasNfc, setHasNfc] = React.useState(null);

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
            </View>
        )
    }
    return (
        <View style={styles.wrapper}>
            <Text>Hello Nfc</Text>
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
