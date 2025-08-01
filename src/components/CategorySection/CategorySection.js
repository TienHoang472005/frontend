import React from 'react';
import { Link } from 'react-router-dom';
import { FiSmartphone, FiMonitor, FiHeadphones, FiCamera, FiWatch } from 'react-icons/fi';
import { FaLaptop } from 'react-icons/fa';
import './CategorySection.css';

const CategorySection = () => {
    const categories = [
        {
            id: 1,
            name: 'Điện thoại',
            icon: FiSmartphone,
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
            count: '500+ sản phẩm',
            path: '/products?category=phones'
        },
        {
            id: 2,
            name: 'Laptop',
            icon: FaLaptop,
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
            count: '300+ sản phẩm',
            path: '/products?category=laptops'
        },
        {
            id: 3,
            name: 'Màn hình',
            icon: FiMonitor,
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            count: '200+ sản phẩm',
            path: '/products?category=monitors'
        },
        {
            id: 4,
            name: 'Tai nghe',
            icon: FiHeadphones,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            count: '400+ sản phẩm',
            path: '/products?category=headphones'
        },
        {
            id: 5,
            name: 'Máy ảnh',
            icon: FiCamera,
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
            count: '150+ sản phẩm',
            path: '/products?category=cameras'
        },
        {
            id: 6,
            name: 'Đồng hồ thông minh',
            icon: FiWatch,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80',
            count: '100+ sản phẩm',
            path: '/products?category=smartwatches'
        }
    ];

    return (
        <section className="category-section section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Danh mục sản phẩm</h2>
                    <p className="section-subtitle">
                        Khám phá các danh mục sản phẩm đa dạng với chất lượng hàng đầu
                    </p>
                </div>

                <div className="category-grid">
                    {categories.map((category) => (
                        <Link key={category.id} to={category.path} className="category-card">
                            <div className="category-image">
                                <img src={category.image} alt={category.name} />
                                <div className="category-overlay">
                                    <category.icon className="category-icon" />
                                </div>
                            </div>
                            <div className="category-content">
                                <h3 className="category-name">{category.name}</h3>
                                <p className="category-count">{category.count}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="category-cta">
                    <Link to="/products" className="btn btn-outline">
                        Xem tất cả danh mục
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CategorySection; 