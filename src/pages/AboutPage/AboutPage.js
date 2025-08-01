import React from 'react';
import { FiUsers, FiAward, FiShield, FiTruck } from 'react-icons/fi';
import './AboutPage.css';

const AboutPage = () => {
    const stats = [
        {
            icon: FiUsers,
            number: '100K+',
            label: 'Khách hàng hài lòng'
        },
        {
            icon: FiAward,
            number: '50+',
            label: 'Thương hiệu uy tín'
        },
        {
            icon: FiShield,
            number: '10+',
            label: 'Năm kinh nghiệm'
        },
        {
            icon: FiTruck,
            number: '24/7',
            label: 'Hỗ trợ khách hàng'
        }
    ];

    return (
        <div className="about-page">
            <div className="container">
                {/* Hero Section */}
                <div className="about-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Về TechVicom</h1>
                        <p className="hero-subtitle">
                            Cửa hàng điện tử hàng đầu Việt Nam, cung cấp các sản phẩm chất lượng cao với giá cả hợp lý
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <section className="mission-section">
                    <div className="section-content">
                        <h2 className="section-title">Sứ mệnh của chúng tôi</h2>
                        <p className="section-description">
                            TechVicom cam kết mang đến cho khách hàng những sản phẩm điện tử chất lượng cao nhất,
                            với dịch vụ khách hàng xuất sắc và giá cả cạnh tranh. Chúng tôi tin rằng công nghệ
                            phải dễ tiếp cận và mang lại giá trị thực sự cho cuộc sống của mọi người.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-icon">
                                    <stat.icon />
                                </div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Values Section */}
                <section className="values-section">
                    <h2 className="section-title">Giá trị cốt lõi</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Chất lượng</h3>
                            <p>
                                Chúng tôi chỉ cung cấp những sản phẩm chất lượng cao từ các thương hiệu uy tín,
                                đảm bảo sự hài lòng của khách hàng.
                            </p>
                        </div>
                        <div className="value-card">
                            <h3>Uy tín</h3>
                            <p>
                                Xây dựng niềm tin với khách hàng thông qua dịch vụ chuyên nghiệp,
                                minh bạch và đáng tin cậy.
                            </p>
                        </div>
                        <div className="value-card">
                            <h3>Đổi mới</h3>
                            <p>
                                Luôn cập nhật những công nghệ mới nhất và cải tiến dịch vụ
                                để mang lại trải nghiệm tốt nhất cho khách hàng.
                            </p>
                        </div>
                        <div className="value-card">
                            <h3>Khách hàng</h3>
                            <p>
                                Đặt khách hàng làm trung tâm, lắng nghe và đáp ứng mọi nhu cầu
                                với sự tận tâm và chuyên nghiệp.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="team-section">
                    <h2 className="section-title">Đội ngũ của chúng tôi</h2>
                    <p className="section-description">
                        TechVicom được xây dựng bởi một đội ngũ chuyên nghiệp, giàu kinh nghiệm
                        và đam mê công nghệ. Chúng tôi cam kết mang đến những sản phẩm và dịch vụ tốt nhất.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutPage; 