//import { logDOM } from '@testing-library/react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
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
GifGrid.propTypes = {
    category:PropTypes.string.isRequired
}
