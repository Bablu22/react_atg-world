import React, { useEffect, useState } from 'react';
import Post from './Post';
import './Posts.css'

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div className='container mx-auto mt-10 p-3'>
            <div className='hidden lg:flex flex justify-between items-center ml-0 pl-0'>
                <div className='filter-btn'>
                    <a href="/">All Posts(32)</a>
                    <a href="/">Article</a>
                    <a href="/">Event</a>
                    <a href="/">Education</a>
                    <a href="/">Job</a>
                </div>
                <div>
                    <button className='bg-slate-200 p-2 font-medium rounded mr-2'>Write a Post</button>
                    <button className='bg-blue-600 p-2 rounded font-medium text-white'> <i className="fas fa-users pr-2"></i>Join Group</button>
                </div>

            </div>
            <div className='flex justify-between lg:hidden '>
                <h6>Posts(368)</h6>
                <select className='border p-1 bg-gray-200 rounded'>
                    <option value="" disabled selected>Filter: All</option>
                    <option>Article</option>
                    <option>Event</option>
                    <option>Education</option>
                </select>
            </div>
            <hr className='mt-3' />
            <div className='container mx-auto lg:flex justify-between  w-full my-8'>
                <div>


                    {posts.map(post => <Post
                        key={post.ceterogy}
                        post={post}
                    ></Post>)}

                </div>
                <div className=''>
                    <div className='flex justify-between items-center w-full'>
                        <h6> <i className="fas fa-map-marker-alt"></i> Noida, India</h6>
                        <h6 className=''> <i className="fas fa-pen"></i></h6>
                    </div>
                    <hr className='mt-2' />
                    <p className='mt-3 text-gray-600'>Your location will help us serve better <br /> and extend a personalised experience.</p>
                </div>
            </div>
        </div>
    );
};

export default Posts;