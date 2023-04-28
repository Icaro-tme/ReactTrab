import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Filme from './src/components/Filme/Filme';

export default function App() {
  let [filmes,setFilmes] = useState([])
  const [dots, setDots] = useState('.');
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length < 3) {
          return prev + '.';
        } else {
          return '';
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const apiUrl = 'https://api.otaviolube.com/api/filmes?populate=*'

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setFilmes(data.data)})
      .catch(error => console.error('Error fetching filmes:', error));
  },[]);



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {filmes.length > 0 ? filmes.map(filme => (
        <View key={filme.id} style={styles.column}>
          <Text>{filme.attributes.titulo}</Text>
        </View>
      )) : <Text>Carregando{dots}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
