import React from 'react';
import Hero from '../components/Hero';
import BlogPage from '../components/BlogPage';

const Home = () => {
    return (
        <div>
            <Hero />

            <div className="max-w-7xl mx-auto">
                <BlogPage />
            </div>
        </div>
    );
};

export default Home;