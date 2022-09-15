// Como luce un custom hook?


import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

  const [images, SetImages] = useState([]);

  const [isLoading, setIsLoading] = useState( true );

  //Como segundo argumento le pasamos una lista de depencias, esta en forma de array, como la mandamos vacia quiere decir que esta funcion solo se llamara la primera vez que se construya este componente.

  const getImages = async() => {
    const newImages = await getGifs( category);
    //En react 18+ esto no dispara dos renderizaciones sino una.
    SetImages(newImages);
    setIsLoading(false);
  }

  useEffect( () =>  {
    getImages();
  }, [])


  return {
    images,
    isLoading
  }
}
