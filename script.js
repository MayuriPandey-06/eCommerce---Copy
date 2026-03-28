// Product data with better images
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 199.99,
        rating: 4.5,
        category: "Electronics",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495&width=400?w=400&h=400&fit=crop",
        description: "High-quality wireless headphones with noise cancellation and premium sound quality for an immersive listening experience."
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 299.99,
        rating: 4.7,
        category: "Electronics",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQM0wrNFZJzmQo0HVM-W-nCtN9t1-9VP3WmA&s?w=400&h=400&fit=crop",
        description: "Feature-packed smartwatch with health tracking, notifications, and a sleek design that complements any style."
    },
    {
        id: 3,
        name: "Cotton T-Shirt",
        price: 29.99,
        rating: 4.2,
        category: "Clothing",
        image: "https://www.hancockfashion.com/cdn/shop/files/51be7b6a-f0a5-4c53-9635-adccb17be6b31714126302364-Hancock-Men-Solid-Pique-Polo-Collar-Bio-Finish-Pure-Cotton-T-1.jpg?v=1734411563?w=400&h=400&fit=crop",
        description: "Comfortable cotton t-shirt available in multiple colors, perfect for casual wear and everyday comfort."
    },
    {
        id: 4,
        name: "Running Shoes",
        price: 129.99,
        rating: 4.6,
        category: "Clothing",
        image: "https://www.campusshoes.com/cdn/shop/files/LEVEL_LEVEL_WHT-L.GRY_07_831c7a2c-ff1b-4011-9268-b11f984219c6.webp?v=1757580207?w=400&h=400&fit=crop",
        description: "Lightweight running shoes with excellent cushioning and support for your active lifestyle."
    },
    {
        id: 5,
        name: "Coffee Maker",
        price: 89.99,
        rating: 4.3,
        category: "Home",
        image: "https://m.media-amazon.com/images/I/81poMW9LWBL._AC_UF350,350_QL80_.jpg?w=400&h=400&fit=crop",
        description: "Automatic coffee maker for perfect brew every time, making your morning routine effortless."
    },
    {
        id: 6,
        name: "Plant Pot Set",
        price: 49.99,
        rating: 4.1,
        category: "Home",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
        description: "Beautiful ceramic plant pots for your indoor garden, adding a touch of nature to your space."
    },
    {
        id: 7,
        name: "Face Moisturizer",
        price: 39.99,
        rating: 4.4,
        category: "Beauty",
        image: "https://www.instyle.com/thmb/V5yKOm3i2zNPVGE0Ej59gPHA0zA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ins-moisturizers-for-dry-skin-tout-cdeac59768eb43ee9345dc311957028e.jpg?w=400&h=400&fit=crop",
        description: "Hydrating face moisturizer with SPF protection for healthy, glowing skin all day long."
    },
    {
        id: 8,
        name: "Lipstick Set",
        price: 24.99,
        rating: 4.0,
        category: "Beauty",
        image: "https://buyzo.in/cdn/shop/files/nude-red-different-shades-liquid-lipstick-set-of-4-16ml-702.webp?v=1752758917&width=1445?w=400&h=400&fit=crop",
        description: "Long-lasting lipstick in various shades, perfect for enhancing your natural beauty."
    },
    {
        id: 9,
        name: "Bluetooth Speaker",
        price: 79.99,
        rating: 4.5,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
        description: "Portable Bluetooth speaker with excellent sound quality and long battery life."
    },
    {
        id: 10,
        name: "Yoga Mat",
        price: 34.99,
        rating: 4.3,
        category: "Home",
        image: "https://healthsense.in/cdn/shop/files/1_7b94b1a9-10b9-42d7-b107-8be31cc7781a.png?v=1745999487?w=400&h=400&fit=crop",
        description: "Non-slip yoga mat perfect for home workouts and maintaining your fitness routine."
    },
    {
        id: 11,
        name: "Sunglasses",
        price: 59.99,
        rating: 4.2,
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
        description: "Stylish sunglasses with UV protection, perfect for sunny days and outdoor activities."
    },
    {
        id: 12,
        name: "Essential Oil Diffuser",
        price: 69.99,
        rating: 4.6,
        category: "Home",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpF5ppUOKXh_3LV_uC_yQspv1KvoU56OhJA&s?w=400&h=400&fit=crop",
        description: "Ultrasonic essential oil diffuser for aromatherapy and creating a relaxing atmosphere."
    }
];

