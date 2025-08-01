import axios from 'axios';
import API_CONFIG from './config';

// Create axios instance with default configuration
const apiClient = axios.create({
    baseURL: `${API_CONFIG.BASE_URL}/${API_CONFIG.VERSION}`,
    timeout: API_CONFIG.TIMEOUT,
    headers: API_CONFIG.DEFAULT_HEADERS,
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle common errors
apiClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response) {
            // Server responded with error status
            const { status, data } = error.response;

            switch (status) {
                case 401:
                    // Unauthorized - clear token and redirect to login
                    localStorage.removeItem('auth_token');
                    window.location.href = '/login';
                    break;
                case 403:
                    console.error('Forbidden:', data.message);
                    break;
                case 404:
                    console.error('Not found:', data.message);
                    break;
                case 422:
                    console.error('Validation error:', data.errors);
                    break;
                case 500:
                    console.error('Server error:', data.message);
                    break;
                default:
                    console.error('API error:', data.message);
            }
        } else if (error.request) {
            // Network error
            console.error('Network error:', error.message);
        } else {
            // Other error
            console.error('Error:', error.message);
        }

        return Promise.reject(error);
    }
);

// Helper function to replace URL parameters
const replaceUrlParams = (url, params) => {
    let result = url;
    Object.keys(params).forEach(key => {
        result = result.replace(`:${key}`, params[key]);
    });
    return result;
};

// API Service class
class ApiService {
    // Authentication
    static async login(credentials) {
        return apiClient.post(API_CONFIG.ENDPOINTS.AUTH.LOGIN, credentials);
    }

    static async register(userData) {
        return apiClient.post(API_CONFIG.ENDPOINTS.AUTH.REGISTER, userData);
    }

    static async logout() {
        return apiClient.post(API_CONFIG.ENDPOINTS.AUTH.LOGOUT);
    }

    static async getProfile() {
        return apiClient.get(API_CONFIG.ENDPOINTS.AUTH.PROFILE);
    }

    static async updateProfile(profileData) {
        return apiClient.put(API_CONFIG.ENDPOINTS.AUTH.PROFILE, profileData);
    }

    // Products
    static async getProducts(params = {}) {
        return apiClient.get(API_CONFIG.ENDPOINTS.PRODUCTS.LIST, { params });
    }

    static async getProduct(id) {
        return apiClient.get(replaceUrlParams(API_CONFIG.ENDPOINTS.PRODUCTS.SHOW, { id }));
    }

    static async getFeaturedProducts() {
        return apiClient.get(API_CONFIG.ENDPOINTS.PRODUCTS.FEATURED);
    }

    static async searchProducts(query, params = {}) {
        return apiClient.get(API_CONFIG.ENDPOINTS.PRODUCTS.SEARCH, {
            params: { q: query, ...params }
        });
    }

    static async getProductsByCategory(category, params = {}) {
        const url = replaceUrlParams(API_CONFIG.ENDPOINTS.PRODUCTS.BY_CATEGORY, { category });
        return apiClient.get(url, { params });
    }

    static async getProductsByBrand(brand, params = {}) {
        const url = replaceUrlParams(API_CONFIG.ENDPOINTS.PRODUCTS.BY_BRAND, { brand });
        return apiClient.get(url, { params });
    }

    // Categories
    static async getCategories() {
        return apiClient.get(API_CONFIG.ENDPOINTS.CATEGORIES.LIST);
    }

    static async getCategory(id) {
        return apiClient.get(replaceUrlParams(API_CONFIG.ENDPOINTS.CATEGORIES.SHOW, { id }));
    }

    static async getCategoryProducts(id, params = {}) {
        const url = replaceUrlParams(API_CONFIG.ENDPOINTS.CATEGORIES.PRODUCTS, { id });
        return apiClient.get(url, { params });
    }

    // Brands
    static async getBrands() {
        return apiClient.get(API_CONFIG.ENDPOINTS.BRANDS.LIST);
    }

    static async getBrand(id) {
        return apiClient.get(replaceUrlParams(API_CONFIG.ENDPOINTS.BRANDS.SHOW, { id }));
    }

