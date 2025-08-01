import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';
import ApiService from '../../api/apiService';
import './BlogPage.css';

const BlogPage = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        per_page: 9,
        total: 0
    });

    const loadBlogPosts = useCallback(async () => {
        setLoading(true);
        try {
            const params = {
                page: pagination.current_page,
                per_page: pagination.per_page
            };

            const response = await ApiService.getBlogPosts(params);
            setBlogPosts(response.data || []);
            setPagination(prev => ({
                ...prev,
                current_page: response.current_page || 1,
                last_page: response.last_page || 1,
                total: response.total || 0
            }));
        } catch (error) {
            console.error('Error loading blog posts:', error);
        } finally {
            setLoading(false);
        }
    }, [pagination.current_page, pagination.per_page]);

    useEffect(() => {
        loadBlogPosts();
    }, [loadBlogPosts]);

    const handlePageChange = (page) => {
        setPagination(prev => ({ ...prev, current_page: page }));
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="blog-page">
                <div className="container">
                    <div className="loading">Đang tải bài viết...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-page">
            <div className="container">
                {/* Page Header */}
                <div className="page-header">
                    <h1 className="page-title">Blog & Tin tức</h1>
                    <p className="page-subtitle">
                        Cập nhật những tin tức mới nhất về công nghệ và sản phẩm điện tử
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} />
                                <div className="blog-category">{post.category}</div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <div className="meta-item">
                                        <FiUser className="meta-icon" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="meta-item">
                                        <FiCalendar className="meta-icon" />
                                        <span>{formatDate(post.created_at)}</span>
                                    </div>
                                </div>
                                <h3 className="blog-title">
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <Link to={`/blog/${post.id}`} className="blog-link">
                                    Đọc thêm <FiArrowRight className="link-icon" />
                                </Link>
                            </div>
                        </article>
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
            </div>
        </div>
    );
};

export default BlogPage; 