// Global variables
const currencySymbol = '₹';
const inrConversionRate = 82;
function formatPrice(value) {
    return `${currencySymbol}${(value * inrConversionRate).toFixed(0)}`;
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentProduct = null;
let currentView = 'grid'; // 'grid' or 'list'
let currentPage = 1;
let productsPerPage = 12;

// DOM elements
const pages = document.querySelectorAll('.page');
const loadingScreen = document.getElementById('loadingScreen');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const cartBtn = document.getElementById('cartBtn');
const wishlistBtn = document.getElementById('wishlistBtn');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');
const toast = document.getElementById('toast');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const gridView = document.getElementById('gridView');
const listView = document.getElementById('listView');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300);
    }, 1500);

    updateCartCount();
    updateWishlistCount();
    renderFeaturedProducts();
    renderProducts();
    setupEventListeners();
});

// Page navigation
function showPage(pageId) {
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update breadcrumbs
    updateBreadcrumbs(pageId);

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    if (pageId === 'home') {
        document.querySelector('.nav-link[href="#"]').classList.add('active');
    }
}

// Breadcrumbs
function updateBreadcrumbs(pageId) {
    const breadcrumbs = document.getElementById('breadcrumbs');
    let breadcrumbHTML = '';

    switch (pageId) {
        case 'home':
            breadcrumbs.style.display = 'none';
            break;
        case 'products':
            breadcrumbs.style.display = 'block';
            breadcrumbHTML = `
                <div class="breadcrumbs-content">
                    <a href="#" onclick="showPage('home')" class="breadcrumb-link">Home</a>
                    <span>/</span>
                    <span>Products</span>
                </div>
            `;
            break;
        case 'product-details':
            breadcrumbs.style.display = 'block';
            breadcrumbHTML = `
                <div class="breadcrumbs-content">
                    <a href="#" onclick="showPage('home')" class="breadcrumb-link">Home</a>
                    <span>/</span>
                    <a href="#" onclick="showPage('products')" class="breadcrumb-link">Products</a>
                    <span>/</span>
                    <span>${currentProduct ? currentProduct.name : 'Product Details'}</span>
                </div>
            `;
            break;
        case 'cart':
            breadcrumbs.style.display = 'block';
            breadcrumbHTML = `
                <div class="breadcrumbs-content">
                    <a href="#" onclick="showPage('home')" class="breadcrumb-link">Home</a>
                    <span>/</span>
                    <span>Shopping Cart</span>
                </div>
            `;
            break;
        case 'checkout':
            breadcrumbs.style.display = 'block';
            breadcrumbHTML = `
                <div class="breadcrumbs-content">
                    <a href="#" onclick="showPage('home')" class="breadcrumb-link">Home</a>
                    <span>/</span>
                    <a href="#" onclick="showPage('cart')" class="breadcrumb-link">Cart</a>
                    <span>/</span>
                    <span>Checkout</span>
                </div>
            `;
            renderCheckout();
            break;
        case 'order-success':
            breadcrumbs.style.display = 'block';
            breadcrumbHTML = `
                <div class="breadcrumbs-content">
                    <a href="#" onclick="showPage('home')" class="breadcrumb-link">Home</a>
                    <span>/</span>
                    <span>Order Success</span>
                </div>
            `;
            break;
        default:
            breadcrumbs.style.display = 'none';
    }

    breadcrumbs.innerHTML = breadcrumbHTML;
}

