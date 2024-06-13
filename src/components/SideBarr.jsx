import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const SideBarr = () => {

    const [popularBlogs, setPopularBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs").then(res => res.json()).then(data => setPopularBlogs(data.slice(0, 15)))
    }, [])


    return (
        <div>
            <div className="">
                <h3 className='text-2xl font-semibold px-4'>Letest <span className='text-orange-600'>Blogs</span></h3>
                <div className="">
                    {
                        popularBlogs.slice(0, 5).map(blog => <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h4 className='font-medium mb-2 text-black/60'>{blog.title}</h4>
                            <Link to={`/blogs/${blog.id}`} className='font-medium hover:text-orange-500 inline-flex items-center'>Read more <FaArrowRight className='mt-1 ml-2' /></Link>
                        </div>)
                    }
                </div>
            </div>



          {/* Populer blogs */}
            <div className="mt-8">
                <h3 className='text-2xl font-semibold px-4 mt-20'>Populer <span className='text-orange-600'>Blogs</span></h3>
                <div className="">
                    {
                        popularBlogs.slice(6, 10).map(blog => <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h4 className='font-medium mb-2 text-black/60'>{blog.title}</h4>
                            <Link to={`/blogs/${blog.id}`} className='text-base pb-2 hover:text-orange-500 inline-flex items-center'>Read more <FaArrowRight className='mt-1 ml-2' /></Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SideBarr;