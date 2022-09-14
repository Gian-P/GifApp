import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {

  const [images, SetImages] = useState([]);

  //Como segundo argumento le pasamos una lista de depencias, esta en forma de array, como la mandamos vacia quiere decir que esta funcion solo se llamara la primera vez que se construya este componente.

  const getImages = async() => {
    const newImages = await getGifs( category);
    SetImages(newImages);
  }

  useEffect( () =>  {
    getImages();
  }, [])


  return (
    <>
        <h3>{ category }</h3>

        {/* Las imagenes van aqui debajo */}
        {/* images.map */}

        <ol>
          {        
              images.map( ({id,title}) => 
                <li key={id}>{title}</li>
              )
          } 
        </ol>
    </>
  )
}