// Event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    categoryFilter.addEventListener('change', filterProducts);
    sortFilter.addEventListener('change', sortProducts);

    cartBtn.addEventListener('click', () => showPage('cart'));
    wishlistBtn.addEventListener('click', showWishlist);

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // View toggle
    gridView.addEventListener('click', () => setView('grid'));
    listView.addEventListener('click', () => setView('list'));

    // Load more
    loadMoreBtn.addEventListener('click', loadMoreProducts);

    // Product details events - Use event delegation for dynamically created elements
    document.addEventListener('click', (e) => {
        const decreaseBtn = e.target.closest('#decreaseQty');
        const increaseBtn = e.target.closest('#increaseQty');
        const addToCartBtn = e.target.closest('#addToCartBtn');
        const buyNowBtn = e.target.closest('#buyNowBtn');
        const wishlistBtn = e.target.closest('#wishlistDetailBtn');
        const checkoutBtn = e.target.closest('#checkoutBtn');
        const placeOrderBtn = e.target.closest('#placeOrderBtn');

        if (decreaseBtn) {
            updateQuantity(-1);
        }
        if (increaseBtn) {
            updateQuantity(1);
        }
        if (addToCartBtn) {
            addToCartFromDetail();
        }
        if (buyNowBtn) {
            buyNow();
        }
        if (wishlistBtn) {
            toggleWishlist(currentProduct.id);
            const wishlistButton = document.getElementById('wishlistDetailBtn');
            if (wishlistButton) {
                const isWishlisted = wishlist.some(item => item.id === currentProduct.id);
                wishlistButton.innerHTML = isWishlisted ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
            }
        }
        if (checkoutBtn) {
            if (cart.length === 0) {
                showToast('Your cart is empty!', 'error');
                return;
            }
            showPage('checkout');
        }
        if (placeOrderBtn) {
            placeOrder();
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('show');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    mobileMenu.classList.toggle('show');
}

// View toggle
function setView(view) {
    currentView = view;
    gridView.classList.toggle('active', view === 'grid');
    listView.classList.toggle('active', view === 'list');
    renderProducts();
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Render functions
function renderFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    const featured = products.slice(0, 4);
    featuredContainer.innerHTML = featured.map(product => createProductCard(product)).join('');
}

function renderProducts(filteredProducts = products) {
    const productsGrid = document.getElementById('productsGrid');
    const startIndex = 0;
    const endIndex = currentPage * productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    productsGrid.className = `products-grid ${currentView}-view`;

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <h3>Product not found</h3>
                <p>Try another search term or browse our categories to find what you need.</p>
            </div>
        `;
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
        return;
    }

    productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');

    // Show/hide load more button
    if (loadMoreBtn) {
        loadMoreBtn.style.display = endIndex < filteredProducts.length ? 'block' : 'none';
    }
}

function showWishlist() {
    categoryFilter.value = '';
    sortFilter.value = 'name';
    currentPage = 1;
    renderProducts(wishlist);
    showPage('products');
}

function createProductCard(product) {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const isNew = product.id > 8; // Mark newer products as new

    if (currentView === 'list') {
        return `
            <div class="product-card fade-in" onclick="showProductDetail(${product.id})">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${isNew ? '<div class="product-badge">New</div>' : ''}
                    <button class="product-wishlist ${isInWishlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                        <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-rating">
                        <div class="rating-stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                        <span class="rating-count">(${product.rating})</span>
                    </div>
                    <p class="product-description">${product.description.substring(0, 100)}...</p>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    return `
        <div class="product-card fade-in" onclick="showProductDetail(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${isNew ? '<div class="product-badge">New</div>' : ''}
                <button class="product-wishlist ${isInWishlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                    <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-rating">
                    <div class="rating-stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                    <span class="rating-count">(${product.rating})</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

function loadMoreProducts() {
    currentPage++;
    renderProducts();
}

// Product detail functions
function showProductDetail(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;

    const productDetailImg = document.getElementById('productDetailImg');
    const productDetailName = document.getElementById('productDetailName');
    const productDetailPrice = document.getElementById('productDetailPrice');
    const productDetailDesc = document.getElementById('productDetailDesc');
    const productDetailRating = document.getElementById('productDetailRating');
    const wishlistDetailBtn = document.getElementById('wishlistDetailBtn');

    productDetailImg.src = currentProduct.image;
    productDetailName.textContent = currentProduct.name;
    productDetailPrice.textContent = formatPrice(currentProduct.price);
    productDetailDesc.textContent = currentProduct.description;
    productDetailRating.innerHTML = `
        <div class="rating-stars">${'★'.repeat(Math.floor(currentProduct.rating))}${'☆'.repeat(5 - Math.floor(currentProduct.rating))}</div>
        <span class="rating-count">${currentProduct.rating} out of 5 stars</span>
    `;

    wishlistDetailBtn.innerHTML = wishlist.some(item => item.id === currentProduct.id) ?
        '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';

    document.getElementById('productQty').value = '1';

    showPage('product-details');
}

function updateQuantity(change) {
    const qtyElement = document.getElementById('productQty');
    let qty = parseInt(qtyElement.value) + change;
    if (qty < 1) qty = 1;
    qtyElement.value = qty;
}

// Add event listener for quantity input
document.addEventListener('DOMContentLoaded', () => {
    const qtyInput = document.getElementById('productQty');
    if (qtyInput) {
        qtyInput.addEventListener('change', (e) => {
            let qty = parseInt(e.target.value);
            if (isNaN(qty) || qty < 1) {
                e.target.value = 1;
            }
        });
    }
});

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    showToast(`${product.name} added to cart!`, 'success');

    // Animate cart icon
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 300);
}

function addToCartFromDetail() {
    const qty = parseInt(document.getElementById('productQty').value);
    const existingItem = cart.find(item => item.id === currentProduct.id);

    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        cart.push({ ...currentProduct, quantity: qty });
    }

    saveCart();
    updateCartCount();
    showToast(`${currentProduct.name} added to cart!`, 'success');
}

function buyNow() {
    addToCartFromDetail();
    showPage('checkout');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        saveCart();
        renderCart();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

function renderCart() {
    const cartContainer = document.querySelector('.cart-container');
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <h2>Your cart is empty</h2>
                <p>Add some products to get started!</p>
                <button class="btn-primary" onclick="showPage('products')">Continue Shopping</button>
            </div>
        `;
        return;
    }

    const cartItemsHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-quantity">
                    <button onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    cartContainer.innerHTML = `
        <div class="cart-header">
            <h2>Shopping Cart</h2>
            <p>${cart.length} item${cart.length > 1 ? 's' : ''} in your cart</p>
        </div>
        <div class="cart-items">
            ${cartItemsHTML}
        </div>
        <div class="cart-summary">
            <h3>Order Summary</h3>
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>Tax:</span>
                <span>${formatPrice(tax)}</span>
            </div>
            <div class="summary-total">
                <span>Total:</span>
                <span>${formatPrice(total)}</span>
            </div>
        </div>
        <div class="cart-actions">
            <button class="btn-secondary" onclick="showPage('products')">Continue Shopping</button>
            <button class="btn-primary" id="checkoutBtn">Proceed to Checkout</button>
        </div>
    `;
}

// Wishlist functions
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const index = wishlist.findIndex(item => item.id === productId);

    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(`${product.name} removed from wishlist`, 'info');
    } else {
        wishlist.push(product);
        showToast(`${product.name} added to wishlist`, 'success');
    }

    saveWishlist();
    updateWishlistCount();
    renderProducts();
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
    wishlistCount.style.display = wishlist.length > 0 ? 'flex' : 'none';
}

