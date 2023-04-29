import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Trailer from '../TrailerComponent';

const Filme = ({ filme }) => {

  const posterUrl = 'https://api.otaviolube.com' + filme.attributes.poster.data.attributes.formats.small.url;
  
  const [isTrailerVisible, setTrailerVisible] = useState(false);

  const handleOpenTrailer = () => {
    setTrailerVisible(true);
  }

  const handleCloseTrailer = () => {
    setTrailerVisible(false);
  }

  return (
    <View style={styles.card}>
      <Image style={styles.poster} resizeMode="cover" source={{ 
        uri: posterUrl}} />
      <View style={styles.info}>
        <Text style={styles.title}>{filme.attributes.titulo}</Text>
        <Text style={styles.summary}>{filme.attributes.sinopse}</Text>
        <TouchableOpacity style={styles.watchButton} onPress={handleOpenTrailer}>
          <Text style={styles.watchButtonText}>Ver Trailer</Text>
        </TouchableOpacity>
        {isTrailerVisible && <Trailer onClose={handleCloseTrailer} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginHorizontal: 10,
  },
  poster: {
    flex: 0.5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  info: {
    fontFamily: 'Roboto-Regular',
    overflow: 'scroll',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    padding: 20,
    flex: 0.8,
    width:400,
    height:350
  },
  title: {
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    fontSize: 24,
    marginBottom: 10,
  },
  summary: {
    color: '#fff',
    fontSize: 16,
  },
  watchButton: {
    backgroundColor: '#f7b500',
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start'
  },
  watchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export default Filme;
