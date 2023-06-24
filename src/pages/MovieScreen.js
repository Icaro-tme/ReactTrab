import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Filme from '../components/FilmeComponent';

const MovieScreen = ({ navigation }) => {
  const [filmes, setFilmes] = useState([]);
  const apiUrl = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setFilmes(data.data))
      .catch(error => console.error('Error fetching filmes:', error));
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.scrollContainer}>
        <ScrollView
          contentContainerStyle={styles.content}
          horizontal
        >
          {filmes.length > 0 ? (
            filmes.map(filme => <Filme key={filme.id} filme={filme} style={styles.card} />)
          ) : (
            <Text>Carregando...</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    height: '70%',
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
  card: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default MovieScreen;
