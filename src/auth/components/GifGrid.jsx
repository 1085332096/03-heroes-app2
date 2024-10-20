//El componente GifGrid obtiene y muestra GIFs según una categoría 
// Una vez obtenidas, las organiza
// en una cuadrícula usando Bootstrap, creando un GifItem para cada imagen.

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    // Custom Hook para cargar las imágenes de GIF
    const { images, isLoading } = useFetchGifs(category);

    console.log({ images, isLoading });

    return (
        <>
            <h3 className="text-center">{category}</h3>
            
            {/* Mostrar el mensaje de carga */}
            {isLoading && (<h2 className="text-center">Loading...</h2>)}

            {/* Bootstrap grid para las imágenes */}
            <div className="container">
                <div className="row">
                    {images.map((image) => (
                        <div key={image.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <GifItem 
                                // Esparcir propiedades 
                                {...image} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
