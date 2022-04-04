import axios from "axios";

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
async function slowNetwork() {
  await sleep(50);
}

const getPokemonFromApi = async (id) => {
  await slowNetwork();
  let url = "https://pokeapi.co/api/v2/type/${i}" + id;
  let response = await axios.get(url);
  console.log("--getPokemonFromApi--");
  console.log(url);
  console.log(response.data);
  console.log("--fin getPokemonFromApi--");
  return response.data;
};

export { getPokemonFromApi };
