import { useState } from 'react';
import { GifGrid } from "../../auth/components/GifGrid";  // Importa GifGrid para mostrar los GIFs de DC Comics.
import { Navbar } from '../../ui';  // barra de navegación.

export const MarvelPage = () => {  // Ya no necesitamos pasar `category` como prop, ya que será estático.

  const [categories] = useState(['Marvel']);  // Fija las categorías solo a "Dc Comics" sin posibilidad de agregar nuevas.

  return (
    <>
      <Navbar />  {/*  barra de navegación */}
      
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