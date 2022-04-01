import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const getMoviesFromApi = () => {
  // La méthode Fetch renverra une promesse qui facilite l'écriture de code qui fonctionne de manière asynchrone
  // sur le site https://pokeapi.co/docs/v2#pokemon-section, on a le lien pour mettre dans le fetch.
  return fetch("https://pokeapi.co/api/v2/ability/")
    .then((response) => response.json())
    .then((json) => {
      return json.movies;
    })
    .catch((error) => {
      console.error(error);
    });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
