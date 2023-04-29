import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Filme from './src/components/FilmeComponent';


const Header = () => {
  return (
    <View style={[styles.header]}>
      <Text style={styles.logo}>LIPSUM.PLEX</Text>
      <Text style={styles.ad}>
        Professor, o botão de trailer so funciona ao instalar npm install react-native-webview, e assistindo pelo Android Studio. Não é necessário, mas é interessante.
</Text>
    </View>
  );
};

export default function App() {
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
      <Header />
      <ScrollView
        style={styles.scroll}
        horizontal={true}
        contentContainerStyle={styles.content}
      >
        {filmes.length > 0 ? (
          filmes.map(filme => <Filme key={filme.id} filme={filme} style={styles.card} />)
        ) : (
          <Text>Carregando...</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ad:{
    color: '#D8D8D8',
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#5865F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
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

