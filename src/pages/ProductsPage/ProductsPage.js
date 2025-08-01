import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiGrid, FiList, FiStar, FiShoppingCart } from 'react-icons/fi';
import ApiService from '../../api/apiService';
import './ProductsPage.css';

const ProductsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [filters, setFilters] = useState({
        category: searchParams.get('category') || '',
        brand: searchParams.get('brand') || '',
        price_min: searchParams.get('price_min') || '',
        price_max: searchParams.get('price_max') || '',
        sort: searchParams.get('sort') || 'newest',
        view: 'grid'
    });
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        per_page: 12,
        total: 0
    });

    useEffect(() => {
        loadCategories();
        loadBrands();
    }, []);

    const loadProducts = useCallback(async () => {
        setLoading(true);
        try {
            const params = {
                page: pagination.current_page,
                per_page: pagination.per_page,
                ...filters
            };

            // Remove empty filters
            Object.keys(params).forEach(key => {
                if (!params[key]) delete params[key];
            });

            const response = await ApiService.getProducts(params);
            setProducts(response.data || []);
            setPagination(prev => ({
                ...prev,
                current_page: response.current_page || 1,
                last_page: response.last_page || 1,
                total: response.total || 0
            }));

            // Update URL params
            const newSearchParams = new URLSearchParams();
            Object.keys(params).forEach(key => {
                if (params[key] && key !== 'page' && key !== 'per_page') {
                    newSearchParams.set(key, params[key]);
                }
            });
            setSearchParams(newSearchParams);
        } catch (error) {
            console.error('Error loading products:', error);
        } finally {
            setLoading(false);
        }
    }, [filters, pagination.current_page, pagination.per_page, setSearchParams]);

    useEffect(() => {
        loadProducts();
    }, [loadProducts]);

    const loadCategories = async () => {
        try {
            const response = await ApiService.getCategories();
            setCategories(response.data || []);
        } catch (error) {
            console.error('Error loading categories:', error);
        }
    };

    const loadBrands = async () => {
        try {
            const response = await ApiService.getBrands();
            setBrands(response.data || []);
        } catch (error) {
            console.error('Error loading brands:', error);
        }
    };



    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
        setPagination(prev => ({ ...prev, current_page: 1 }));
    };

    const handlePageChange = (page) => {
        setPagination(prev => ({ ...prev, current_page: page }));
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    const handleAddToCart = (productId) => {
        // TODO: Implement add to cart functionality
        console.log('Adding to cart:', productId);
    };



    const clearFilters = () => {
        setFilters({
            category: '',
            brand: '',
            price_min: '',
            price_max: '',
            sort: 'newest',
            view: filters.view
        });
        setPagination(prev => ({ ...prev, current_page: 1 }));
    };

    if (loading) {
        return (
            <div className="products-page">
                <div className="loading">Đang tải sản phẩm...</div>
            </div>
        );
    }

    return (
        <div className="products-page">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="page-title">Sản phẩm</h1>
                <p className="page-subtitle">
                    Tìm thấy {pagination.total} sản phẩm
                </p>
            </div>

            <div className="products-layout">
                {/* Filters Sidebar */}
                <aside className="filters-sidebar">
                    <div className="filters-header">
                        <h3>Bộ lọc</h3>
                        <button onClick={clearFilters} className="clear-filters">
                            Xóa tất cả
                        </button>
                    </div>

                    {/* Category Filter */}
                    <div className="filter-group">
                        <h4>Danh mục</h4>
                        <div className="filter-options">
                            {categories.map(category => (
                                <label key={category.id} className="filter-option">
                                    <input
                                        type="radio"
                                        name="category"
                                        value={category.id}
                                        checked={filters.category === category.id.toString()}
                                        onChange={(e) => handleFilterChange('category', e.target.value)}
                                    />
                                    <span>{category.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Brand Filter */}
                    <div className="filter-group">
                        <h4>Thương hiệu</h4>
                        <div className="filter-options">
                            {brands.map(brand => (
                                <label key={brand.id} className="filter-option">
                                    <input
                                        type="radio"
                                        name="brand"
                                        value={brand.id}
                                        checked={filters.brand === brand.id.toString()}
                                        onChange={(e) => handleFilterChange('brand', e.target.value)}
                                    />
                                    <span>{brand.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price Filter */}
                    <div className="filter-group">
                        <h4>Giá</h4>
                        <div className="price-inputs">
                            <input
                                type="number"
                                placeholder="Từ"
                                value={filters.price_min}
                                onChange={(e) => handleFilterChange('price_min', e.target.value)}
                                className="price-input"
                            />
                            <span>-</span>
                            <input
                                type="number"
                                placeholder="Đến"
                                value={filters.price_max}
                                onChange={(e) => handleFilterChange('price_max', e.target.value)}
                                className="price-input"
                            />
                        </div>
                    </div>
                </aside>

                {/* Products Content */}
                <main className="products-content">
                    {/* Products Toolbar */}
                    <div className="products-toolbar">
                        <div className="toolbar-left">
                            <select
                                value={filters.sort}
                                onChange={(e) => handleFilterChange('sort', e.target.value)}
                                className="sort-select"
                            >
                                <option value="newest">Mới nhất</option>
                                <option value="price_asc">Giá tăng dần</option>
                                <option value="price_desc">Giá giảm dần</option>
                                <option value="name_asc">Tên A-Z</option>
                                <option value="name_desc">Tên Z-A</option>
                            </select>
                        </div>

                        <div className="toolbar-right">
                            <div className="view-toggle">
                                <button
                                    className={`view-button ${filters.view === 'grid' ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('view', 'grid')}
                                >
                                    <FiGrid />
                                </button>
                                <button
                                    className={`view-button ${filters.view === 'list' ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('view', 'list')}
                                >
                                    <FiList />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className={`products-grid ${filters.view === 'list' ? 'list-view' : ''}`}>
                        {products.map(product => (
                            <div key={product.id} className="product-card">
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                    <div className="product-badges">
                                        {product.is_new && <span className="badge badge-new">Mới</span>}
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
                                    <h3 className="product-name">{product.name}</h3>
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
                                            {product.rating} ({product.review_count})
                                        </span>
                                    </div>
                                    <div className="product-price">
                                        <span className="current-price">{formatPrice(product.price)}</span>
                                        {product.original_price > product.price && (
                                            <span className="original-price">{formatPrice(product.original_price)}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {pagination.last_page > 1 && (
                        <div className="pagination">
                            <button
                                className="pagination-button"
                                disabled={pagination.current_page === 1}
                                onClick={() => handlePageChange(pagination.current_page - 1)}
                            >
                                Trước
                            </button>

                            {[...Array(pagination.last_page)].map((_, index) => {
                                const page = index + 1;
                                return (
                                    <button
                                        key={page}
                                        className={`pagination-button ${page === pagination.current_page ? 'active' : ''}`}
                                        onClick={() => handlePageChange(page)}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            <button
                                className="pagination-button"
                                disabled={pagination.current_page === pagination.last_page}
                                onClick={() => handlePageChange(pagination.current_page + 1)}
                            >
                                Sau
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ProductsPage; 