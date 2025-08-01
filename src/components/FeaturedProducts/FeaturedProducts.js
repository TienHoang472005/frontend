import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiShoppingCart } from 'react-icons/fi';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    const featuredProducts = [
        {
            id: 1,
            name: 'iPhone 15 Pro Max',
            price: 29990000,
            originalPrice: 32990000,
            rating: 4.8,
            reviewCount: 1250,
            image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
            brand: 'Apple',
            isNew: true,
            discount: 9
        },
        {
            id: 2,
            name: 'MacBook Pro M3',
            price: 45990000,
            originalPrice: 49990000,
            rating: 4.9,
            reviewCount: 890,
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
            brand: 'Apple',
            isNew: true,
            discount: 8
        },
        {
            id: 3,
            name: 'Samsung Galaxy S24 Ultra',
            price: 24990000,
            originalPrice: 27990000,
            rating: 4.7,
            reviewCount: 756,
            image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            brand: 'Samsung',
            isNew: false,
            discount: 11
        },
        {
            id: 4,
            name: 'Sony WH-1000XM5',
            price: 8990000,
            originalPrice: 9990000,
            rating: 4.6,
            reviewCount: 432,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            brand: 'Sony',
            isNew: false,
            discount: 10
        },
        {
            id: 5,
            name: 'Dell XPS 13 Plus',
            price: 32990000,
            originalPrice: 35990000,
            rating: 4.5,
            reviewCount: 298,
            image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            brand: 'Dell',
            isNew: false,
            discount: 8
        },
        {
            id: 6,
            name: 'Canon EOS R6 Mark II',
            price: 45990000,
            originalPrice: 49990000,
            rating: 4.8,
            reviewCount: 187,
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
            brand: 'Canon',
            isNew: true,
            discount: 8
        },
        {
            id: 7,
            name: 'LG OLED C3 65"',
            price: 29990000,
            originalPrice: 34990000,
            rating: 4.9,
            reviewCount: 345,
            image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            brand: 'LG',
            isNew: false,
            discount: 14
        },
        {
            id: 8,
            name: 'Apple Watch Series 9',
            price: 8990000,
            originalPrice: 9990000,
            rating: 4.7,
            reviewCount: 567,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80',
            brand: 'Apple',
            isNew: true,
            discount: 10
        }
    ];

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    const handleAddToCart = (productId) => {
        // TODO: Implement add to cart functionality
        console.log('Add to cart:', productId);
    };



    return (
        <section className="featured-products section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Sản phẩm nổi bật</h2>
                    <p className="section-subtitle">
                        Những sản phẩm được yêu thích nhất với chất lượng và giá cả tốt nhất
                    </p>
                </div>

                <div className="products-grid">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                <div className="product-badges">
                                    {product.isNew && <span className="badge badge-new">Mới</span>}
                                    {product.discount > 0 && (
                                        <span className="badge badge-discount">-{product.discount}%</span>
                                    )}
                                </div>
                                <div className="product-actions">
                                    <button
                                        className="action-button"
                                        onClick={() => handleAddToCart(product.id)}
                                        title="Thêm vào giỏ hàng"
                                    >
                                        <FiShoppingCart />
                                    </button>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-brand">{product.brand}</div>
                                <Link to={`/products/${product.id}`} className="product-name">
                                    {product.name}
                                </Link>
                                <div className="product-rating">
                                    <div className="stars">
                                        {[...Array(5)].map((_, index) => (
                                            <FiStar
                                                key={index}
                                                className={`star ${index < Math.floor(product.rating) ? 'filled' : ''}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="rating-text">
                                        {product.rating} ({product.reviewCount})
                                    </span>
                                </div>
                                <div className="product-price">
                                    <span className="current-price">{formatPrice(product.price)}</span>
                                    {product.originalPrice > product.price && (
                                        <span className="original-price">{formatPrice(product.originalPrice)}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="products-cta">
                    <Link to="/products" className="btn btn-primary">
                        Xem tất cả sản phẩm
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts; 