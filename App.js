// import axios from 'axios';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PokeAPI from "./components/PokeAPI";

var myloop = [];

for (let i = 0; i < 150; i++) {
  myloop.push(
    <View key={i}>
      <Text style={{ textAlign: "center", marginTop: 5 }}>{i}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const getPokemonFromApi = async () => {
  let url = "https://pokeapi.co/api/v2/pokemon/type/?limit=150";
  let response = await axios.get(url);
  return response.data;
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Liste Pokemon</Text>
      <PokeAPI />
    </View>
  );
}
