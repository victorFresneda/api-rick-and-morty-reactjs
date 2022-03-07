import { useEffect, useState } from "react";
import { Characters } from "./components/Characters";
import { Navbar } from "./components/Navbar";

function App() {
  const [characters, setCharacters] = useState([]);

  const initailUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(initailUrl);
  }, []);
  return (
    <>
      <Navbar brand={"Rick and morty app"} />

      <div className="container">
        <Characters characters={characters}/>
      </div>
    </>
  );
}

export default App;
