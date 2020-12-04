import React from 'react'

export const GifItem = ({url,title}) => {
    //console.log(props);
    return (
        <div className='animate__fadeIn'>
           <img src={url} alt={title}/>
           <p>{title}</p>
        </div>
    )
}
