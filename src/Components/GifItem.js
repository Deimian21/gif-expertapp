import React from 'react'
import PropTypes from 'prop-types';
export const GifItem = ({url,title}) => {
    //console.log(props);
    return (
        <div className='animate__fadeIn'>
           <img src={url} alt={title}/>
           <p>{title}</p>
        </div>
    )
}
GifItem.propTypes= {
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
    }