import React from 'react';
import Dropdown from './Dropdown';

const Post = ({ post }) => {
    const { ceterogy, title, desc, img, ctg_img, user_img, user_name, date, location, company
    } = post


    return (
        <>
            <div className="m-aut mb-5  max-w-xl">
                <div className="bg-white border" >
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className=" px-4 flex items-center  mb-2 py-2">
                        <img className='w-5 h-5 object-cover rounded-full' alt='User avatar' src={ctg_img} />

                        <div className="pl-3">
                            <div className="font-medium">
                                {ceterogy}
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-2 mt-2 bg-white">
                        <div className='flex justify-between'>
                            <h2 className="font-medium text-xl text-gray-800">{title}</h2>
                            <Dropdown />
                        </div>
                        <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
                            {desc}
                        </p>
                        {
                            ceterogy === 'Meetup' && <div >
                                <div className='flex  items-center'>
                                    <p><i className="fas fa-calendar-day mr-2"></i>{date}</p>
                                    <p className='ml-16'><i className="fas fa-map-marker-alt mr-2"></i>{location}</p>
                                </div>
                                <button className='w-full text-center mx-auto border rounded mt-5 text-amber-600 font-medium'>Visit Website</button>
                            </div>
                        }
                        {
                            ceterogy === 'Jobs' && <div >
                                <div className='flex  items-center'>
                                    <p><i className="fas fa-calendar-day mr-2"></i>{company}</p>
                                    <p className='ml-16'><i className="fas fa-map-marker-alt mr-2"></i>{location}</p>
                                </div>
                                <button className='w-full text-center mx-auto border rounded mt-5 text-green-500 font-medium'>Apply on Timesjobs</button>
                            </div>
                        }
                        <div className='flex justify-between items-center mt-5'>
                            <div className=" px-1 flex items-center  mb-2 py-2">
                                <img className='w-10 h-10 object-cover rounded-full' alt='User avatar' src={user_img} />

                                <div className="pl-3">
                                    <div className="font-bold">
                                        {user_name}
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between '>
                                <h6><i className="fas fa-eye mr-2"></i>1.4k views</h6>
                                <a className='ml-7' href="/"><i className="fas fa-share-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;