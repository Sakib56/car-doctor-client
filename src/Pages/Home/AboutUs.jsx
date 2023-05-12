import React from 'react';
import img1 from '../../assets/images/about_us/person.jpg'
import img2 from '../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:my-28 p-5 md:p-0'>
            <div className='relative'>
                <div>
                    <img className='h-full w-3/4 rounded-lg' src={img1} alt="" />
                </div>
                <div className='absolute w-2/4 top-2/4 right-5 border-4 border-white'>
                    <img className='' src={img2} alt="" />
                </div>
            </div>
            <div className='space-y-9'>
                <h1 className='text-red-500 text-xl font-bold'>About Us</h1>
                <h1 className='text-5xl font-bold'>We are qualified & of experience in this field</h1>
                <div>
                    <p className='text-gray-600'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-gray-600'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <button className="btn bg-[#FF3811] border-0">Discover More</button>
            </div>
        </div>
    );
};

export default AboutUs;