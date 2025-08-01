import React from 'react';
import { Link } from 'react-router-dom';
import './BrandSection.css';

const BrandSection = () => {
    const brands = [
        {
            id: 1,
            name: 'Apple',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
            description: 'Công nghệ đổi mới và thiết kế tối giản',
            productCount: 150,
            path: '/brands/apple'
        },
        {
            id: 2,
            name: 'Samsung',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
            description: 'Đa dạng sản phẩm chất lượng cao',
            productCount: 200,
            path: '/brands/samsung'
        },
        {
            id: 3,
            name: 'Sony',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Sony_logo.svg',
            description: 'Âm thanh và hình ảnh chuyên nghiệp',
            productCount: 120,
            path: '/brands/sony'
        },
        {
            id: 4,
            name: 'LG',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg',
            description: 'Công nghệ màn hình và thiết bị gia dụng',
            productCount: 180,
            path: '/brands/lg'
        },
        {
            id: 5,
            name: 'Canon',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Canon_logo.svg',
            description: 'Máy ảnh và thiết bị quang học hàng đầu',
            productCount: 90,
            path: '/brands/canon'
        },
        {
            id: 6,
            name: 'Dell',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg',
            description: 'Máy tính và thiết bị văn phòng',
            productCount: 110,
            path: '/brands/dell'
        }
    ];

    return (
        <section className="brand-section section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Thương hiệu nổi bật</h2>
                    <p className="section-subtitle">
                        Đối tác với các thương hiệu hàng đầu thế giới để mang đến sản phẩm chất lượng
                    </p>
                </div>

                <div className="brand-grid">
                    {brands.map((brand) => (
                        <Link key={brand.id} to={brand.path} className="brand-card">
                            <div className="brand-logo">
                                <img src={brand.logo} alt={brand.name} />
                            </div>
                            <div className="brand-content">
                                <h3 className="brand-name">{brand.name}</h3>
                                <p className="brand-description">{brand.description}</p>
                                <div className="brand-stats">
                                    <span className="product-count">{brand.productCount} sản phẩm</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="brand-cta">
                    <Link to="/brands" className="btn btn-outline">
                        Xem tất cả thương hiệu
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BrandSection; 