# TechVicom - E-commerce Landing Page

Một trang web thương mại điện tử hiện đại được xây dựng bằng ReactJS, thiết kế để bán các sản phẩm điện tử.

## 🎨 Thiết kế

- **Màu chủ đạo**: `#FF6C2F` (Cam), Trắng, Đen
- **Font**: Inter
- **Responsive**: Tương thích với mọi thiết bị
- **Icons**: React Icons (Feather Icons)

## 🚀 Tính năng

### Trang chủ
- Hero section với slider tự động
- Danh mục sản phẩm
- Sản phẩm nổi bật
- Thương hiệu
- Blog posts
- Newsletter subscription

### Trang sản phẩm
- Bộ lọc theo danh mục, thương hiệu, giá
- Sắp xếp sản phẩm
- Chế độ xem grid/list
- Phân trang
- Thêm vào giỏ hàng

### Các trang khác
- Chi tiết sản phẩm
- Danh sách thương hiệu
- Blog và chi tiết bài viết
- Về chúng tôi
- Liên hệ

## 📁 Cấu trúc dự án

```
src/
├── components/          # Các component tái sử dụng
│   ├── Header/         # Header với navigation
│   ├── Footer/         # Footer
│   ├── HeroSection/    # Hero slider
│   ├── CategorySection/ # Danh mục sản phẩm
│   ├── FeaturedProducts/ # Sản phẩm nổi bật
│   ├── BrandSection/   # Thương hiệu
│   ├── BlogSection/    # Blog posts
│   └── NewsletterSection/ # Newsletter
├── pages/              # Các trang chính
│   ├── HomePage/       # Trang chủ
│   ├── ProductsPage/   # Danh sách sản phẩm
│   ├── ProductDetailPage/ # Chi tiết sản phẩm
│   ├── BlogPage/       # Danh sách blog
│   ├── BlogDetailPage/ # Chi tiết blog
│   ├── BrandsPage/     # Danh sách thương hiệu
│   ├── AboutPage/      # Về chúng tôi
│   └── ContactPage/    # Liên hệ
├── api/                # API service
│   ├── config.js       # Cấu hình API
│   └── apiService.js   # Service gọi API
└── index.css           # CSS toàn cục
```

## 🛠️ Cài đặt

1. **Clone dự án**
```bash
git clone <repository-url>
cd techvicom
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy dự án**
```bash
npm start
```

4. **Build cho production**
```bash
npm run build
```

## 🔧 Cấu hình

### Logo
Thay thế file `public/logo.png` bằng logo của bạn:
- Kích thước khuyến nghị: 40x40px hoặc lớn hơn
- Format: PNG với nền trong suốt

### API Backend
Cấu hình API trong `src/api/config.js`:
```javascript
const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  // ... các cấu hình khác
};
```

### Environment Variables
Tạo file `.env` trong thư mục gốc:
```env
REACT_APP_API_URL=http://your-laravel-backend.com/api
```

## 📱 Responsive Design

- **Desktop**: 1200px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🎯 Tích hợp với Laravel 12

Dự án được thiết kế để dễ dàng tích hợp với Laravel 12 backend:

1. **API Endpoints**: Đã định nghĩa đầy đủ trong `src/api/config.js`
2. **Authentication**: Hỗ trợ JWT token
3. **Error Handling**: Xử lý lỗi API tự động
4. **Loading States**: Hiển thị trạng thái loading

## 🚀 Deployment

### Netlify
1. Push code lên GitHub
2. Kết nối với Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Vercel
1. Push code lên GitHub
2. Import project vào Vercel
3. Deploy tự động

## 📝 TODO

- [ ] Tích hợp với Laravel backend
- [ ] Thêm chức năng giỏ hàng
- [ ] Thêm chức năng thanh toán
- [ ] Thêm chức năng đăng nhập/đăng ký
- [ ] Thêm chức năng tìm kiếm
- [ ] Thêm chức năng đánh giá sản phẩm

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License.

## 📞 Liên hệ

- Email: contact@techvicom.com
- Website: https://techvicom.com 