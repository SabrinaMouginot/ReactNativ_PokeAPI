import { useState, useEffect } from "react";

function Pokemon() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // Avec le tableau vide de dépendances [] , useEffect ne s’exécutera qu’une fois ( comme componentDidMount() )

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.name);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  function urlPokemon() {
    for (let i = 0; i < 150; i++) {
      let id = id++;
      return id;
    }

    let url = "https://pokeapi.co/api/v2/pokemon/" + id;
    return url;
  }

  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.name);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.name}>{items.name}</li>
        ))}
      </ul>
    );
  }
}

export default Pokemon;
