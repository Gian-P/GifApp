
import { useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
  const [ categories, setCategories ] = useState(['One punch']);

  const onAddCategory = ( newCategory ) => {

    if(categories.includes(newCategory)) return;

    // Cuando necesitemos actualizar el estado no podemos mutarlo, sino que debemos crear uno desde 0 con esta estructura.
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory =  { onAddCategory }
        />

        { 
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            ))
        } 
    </>
  )
}
