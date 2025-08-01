// API Configuration for Laravel 12 Backend
const API_CONFIG = {
    // Base URL for API calls
    BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',

    // API Version
    VERSION: 'v1',

    // Default headers
    DEFAULT_HEADERS: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },

    // Timeout for requests (in milliseconds)
    TIMEOUT: 10000,

    // Endpoints
    ENDPOINTS: {
        // Authentication
        AUTH: {
            LOGIN: '/auth/login',
            REGISTER: '/auth/register',
            LOGOUT: '/auth/logout',
            REFRESH: '/auth/refresh',
            PROFILE: '/auth/profile',
        },

        // Products
        PRODUCTS: {
            LIST: '/products',
            SHOW: '/products/:id',
            FEATURED: '/products/featured',
            SEARCH: '/products/search',
            BY_CATEGORY: '/products/category/:category',
            BY_BRAND: '/products/brand/:brand',
        },

        // Categories
        CATEGORIES: {
            LIST: '/categories',
            SHOW: '/categories/:id',
            PRODUCTS: '/categories/:id/products',
        },

        // Brands
        BRANDS: {
            LIST: '/brands',
            SHOW: '/brands/:id',
            PRODUCTS: '/brands/:id/products',
        },

        // Blog Posts
        BLOG: {
            LIST: '/blog',
            SHOW: '/blog/:id',
            FEATURED: '/blog/featured',
            BY_CATEGORY: '/blog/category/:category',
        },

        // Cart
        CART: {
            SHOW: '/cart',
            ADD_ITEM: '/cart/add',
            UPDATE_ITEM: '/cart/update/:id',
            REMOVE_ITEM: '/cart/remove/:id',
            CLEAR: '/cart/clear',
        },

        // Orders
        ORDERS: {
            LIST: '/orders',
            SHOW: '/orders/:id',
            CREATE: '/orders',
            TRACK: '/orders/:id/track',
        },

        // Wishlist
        WISHLIST: {
            LIST: '/wishlist',
            ADD: '/wishlist/add',
            REMOVE: '/wishlist/remove/:id',
        },

        // Reviews
        REVIEWS: {
            LIST: '/products/:productId/reviews',
            CREATE: '/products/:productId/reviews',
            UPDATE: '/reviews/:id',
            DELETE: '/reviews/:id',
        },

        // Newsletter
        NEWSLETTER: {
            SUBSCRIBE: '/newsletter/subscribe',
            UNSUBSCRIBE: '/newsletter/unsubscribe',
        },

        // Contact
        CONTACT: {
            SEND: '/contact/send',
        },
    },

    // Error messages
    ERROR_MESSAGES: {
        NETWORK_ERROR: 'Lỗi kết nối mạng. Vui lòng thử lại.',
        UNAUTHORIZED: 'Bạn chưa đăng nhập hoặc phiên đăng nhập đã hết hạn.',
        FORBIDDEN: 'Bạn không có quyền truy cập tài nguyên này.',
        NOT_FOUND: 'Không tìm thấy tài nguyên yêu cầu.',
        VALIDATION_ERROR: 'Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.',
        SERVER_ERROR: 'Lỗi máy chủ. Vui lòng thử lại sau.',
        TIMEOUT: 'Yêu cầu quá thời gian chờ. Vui lòng thử lại.',
    },

    // Success messages
    SUCCESS_MESSAGES: {
        LOGIN: 'Đăng nhập thành công!',
        REGISTER: 'Đăng ký thành công!',
        LOGOUT: 'Đăng xuất thành công!',
        PROFILE_UPDATE: 'Cập nhật thông tin thành công!',
        CART_ADD: 'Đã thêm sản phẩm vào giỏ hàng!',
        CART_REMOVE: 'Đã xóa sản phẩm khỏi giỏ hàng!',
        WISHLIST_ADD: 'Đã thêm sản phẩm vào yêu thích!',
        WISHLIST_REMOVE: 'Đã xóa sản phẩm khỏi yêu thích!',
        ORDER_CREATE: 'Đặt hàng thành công!',
        REVIEW_CREATE: 'Đánh giá thành công!',
        NEWSLETTER_SUBSCRIBE: 'Đăng ký nhận tin thành công!',
        CONTACT_SEND: 'Gửi tin nhắn thành công!',
    },
};

export default API_CONFIG; 