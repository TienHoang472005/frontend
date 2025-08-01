import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import './HeroSection.css';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: 'Thiết bị điện tử chất lượng cao',
            subtitle: 'Khám phá bộ sưu tập sản phẩm mới nhất với công nghệ tiên tiến',
            image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
            ctaText: 'Mua sắm ngay',
            ctaLink: '/products'
        },
        {
            id: 2,
            title: 'Giảm giá lên đến 50%',
            subtitle: 'Ưu đãi đặc biệt cho các sản phẩm điện tử cao cấp',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            ctaText: 'Xem ưu đãi',
            ctaLink: '/products?sale=true'
        },
        {
            id: 3,
            title: 'Thương hiệu uy tín',
            subtitle: 'Đối tác với các thương hiệu hàng đầu thế giới',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
            ctaText: 'Khám phá thương hiệu',
            ctaLink: '/brands'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="hero-section">
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="hero-overlay">
                            <div className="container">
                                <div className="hero-content">
                                    <h1 className="hero-title">{slide.title}</h1>
                                    <p className="hero-subtitle">{slide.subtitle}</p>
                                    <Link to={slide.ctaLink} className="hero-cta btn btn-primary">
                                        {slide.ctaText}
                                        <FiArrowRight className="cta-icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button className="hero-nav hero-nav-prev" onClick={prevSlide}>
                    <FiArrowLeft />
                </button>
                <button className="hero-nav hero-nav-next" onClick={nextSlide}>
                    <FiArrowRight />
                </button>

                {/* Dots Indicator */}
                <div className="hero-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Quick Stats */}
            <div className="hero-stats">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">10K+</div>
                            <div className="stat-label">Sản phẩm</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Thương hiệu</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100K+</div>
                            <div className="stat-label">Khách hàng</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Hỗ trợ</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 