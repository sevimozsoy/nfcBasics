import React, {useState} from 'react';
import {View, Button } from 'react-native';
import AndroidPrompt from '../../components/AndroidPrompt';
import styles from '../../components/CustomView.style';

function ReadNDEF() {
  const promptRef = React.useRef();
  const [display, setDisplay] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.outer_border}>
        <View style={styles.inner_border}>
          <Button
            onPress={() => {
              promptRef.current.setVisible(true);
            }}
            title="scan"></Button>
          <AndroidPrompt ref={promptRef} />
        </View>
      </View>
    </View>
  );
}

export default ReadNDEF;
