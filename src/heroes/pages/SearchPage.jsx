import { useState } from 'react';
import { AddCategory } from "../../auth/components/AddCategory";
import { GifGrid } from "../../auth/components/GifGrid";
import { Navbar } from '../../ui';

export const SearchPage = ({ category }) => {
  
  const [categories, setCategories] = useState([' ']);
    //Se pueden tner la cantidad de Hook que sean necesarios

  const onAddCategory = ( NewCategory ) => {

    if( categories.includes( NewCategory ) ) return;
    
    setCategories([NewCategory, ...categories]);
  }

  return (
    <>
      <Navbar />
      <AddCategory
           onNewCategory ={ onAddCategory }
      />

      {   
            categories.map( ( category ) =>(
                <GifGrid 
                    key={ category } 
                    category={ category }
                />  
              ))
      }
    </>
  )
};
