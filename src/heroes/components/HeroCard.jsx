import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    image,          
    alter_ego,
    first_appearance,
    characters,
 }) => {
  
  return (
    <div className="col">
        <div className="card">

            <div className="row no-gutters">
                <div className="col-4">
                    {/* Usamos la URL de la imagen que viene de la API */}
                    <img src={ image } className="card-img" alt={ superhero } />
                </div>

                <div className="col-8">

                    <div className="card-body">
                        <h5 className="card-title"> { superhero } </h5>
                        <p className="card-text"> { alter_ego } </p>
                        {
                            (alter_ego !== characters) && (<p>{ characters }</p>)
                        }

                        <p className="card-text">
                            <small className="text_muted">{ first_appearance }</small>
                        </p>

                        {/* Enlace que lleva a la página de detalles del héroe */}
                        <Link to={`/hero/${ id }`}>
                            Más info ....
                        </Link>
                        
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
};