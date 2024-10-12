import { useState } from 'react';
import { GifGrid } from "../../auth/components/GifGrid";  // Importa GifGrid para mostrar los GIFs de DC Comics.
import { Navbar } from '../../ui';  // Importa la barra de navegación.


export const DcPage = () => {  // Ya no necesitamos pasar `category` como prop, ya que será estático.

  const [categories] = useState(['Dc Comics']);  // Fija las categorías solo a "Dc Comics" sin posibilidad de agregar nuevas.

  return (
    <>
      <Navbar />  {/* Renderiza la barra de navegación */}
      
      {/* Renderiza los GIFs de la categoría "Dc Comics" */}
      {   
        categories.map((category) => (
          <GifGrid 
            key={ category } 
            category={ category }
          />  
        ))
      }
    </>
  )
};
