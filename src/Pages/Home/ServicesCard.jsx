import React from 'react';
import { FaArrowRight, FaBeer } from 'react-icons/fa';



const ServicesCard = ({ service }) => {
    const { _id, title, img, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-80 h-52" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>

                <div className="card-actions">
                    <p className='text-red-500 font-semibold text-lg'>Price: $<span>{price}</span></p>
                    <button className='text-red-500'><FaArrowRight/></button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;