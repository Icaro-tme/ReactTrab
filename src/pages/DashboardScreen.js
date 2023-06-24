import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';

const DashBoardScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <Text style={styles.header}>LIPSUM.PLEX</Text>
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.scroll}>
          <View style={styles.content}>
          </View>
        </ScrollView>
      </View>
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Movie')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  scrollContainer: {
    flex: 1,
    height: '70%', // Adjust the height as needed
    width: '100%',
  },
  scroll: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default DashBoardScreen;
