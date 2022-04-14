import axios from "axios";

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
async function slowNetwork() {
  await sleep(50);
}

const getPokemonFromApi = async () => {
  await slowNetwork();
  let url = "https://pokeapi.co/api/v2/pokemon/type/?limit=150";
  let response = await axios.get(url);
  return response.data;
};

export { getPokemonFromApi };
