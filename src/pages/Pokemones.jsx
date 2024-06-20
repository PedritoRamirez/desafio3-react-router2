import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const URL = "https://pokeapi.co/api/v2/pokemon";

function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch(URL);
      const { results } = await response.json();
      setPokemones(results);
    } catch (error) {
      alert("No trae los datos");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="contPokemones">
        <h1>Selecciona un Pokemon</h1>
        <select
          className="m-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          <option value="" disabled defaultValue>
            Elige un Pokemon
          </option>
          {pokemones.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <Button
          variant="dark"
          className="m-3"
          onClick={() => navigate(`/pokemones/${name}`)}
        >
          Ver Detalle
        </Button>
      </div>
    </>
  );
}

export default Pokemones;
