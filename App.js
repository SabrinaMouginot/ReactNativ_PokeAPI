// import axios from 'axios'
import { StyleSheet, Text, View } from "react-native";
import PokeAPI from "./components/PokeAPI";

const getPokemonFromApi = async (id) => {
  let url ='https://pokeapi.co/api/v2/type/'+id
  let response = await axios.get(url)
  return response.data
}

for (let i = 0; i < 150; i++) {
  myloop.push(
    <View key={i}>
    <Text style={{ textAlign: 'center', marginTop: 5 }} >{i}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>bla</Text>
      <PokeAPI />
    </View>
  );
}

// constructor(props) {
//   super(props)
//   this.state = {
//     game_indices: [],
//   }
//   pokemon={this.state.city
//}

  var myloop = [];

for (let i = 0; i < 150; i++) {
  myloop.push(
    <View key={i}>
    <Text style={{ textAlign: 'center', marginTop: 5 }} >{i}</Text>
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
