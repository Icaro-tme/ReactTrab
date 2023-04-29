import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';


const Trailer = ({ visible, onClose }) => {
  const youtubeUrl = `https://www.youtube.com/watch?v=oHg5SJYRHA0`;

  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <TouchableOpacity style={styles.background} onPress={onClose}>
        <View style={styles.container}>
          <WebView source={{ uri: youtubeUrl }} style={styles.video} />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: 200,
  },
});

export default Trailer;
