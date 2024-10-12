import { useEffect, useState } from "react"; // Agrega useState y useEffect
import { Navbar } from "../../ui";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";
import PropTypes from 'prop-types'; // Importar PropTypes para validación

export const HeroList = ({ publisher }) => {
  const [heroes, setHeroes] = useState([]); // Estado para almacenar héroes
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para errores

  useEffect(() => {
    const fetchHeroes = () => {
      try {
        const fetchedHeroes = getHeroesByPublisher(publisher);
        if (fetchedHeroes.length === 0) {
          setError('No se encontraron héroes para este editor.');
        } else {
          setHeroes(fetchedHeroes);
        }
      } catch (err) {
        setError('Error al obtener héroes: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, [publisher]); // Dependencia para volver a cargar si el publisher cambia

  if (loading) {
    return <div>Cargando héroes...</div>; // Mensaje de carga
  }

  if (error) {
    return <div>{error}</div>; // Mensaje de error
  }

  return (
    <>
      <Navbar />
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};

// Validación de Props
HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
