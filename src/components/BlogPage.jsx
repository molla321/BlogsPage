import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySection from './CategorySection';
import SideBarr from './SideBarr';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 12; // blogs par page
    const [selectCatagory, setSelectCatagory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

            // filter by catagory
            if(selectCatagory){
                url+=`&category${selectCatagory}`;
            }
            
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }
        fetchBlogs();
    }, [currentPage, pageSize, selectCatagory])

    // page chaging btn 
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const handleCategoryChange = (category) => {
        setSelectCatagory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }
    
   console.log(blogs);
    return (
        <div className='container mx-auto'>
            

            {/* catagory section */}
            <div className="">
                <CategorySection  handleCategoryChange={handleCategoryChange} activeCategory={activeCategory}/>
            </div>

            {/* BlogCard Section */}
            <div className="flex flex-col lg:flex-row gap-12">
                <BlogCard blogs={blogs} currentPage={currentPage} selectCatagory={selectCatagory} pageSize={pageSize}/>

                {/* sidebar section */}

                <div className="">
                    <SideBarr />
                </div>
            </div>

            {/* pagination section */}
            <div className="">
                <Pagination  onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
            </div>
        </div>
    );
};

export default BlogPage;