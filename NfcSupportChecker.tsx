import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import NfcManager from 'react-native-nfc-manager';

const NFCSupportChecker = () => {
  const [nfcSupported, setNfcSupported] = useState(false);

  useEffect(() => {
    // Function to check NFC support
    const checkNFCSupport = async () => {
      try {
        await NfcManager.start();
        const isSupported = await NfcManager.isEnabled();
        setNfcSupported(isSupported);
      } catch (ex) {
        console.warn('Error checking NFC support:', ex);
      }
    };

    // Check NFC support when component mounts
    checkNFCSupport();
  }, []);

  return (
    <View>
      <Text>NFC Support: {nfcSupported ? 'Supported' : 'Not Supported'}</Text>
    </View>
  );
};

export default NFCSupportChecker;