// Filter and search functions
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        categoryFilter.value = '';
        renderProducts();
        showPage('products');
        return;
    }

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    renderProducts(filtered);
    showPage('products');

    if (filtered.length === 0) {
        showToast('Product not found', 'warning');
    }
}

function filterByCategory(category) {
    categoryFilter.value = category;
    filterProducts();
    showPage('products');
}

function filterProducts() {
    let filtered = products;
    const category = categoryFilter.value;
    if (category) {
        filtered = filtered.filter(product => product.category === category);
    }
    currentPage = 1;
    renderProducts(filtered);
}

function sortProducts() {
    let sorted = [...products];
    const sortBy = sortFilter.value;

    switch (sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        default:
            sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    currentPage = 1;
    renderProducts(sorted);
}

// Image upload functionality
// Checkout functions
function renderCheckout() {
    const checkoutForm = document.querySelector('.checkout-form');
    const orderSummary = document.querySelector('.order-summary-checkout');

    if (!checkoutForm || !orderSummary) return;

    checkoutForm.innerHTML = `
        <form id="checkoutForm">
            <div class="form-section">
                <h3>Shipping Information</h3>
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName">First Name *</label>
                        <input type="text" id="firstName" placeholder="Enter your first name" autocomplete="given-name" required>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name *</label>
                        <input type="text" id="lastName" placeholder="Enter your last name" autocomplete="family-name" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" placeholder="Enter your email" autocomplete="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number *</label>
                    <input type="tel" id="phone" placeholder="Enter your phone number" autocomplete="tel" required>
                </div>
                <div class="form-group">
                    <label for="address">Street Address *</label>
                    <input type="text" id="address" placeholder="Enter your street address" autocomplete="address-line1" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="city">City *</label>
                        <input type="text" id="city" placeholder="Enter your city" autocomplete="address-level2" required>
                    </div>
                    <div class="form-group">
                        <label for="zipCode">ZIP Code *</label>
                        <input type="text" id="zipCode" placeholder="Enter ZIP code" autocomplete="postal-code" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="country">Country *</label>
                    <select id="country" autocomplete="country" required>
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="IN">India</option>
                    </select>
                </div>
            </div>
            <div class="form-section">
                <h3>Payment Method</h3>
                <div class="payment-options">
                    <div class="payment-option selected" onclick="selectPayment('cod')">
                        <input type="radio" name="payment" value="cod" checked>
                        <div>
                            <i class="fas fa-money-bill-wave"></i>
                            <strong>Cash on Delivery</strong>
                            <p>Pay when you receive your order</p>
                        </div>
                    </div>
                    <div class="payment-option" onclick="selectPayment('card')">
                        <input type="radio" name="payment" value="card">
                        <div>
                            <i class="fas fa-credit-card"></i>
                            <strong>Credit/Debit Card</strong>
                            <p>Pay securely with your card</p>
                        </div>
                    </div>
                    <div class="payment-option" onclick="selectPayment('paypal')">
                        <input type="radio" name="payment" value="paypal">
                        <div>
                            <i class="fab fa-paypal"></i>
                            <strong>PayPal</strong>
                            <p>Pay with your PayPal account</p>
                        </div>
                    </div>
                </div>
                <div id="cardDetails" style="display: none;">
                    <div class="form-section">
                        <h4>Card Information</h4>
                        <div class="form-group">
                            <label for="cardNumber">Card Number *</label>
                            <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" autocomplete="cc-number">
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="expiryDate">Expiry Date *</label>
                                <input type="text" id="expiryDate" placeholder="MM/YY" autocomplete="cc-exp">
                            </div>
                            <div class="form-group">
                                <label for="cvv">CVV *</label>
                                <input type="text" id="cvv" placeholder="123" autocomplete="cc-csc">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    `;

    const checkoutItemsHTML = cart.map(item => `
        <div class="checkout-item">
            <div class="checkout-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="checkout-item-info">
                <div class="checkout-item-name">${item.name}</div>
                <div class="checkout-item-details">Quantity: ${item.quantity}</div>
            </div>
            <div class="checkout-item-price">${formatPrice(item.price * item.quantity)}</div>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    orderSummary.innerHTML = `
        <h3>Order Summary</h3>
        ${checkoutItemsHTML}
        <div class="checkout-total">
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping:</span>
                <span>Free</span>
            </div>
            <div class="summary-row">
                <span>Tax:</span>
                <span>${formatPrice(tax)}</span>
            </div>
            <div class="summary-total">
                <span>Total:</span>
                <span>${formatPrice(total)}</span>
            </div>
        </div>
        <button class="btn-primary" id="placeOrderBtn">Place Order</button>
    `;
}

function selectPayment(method) {
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    document.querySelector(`input[value="${method}"]`).checked = true;

    // Show/hide card details based on payment method
    const cardDetails = document.getElementById('cardDetails');
    if (method === 'card') {
        cardDetails.style.display = 'block';
    } else {
        cardDetails.style.display = 'none';
    }
}

function placeOrder() {
    console.log('placeOrder function called');

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const zipCode = document.getElementById('zipCode');
    const country = document.getElementById('country');

    // Check if form elements exist
    if (!firstName || !lastName || !email || !phone || !address || !city || !zipCode || !country) {
        console.error('Form elements not found!');
        showToast('Form not loaded properly. Please refresh the page.', 'error');
        return;
    }

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();
    const zipCodeValue = zipCode.value.trim();
    const countryValue = country.value;

    console.log('Form values:', { firstNameValue, lastNameValue, emailValue, phoneValue, addressValue, cityValue, zipCodeValue, countryValue });

    // Basic validation
    if (!firstNameValue || !lastNameValue || !emailValue || !phoneValue || !addressValue || !cityValue || !zipCodeValue || !countryValue) {
        showToast('Please fill in all required fields!', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        showToast('Please enter a valid email address!', 'error');
        return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phoneValue.replace(/[\s\-\(\)]/g, ''))) {
        showToast('Please enter a valid phone number!', 'error');
        return;
    }

    // Payment method validation
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    if (!paymentMethod) {
        showToast('Please select a payment method!', 'error');
        return;
    }

    const paymentMethodValue = paymentMethod.value;
    if (paymentMethodValue === 'card') {
        const cardNumber = document.getElementById('cardNumber');
        const expiryDate = document.getElementById('expiryDate');
        const cvv = document.getElementById('cvv');

        if (!cardNumber || !expiryDate || !cvv) {
            showToast('Card details not available. Please select card payment again.', 'error');
            return;
        }

        const cardNumberValue = cardNumber.value.trim();
        const expiryDateValue = expiryDate.value.trim();
        const cvvValue = cvv.value.trim();

        if (!cardNumberValue || !expiryDateValue || !cvvValue) {
            showToast('Please fill in all card details!', 'error');
            return;
        }

        // Basic card validation
        if (cardNumberValue.replace(/\s/g, '').length < 13) {
            showToast('Please enter a valid card number!', 'error');
            return;
        }
    }

    console.log('Validation passed, processing order...');

    // Show loading state
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    const originalText = placeOrderBtn.textContent;
    placeOrderBtn.textContent = 'Processing...';
    placeOrderBtn.disabled = true;

    // Simulate order processing delay
    setTimeout(() => {
        console.log('Order processing complete');

        // Generate order details
        const orderSummary = cart.map(item => `
            <div class="success-item">
                <div class="success-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="success-item-info">
                    <div class="success-item-name">${item.name}</div>
                    <div class="success-item-details">Quantity: ${item.quantity}</div>
                </div>
                <div class="success-item-price">${formatPrice(item.price * item.quantity)}</div>
            </div>
        `).join('');

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.1;
        const total = subtotal + tax;

        document.getElementById('successOrderSummary').innerHTML = `
            <div class="order-details">
                <h4>Order #${Date.now().toString().slice(-8)}</h4>
                <p><strong>Shipping to:</strong> ${firstNameValue} ${lastNameValue}</p>
                <p><strong>Address:</strong> ${addressValue}, ${cityValue}, ${zipCodeValue}, ${countryValue}</p>
                <p><strong>Payment:</strong> ${paymentMethodValue === 'cod' ? 'Cash on Delivery' : paymentMethodValue === 'card' ? 'Credit Card' : 'PayPal'}</p>
            </div>
            <div class="order-items">
                ${orderSummary}
            </div>
            <div class="success-total">
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>${formatPrice(subtotal)}</span>
                </div>
                <div class="summary-row">
                    <span>Tax:</span>
                    <span>${formatPrice(tax)}</span>
                </div>
                <div class="summary-total">
                    <strong>Total: ${formatPrice(total)}</strong>
                </div>
            </div>
        `;

        // Clear cart
        cart = [];
        saveCart();
        updateCartCount();

        // Reset button
        placeOrderBtn.textContent = originalText;
        placeOrderBtn.disabled = false;

        // Show success notification with order number
        const orderNumber = Date.now().toString().slice(-8);
        showToast(`✓ Order #${orderNumber} placed successfully!`, 'success');

        // Show additional notification after order-success page loads
        showPage('order-success');
        setTimeout(() => {
            showToast('Confirmation email has been sent to your registered email address.', 'info');
        }, 1500);
    }, 2000); // 2 second delay to simulate processing
}

// Utility functions
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Initialize cart and checkout when pages are shown
document.addEventListener('click', (e) => {
    if (e.target.closest('#cartBtn')) {
        renderCart();
        showPage('cart');
    }
    if (e.target.closest('#checkoutBtn')) {
        renderCheckout();
    }
});