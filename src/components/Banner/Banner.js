import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner relative'>
            <div className='container mx-auto p-3'>
                <div className='lg:hidden absolute top-0 left-0 right-0 w-full p-3 mt-3'>
                    <div className='flex justify-between'>
                        <h6><i className="fas fa-arrow-left text-white text-lg"></i></h6>
                        <button className='text-white border border-white mr-3 px-2 py-1 rounded'>Join Group</button>
                    </div>
                </div>
                <div className="banner-content">
                    <div>
                        <h1 className='text-5xl font-medium mb-2'>Computer Engineering</h1>
                        <p>142,765 Computer Engineers follow this</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;