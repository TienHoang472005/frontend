import React, { useState } from 'react';
import { FiMail, FiSend } from 'react-icons/fi';
import './NewsletterSection.css';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement newsletter subscription
        console.log('Newsletter subscription:', email);
        setIsSubscribed(true);
        setEmail('');

        // Reset subscription status after 3 seconds
        setTimeout(() => {
            setIsSubscribed(false);
        }, 3000);
    };

    return (
        <section className="newsletter-section section">
            <div className="container">
                <div className="newsletter-content">
                    <div className="newsletter-icon">
                        <FiMail />
                    </div>
                    <h2 className="newsletter-title">Đăng ký nhận tin</h2>
                    <p className="newsletter-description">
                        Nhận thông tin về sản phẩm mới, khuyến mãi đặc biệt và tin tức công nghệ mới nhất
                    </p>

                    {isSubscribed ? (
                        <div className="subscription-success">
                            <p>Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi email sớm nhất.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="newsletter-form">
                            <div className="form-group">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Nhập email của bạn"
                                    className="newsletter-input"
                                    required
                                />
                                <button type="submit" className="newsletter-button">
                                    <FiSend />
                                </button>
                            </div>
                            <p className="newsletter-note">
                                Chúng tôi cam kết không spam và bảo mật thông tin của bạn
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection; 