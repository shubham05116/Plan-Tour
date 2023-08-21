import React, { useState } from 'react'
import data from '../data';
function Card({ id, price, info, image, name, removeTour, AddTour }) {
    const [readmore, setreadmore] = useState(false)
    const description =
        readmore ? info : `${info.substring(0, 100)}....`;
    function readmorehandler() {
        setreadmore(!readmore);
    }

    return (

        <div className='card'>
            <img src={image} className='image'></img>
            <div className='tour-info'>
                <div className="tour-details">
                    <h4 className="tour-price">$ {price}
                    </h4>
                    <h4 className='tour-name'>{name}</h4>
                </div>
                <div className='info'>
                    {description}
                    <span className='read-more' onClick={readmorehandler}>{
                        readmore ? 'Show less' : 'Read more'}</span>
                </div>

            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>NOT INTERESTED</button>
            <button className="btn-red" onClick={() => AddTour(id)}>INTERESTED</button>

        </div>


    )
}

export default Card