import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';
import './BlogSection.css';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Top 10 điện thoại tốt nhất năm 2024',
            excerpt: 'Khám phá những chiếc điện thoại hàng đầu với công nghệ mới nhất và hiệu suất vượt trội...',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
            author: 'Admin',
            date: '2024-01-15',
            category: 'Điện thoại',
            readTime: '5 phút'
        },
        {
            id: 2,
            title: 'Hướng dẫn chọn laptop phù hợp cho công việc',
            excerpt: 'Làm thế nào để chọn được chiếc laptop phù hợp với nhu cầu công việc và ngân sách của bạn...',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
            author: 'Tech Expert',
            date: '2024-01-12',
            category: 'Laptop',
            readTime: '8 phút'
        },
        {
            id: 3,
            title: 'Công nghệ AI trong thiết bị điện tử hiện đại',
            excerpt: 'Tìm hiểu về vai trò của trí tuệ nhân tạo trong việc nâng cao trải nghiệm người dùng...',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            author: 'AI Specialist',
            date: '2024-01-10',
            category: 'Công nghệ',
            readTime: '6 phút'
        }
    ];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section className="blog-section section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Tin tức & Blog</h2>
                    <p className="section-subtitle">
                        Cập nhật những tin tức mới nhất về công nghệ và sản phẩm điện tử
                    </p>
                </div>

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
                                        <span>{formatDate(post.date)}</span>
                                    </div>
                                    <div className="meta-item">
                                        <span className="read-time">{post.readTime}</span>
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

                <div className="blog-cta">
                    <Link to="/blog" className="btn btn-outline">
                        Xem tất cả bài viết
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogSection; 