import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import CategorySection from '../../components/CategorySection/CategorySection';
import BrandSection from '../../components/BrandSection/BrandSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <CategorySection />
            <FeaturedProducts />
            <BrandSection />
            <BlogSection />
            <NewsletterSection />
        </div>
    );
};

export default HomePage; 