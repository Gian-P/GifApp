
import { useState} from 'react';

export const GifExpertApp = () => {
  const [ categories,setCategories ] = useState(['One punch', 'Dragon ball z']);

  // Tarea: Agrega un nuevo elemento al listado de categorias.

  const onAddCategory = () => {

    let value = prompt("your Prompt here");

    // Cuando necesitemos actualizar el estado no podemos mutarlo, sino que debemos crear uno desde 0 con esta estructura.
    setCategories(categories => [...categories, value]);
  }

  return (
    <>
      {/* titulo */}

      <h1>GifExpertApp</h1>

      {/* Input */}

      {/* Listado de Gif */}
      <button onClick={ onAddCategory }>Agregar</button>
      <ol>
        { 
            categories.map( category => {
              //La llave debe ser unica.
            return <li key = { category }>{ category }</li>
          })
        }
        
      </ol>
        {/* Gif Item */}
    </>
  )
}
