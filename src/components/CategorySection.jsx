import React from 'react';

const CategorySection = ({handleCategoryChange, activeCategory}) => {

    const category = ["Startups", "Security", "AI", "Apps", "Tech"]
    return (
        <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-bold'>
            <button onClick={() => handleCategoryChange(null)} className={`lg:ml-12 ${activeCategory ? "" : " text-orange-600"}`}>All</button>
            {
                category.map((category) => (
                    <button onClick={() => handleCategoryChange(category)} className={`mr-2 space-x-16 ${activeCategory === category ? "text-orange-600" : ""}`} key={category}>
                        {category}
                    </button>
                ))
            }
        </div>
    );
};

export default CategorySection;