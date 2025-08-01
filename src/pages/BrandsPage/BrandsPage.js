import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../../api/apiService';
import './BrandsPage.css';

const BrandsPage = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadBrands();
    }, []);

    const loadBrands = async () => {
        setLoading(true);
        try {
            const response = await ApiService.getBrands();
            setBrands(response.data || []);
        } catch (error) {
            console.error('Error loading brands:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="brands-page">
                <div className="container">
                    <div className="loading">Đang tải thương hiệu...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="brands-page">
            <div className="container">
                {/* Page Header */}
                <div className="page-header">
                    <h1 className="page-title">Thương hiệu</h1>
                    <p className="page-subtitle">
                        Khám phá các thương hiệu hàng đầu thế giới với chất lượng và uy tín
                    </p>
                </div>

                {/* Brands Grid */}
                <div className="brands-grid">
                    {brands.map((brand) => (
                        <Link key={brand.id} to={`/brands/${brand.id}`} className="brand-card">
                            <div className="brand-logo">
                                <img src={brand.logo} alt={brand.name} />
                            </div>
                            <div className="brand-content">
                                <h3 className="brand-name">{brand.name}</h3>
                                <p className="brand-description">{brand.description}</p>
                                <div className="brand-stats">
                                    <span className="product-count">{brand.product_count} sản phẩm</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandsPage; 