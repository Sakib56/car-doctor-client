import React from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full md:h-[600px] my-5">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex items-center h-full gap-x-5 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='hidden md:block space-y-8 w-2/5 pl-10'>
                        <h1 className='text-6xl font-bold text-white '>Affordable Price For Car Servicing</h1>
                        <p className='text-lg text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-x-4'>
                            <button className="btn bg-[#FF3811]">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex items-center h-full gap-x-5 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='hidden md:block space-y-8 w-2/5 pl-10'>
                        <h1 className='text-6xl font-bold text-white '>Affordable Price For Car Servicing</h1>
                        <p className='text-lg text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-x-4'>
                            <button className="btn bg-[#FF3811]">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex items-center h-full gap-x-5 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='hidden md:block space-y-8 w-2/5 pl-10'>
                        <h1 className='text-6xl font-bold text-white '>Affordable Price For Car Servicing</h1>
                        <p className='text-lg text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-x-4'>
                            <button className="btn bg-[#FF3811]">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex items-center h-full gap-x-5 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='hidden md:block space-y-8 w-2/5 pl-10'>
                        <h1 className='text-6xl font-bold text-white '>Affordable Price For Car Servicing</h1>
                        <p className='text-lg text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-x-4'>
                            <button className="btn bg-[#FF3811]">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;