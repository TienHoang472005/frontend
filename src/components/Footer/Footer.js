import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'Về chúng tôi', path: '/about' },
            { name: 'Tin tức', path: '/blog' },
            { name: 'Tuyển dụng', path: '/careers' },
            { name: 'Liên hệ', path: '/contact' },
        ],
        support: [
            { name: 'Trung tâm hỗ trợ', path: '/support' },
            { name: 'Hướng dẫn mua hàng', path: '/guide' },
            { name: 'Chính sách bảo hành', path: '/warranty' },
            { name: 'Đổi trả & hoàn tiền', path: '/return' },
        ],
        legal: [
            { name: 'Điều khoản sử dụng', path: '/terms' },
            { name: 'Chính sách bảo mật', path: '/privacy' },
            { name: 'Chính sách cookie', path: '/cookies' },
            { name: 'Sitemap', path: '/sitemap' },
        ],
    };

    const socialLinks = [
        { icon: FiFacebook, url: 'https://facebook.com', label: 'Facebook' },
        { icon: FiTwitter, url: 'https://twitter.com', label: 'Twitter' },
        { icon: FiInstagram, url: 'https://instagram.com', label: 'Instagram' },
        { icon: FiYoutube, url: 'https://youtube.com', label: 'YouTube' },
    ];

    return (
        <footer className="footer">
            <div className="container">
                {/* Main Footer Content */}
                <div className="footer-main">
                    {/* Company Info */}
                    <div className="footer-section">
                        <h3 className="footer-title">TechVicom</h3>
                        <p className="footer-description">
                            Cửa hàng điện tử hàng đầu Việt Nam, cung cấp các sản phẩm chất lượng cao với giá cả hợp lý.
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <FiPhone className="contact-icon" />
                                <span>1900 1234</span>
                            </div>
                            <div className="contact-item">
                                <FiMail className="contact-icon" />
                                <span>info@techvicom.com</span>
                            </div>
                            <div className="contact-item">
                                <FiMapPin className="contact-icon" />
                                <span>123 Đường ABC, Quận 1, TP.HCM</span>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="footer-section">
                        <h4 className="footer-subtitle">Công ty</h4>
                        <ul className="footer-links">
                            {footerLinks.company.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer-link">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="footer-section">
                        <h4 className="footer-subtitle">Hỗ trợ</h4>
                        <ul className="footer-links">
                            {footerLinks.support.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer-link">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="footer-section">
                        <h4 className="footer-subtitle">Pháp lý</h4>
                        <ul className="footer-links">
                            {footerLinks.legal.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer-link">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-section">
                        <h4 className="footer-subtitle">Đăng ký nhận tin</h4>
                        <p className="newsletter-description">
                            Nhận thông tin về sản phẩm mới và khuyến mãi đặc biệt
                        </p>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="newsletter-button">
                                Đăng ký
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {currentYear} TechVicom. Tất cả quyền được bảo lưu.
                        </p>
                        <div className="social-links">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={social.label}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 