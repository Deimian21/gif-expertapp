//import { logDOM } from '@testing-library/react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {
     const {data:images,loading} = useFetchGifs(category);

    return (
        <>
        <h3 className='animate__fadeIn'>{category}</h3>
        { loading && <p>Loading</p>}
        <div className='card-grid'>
          
            { 

            images.map( img =>(
            <GifItem 
            key={img.id}
            {...img}/>
            ) )

            }
        </div>
        </>
    )
}