    static async getBrandProducts(id, params = {}) {
        const url = replaceUrlParams(API_CONFIG.ENDPOINTS.BRANDS.PRODUCTS, { id });
        return apiClient.get(url, { params });
    }

    // Blog Posts
    static async getBlogPosts(params = {}) {
        return apiClient.get(API_CONFIG.ENDPOINTS.BLOG.LIST, { params });
    }

    static async getBlogPost(id) {
        return apiClient.get(replaceUrlParams(API_CONFIG.ENDPOINTS.BLOG.SHOW, { id }));
    }

    static async getFeaturedBlogPosts() {
        return apiClient.get(API_CONFIG.ENDPOINTS.BLOG.FEATURED);
    }

    static async getBlogPostsByCategory(category, params = {}) {
        const url = replaceUrlParams(API_CONFIG.ENDPOINTS.BLOG.BY_CATEGORY, { category });
        return apiClient.get(url, { params });
    }

    // Cart
    static async getCart() {
        return apiClient.get(API_CONFIG.ENDPOINTS.CART.SHOW);
    }

    static async addToCart(productData) {
        return apiClient.post(API_CONFIG.ENDPOINTS.CART.ADD_ITEM, productData);
    }

    static async updateCartItem(id, quantity) {
        const url = replaceUrlParams(API_CONFIG.ENDPOINTS.CART.UPDATE_ITEM, { id });
        return apiClient.put(url, { quantity });
    }

    static async removeFromCart(id) {
        const url = replaceUrlParams(API_CONFIG.ENDPOINTS.CART.REMOVE_ITEM, { id });
        return apiClient.delete(url);
    }

    static async clearCart() {
        return apiClient.delete(API_CONFIG.ENDPOINTS.CART.CLEAR);
    }

    // Orders
    static async getOrders() {
        return apiClient.get(API_CONFIG.ENDPOINTS.ORDERS.LIST);
    }

    static async getOrder(id) {
        return apiClient.get(replaceUrlParams(API_CONFIG.ENDPOINTS.ORDERS.SHOW, { id }));
    }

    static async createOrder(orderData) {
        return apiClient.post(API_CONFIG.ENDPOINTS.ORDERS.CREATE, orderData);
    }

    static async trackOrder(id) {
        const url = replaceUrlParams(API_CONFIG.ENDPOINTS.ORDERS.TRACK, { id });
        return apiClient.get(url);
    }

    // Wishlist
    static async getWishlist() {
        return apiClient.get(API_CONFIG.ENDPOINTS.WISHLIST.LIST);
    }

    static async addToWishlist(productId) {
        return apiClient.post(API_CONFIG.ENDPOINTS.WISHLIST.ADD, { product_id: productId });
    }

    static async removeFromWishlist(id) {
        const url = replaceUrlParams(API_CONFIG.ENDPOINTS.WISHLIST.REMOVE, { id });
        return apiClient.delete(url);
    }

    // Reviews
    static async getProductReviews(productId, params = {}) {
        const url = replaceUrlParams(API_CONFIG.ENDPOINTS.REVIEWS.LIST, { productId });
        return apiClient.get(url, { params });
    }

    static async createReview(productId, reviewData) {
        const url = replaceUrlParams(API_CONFIG.ENDPOINTS.REVIEWS.CREATE, { productId });
        return apiClient.post(url, reviewData);
    }

    static async updateReview(id, reviewData) {
        const url = replaceUrlParams(API_CONFIG.ENDPOINTS.REVIEWS.UPDATE, { id });
        return apiClient.put(url, reviewData);
    }

    static async deleteReview(id) {
        const url = replaceUrlParams(API_CONFIG.ENDPOINTS.REVIEWS.DELETE, { id });
        return apiClient.delete(url);
    }

    // Newsletter
    static async subscribeNewsletter(email) {
        return apiClient.post(API_CONFIG.ENDPOINTS.NEWSLETTER.SUBSCRIBE, { email });
    }

    static async unsubscribeNewsletter(email) {
        return apiClient.post(API_CONFIG.ENDPOINTS.NEWSLETTER.UNSUBSCRIBE, { email });
    }

    // Contact
    static async sendContactMessage(messageData) {
        return apiClient.post(API_CONFIG.ENDPOINTS.CONTACT.SEND, messageData);
    }
}

export default ApiService; 