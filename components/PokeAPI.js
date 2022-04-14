import { useState, useEffect } from "react";

function Pokemon() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // Avec [] , useEffect est appliqué une qeule fois ( comme componentDidMount )

  useEffect(() => {
    fetch(url)
      //fetch() récupére les ressources à travers le réseau de manière asynchrone.
      // Une fonction est aynchrone parce qu'lle s'exécute grâce à une boucle d'évènement en utilisant une promesse ( Promise ) comme valeur de retour
      .then(response => response.json())
      .then(
        (result) => {
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
    let url = `https://pokeapi.co/api/v2/pokemon/?limit=150`;
    return url;
  }

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
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
