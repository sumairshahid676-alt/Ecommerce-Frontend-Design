const productsDatabase = [
    {
        id: 1,
        title: "Canon EOS 2000D DSLR Camera, Black 10x zoom",
        category: "electronics",
        brand: "Canon",
        price: 998.00,
        oldPrice: 1128.00,
        rating: 4.5,
        orders: 154,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgName: "[Canon Camera Pic]"
    },
    {
        id: 2,
        title: "GoPro HERO9 4K Action Camera - Black Special Edition",
        category: "electronics",
        brand: "GoPro",
        price: 798.00,
        oldPrice: 899.00,
        rating: 4.8,
        orders: 320,
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imgName: "[GoPro HERO9 Pic]"
    },
    {
        id: 3,
        title: "Apple iPhone 12 Pro Max - Dual Sim 128GB",
        category: "mobiles",
        brand: "Apple",
        price: 998.00,
        oldPrice: 1099.00,
        rating: 4.9,
        orders: 190,
        desc: "Experience ultra-fast processing speeds and pristine optical imagery stabilization control systems.",
        imgName: "[iPhone 12 Pic]"
    },
    {
        id: 4,
        title: "Samsung Galaxy S21 Ultra 5G Smartphone",
        category: "mobiles",
        brand: "Samsung",
        price: 898.00,
        oldPrice: 1025.00,
        rating: 4.7,
        orders: 112,
        desc: "Stunning cinematic 8K video resolution processing unit with state-of-the-art computational layers.",
        imgName: "[Galaxy S21 Pic]"
    },
    {
        id: 5,
        title: "Xiaomi Redmi Watch 2 Lite Smartwatch",
        category: "mobiles",
        brand: "Xiaomi",
        price: 68.00,
        oldPrice: 99.00,
        rating: 4.2,
        orders: 754,
        desc: "High precision built-in GPS tracker module supporting over 100 dedicated sports active tracking variants.",
        imgName: "[Smartwatch Pic]"
    }
];


let currentCart = [];
let selectedCategory = 'all';
let currentLayout = 'list';


function switchView(viewId) {
    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active-view');
    });
    document.getElementById(viewId).classList.add('active-view');
    window.scrollTo(0, 0);
}


function loadCategoryView(categoryKey) {
    selectedCategory = categoryKey;
    switchView('listing-view');


    document.querySelectorAll('.brand-filter').forEach(cb => cb.checked = false);

    renderProductsList(productsDatabase.filter(p => p.category === categoryKey));
}


function renderProductsList(productsArray) {
    const renderZone = document.getElementById('products-render-grid');
    const itemsCountText = document.getElementById('items-count-text');

    renderZone.innerHTML = "";
    itemsCountText.innerText = productsArray.length;

    if (productsArray.length === 0) {
        renderZone.innerHTML = `<h3 style="padding:40px; text-align:center; color:var(--gray-text);">No matching premium items found in this tier.</h3>`;
        return;
    }

    productsArray.forEach(prod => {
        const card = document.createElement('div');
        card.className = "product-card";
        card.setAttribute('onclick', `openProductDetails(${prod.id})`);

        card.innerHTML = `
            <div class="product-img">
                <span>${prod.imgName}</span>
            </div>
            <div class="product-details">
                <h4 style="color:var(--dark-text); font-weight:500;">${prod.title}</h4>
                <div style="margin:5px 0;">
                    <span class="product-price">$${prod.price.toFixed(2)}</span>
                    <span class="product-old-price">$${prod.oldPrice.toFixed(2)}</span>
                </div>
                <div class="rating-stars">★ ★ ★ ★ ☆ <span style="color:var(--gray-text); font-size:12px;">(${prod.orders} orders)</span></div>
                <p style="color:var(--gray-text); font-size:14px; margin-top:8px;" class="prod-desc-line">${prod.desc}</p>
                <span class="badge-blue" style="margin-top:10px;">Free Shipping</span>
            </div>
            <button class="fav-btn" onclick="event.stopPropagation();">❤️</button>
        `;
        renderZone.appendChild(card);
    });
}


function toggleLayout(type) {
    currentLayout = type;
    const container = document.getElementById('products-render-grid');
    const gridBtn = document.getElementById('grid-btn');
    const listBtn = document.getElementById('list-btn');

    if (type === 'grid') {
        container.className = "products-container grid-view";
        gridBtn.classList.add('active-view-btn');
        listBtn.classList.remove('active-view-btn');
    } else {
        container.className = "products-container list-view";
        listBtn.classList.add('active-view-btn');
        gridBtn.classList.remove('active-view-btn');
    }
}


function applyFilters() {
    let checkedBrands = [];
    document.querySelectorAll('.brand-filter:checked').forEach(cb => {
        checkedBrands.push(cb.value);
    });

    let filtered = productsDatabase;
    if (selectedCategory !== 'all') {
        filtered = filtered.filter(p => p.category === selectedCategory);
    }
    if (checkedBrands.length > 0) {
        filtered = filtered.filter(p => checkedBrands.includes(p.brand));
    }
    renderProductsList(filtered);
}


function openProductDetails(productId) {
    const product = productsDatabase.find(p => p.id === productId);
    if (!product) return;

    switchView('detail-view');
    const zone = document.getElementById('detail-loading-zone');

    zone.innerHTML = `
        <div class="detail-images">
            <div class="detail-main-img">
                <span>${product.imgName}</span>
            </div>
        </div>
        <div class="detail-info">
            <span class="stock-status">✓ In stock</span>
            <h2>${product.title}</h2>
            <div class="rating-stars">★ ★ ★ ★ 🌟 <span style="color:var(--gray-text);">32 reviews | ${product.orders} sold</span></div>
            
            <div class="price-tag-box">
                <div><h3 style="color:red;">$${product.price.toFixed(2)}</h3><p style="font-size:12px;color:var(--gray-text);">50-100 pcs</p></div>
                <div><h3>$${(product.price * 0.95).toFixed(2)}</h3><p style="font-size:12px;color:var(--gray-text);">100-500 pcs</p></div>
                <div><h3>$${(product.price * 0.90).toFixed(2)}</h3><p style="font-size:12px;color:var(--gray-text);">700+ pcs</p></div>
            </div>

            <p style="line-height:1.6; color:#444;">${product.desc}</p>
            
            <div style="display:flex; gap:15px; margin-top:20px;">
                <button class="btn-blue" style="width:180px; padding:12px; font-weight:bold;" onclick="addToCart(${product.id})">Send inquiry / Add</button>
                <button class="btn-white" style="width:180px; padding:12px;" onclick="switchView('home-view')">Back to Home</button>
            </div>
        </div>
    `;
}


function addToCart(id) {
    const product = productsDatabase.find(p => p.id === id);
    const existing = currentCart.find(item => item.product.id === id);

    if (existing) {
        existing.qty++;
    } else {
        currentCart.push({ product, qty: 1 });
    }
    updateCartUI();
    alert(`${product.title} has been added to your cart.`);
}

function updateCartUI() {
    // Update structural Badges
    const totalQty = currentCart.reduce((acc, item) => acc + item.qty, 0);
    document.getElementById('cart-counter-badge').innerText = totalQty;
    document.getElementById('cart-items-qty').innerText = `${totalQty} items`;

    const zone = document.getElementById('cart-items-render-zone');
    zone.innerHTML = "";

    if (currentCart.length === 0) {
        zone.innerHTML = `<p style="padding:30px; text-align:center; color:var(--gray-text);">Your premium cart structure is empty.</p>`;
        calculateBill(0);
        return;
    }

    let subtotal = 0;
    currentCart.forEach((item, index) => {
        subtotal += item.product.price * item.qty;
        const row = document.createElement('div');
        row.className = "cart-item";
        row.innerHTML = `
            <div class="img-placeholder" style="width:70px; height:70px;">${item.product.imgName}</div>
            <div>
                <h4>${item.product.title}</h4>
                <p style="font-size:13px; color:var(--gray-text); margin-top:3px;">Brand: ${item.product.brand} | Qty: ${item.qty}</p>
                <button class="btn-white" style="width:fit-content; padding:2px 8px; font-size:12px; margin-top:5px; color:red;" onclick="removeCartItem(${index})">Remove</button>
            </div>
            <div style="font-weight:bold; font-size:16px;">$${(item.product.price * item.qty).toFixed(2)}</div>
        `;
        zone.appendChild(row);
    });

    calculateBill(subtotal);
}

function removeCartItem(index) {
    currentCart.splice(index, 1);
    updateCartUI();
}

function calculateBill(subtotal) {
    const discount = subtotal > 500 ? subtotal * 0.05 : 0; 
    const fixedTax = subtotal > 0 ? 14.00 : 0;
    const finalTotal = subtotal - discount + fixedTax;

    document.getElementById('cart-subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-discount').innerText = `-$${discount.toFixed(2)}`;
    document.getElementById('cart-total').innerText = `$${finalTotal.toFixed(2)}`;
}

function initOffersCountdown() {
    const dealsZone = document.getElementById('deals-loading-zone');
    if (!dealsZone) return;

    dealsZone.innerHTML = "";
    productsDatabase.slice(0, 5).forEach(p => {
        dealsZone.innerHTML += `
            <div class="deal-item" onclick="openProductDetails(${p.id})">
                <div class="img-placeholder">${p.imgName}</div>
                <p style="font-size:14px; font-weight:500;">${p.brand}</p>
                <span class="discount-badge">-20%</span>
            </div>
        `;
    });

    let seconds = 56, minutes = 34, hours = 13, days = 4;
    setInterval(() => {
        if (seconds > 0) seconds--;
        else {
            seconds = 59;
            if (minutes > 0) minutes--;
            else {
                minutes = 59;
                if (hours > 0) hours--;
                else { hours = 23; if (days > 0) days--; }
            }
        }
        if (document.getElementById('days')) {
            document.getElementById('days').innerText = days < 10 ? '0' + days : days;
            document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
            document.getElementById('mins').innerText = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById('secs').innerText = seconds < 10 ? '0' + seconds : seconds;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    initOffersCountdown();
    updateCartUI();
});





const dealsData = [
    { brand: "Canon", discount: "-20%", image: "camera.png" },
    { brand: "GoPro", discount: "-20%", image: "gopro.png" },
    { brand: "Apple", discount: "-20%", image: "apple.png" },
    { brand: "Samsung", discount: "-20%", image: "smartphone.png" },
    { brand: "Smart Watch", discount: "-20%", image: "smartwatch.png" }
];

function renderDeals() {
    const loadingZone = document.getElementById('deals-loading-zone');
    if (!loadingZone) return;

    loadingZone.innerHTML = ""; 
    dealsData.forEach(deal => {
        const dealCardHTML = `
            <div class="deal-item-card" data-brand="${deal.brand}">
                <div class="deal-img-wrapper">
                    <img src="${deal.image}" alt="${deal.brand}">
                </div>
                <span class="deal-brand-title">${deal.brand}</span>
                <div class="deal-discount-badge">${deal.discount}</div>
            </div>
        `;
        loadingZone.innerHTML += dealCardHTML;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderDeals();
});






if (typeof productsDatabase !== 'undefined') {
    productsDatabase[0].imgName = "camera.png";      // Canon
    productsDatabase[1].imgName = "gopro.png";       // GoPro
    productsDatabase[2].imgName = "apple.png";       // iPhone 12 Pro Max
    productsDatabase[3].imgName = "smartphone.png";  // Samsung
    productsDatabase[4].imgName = "smartwatch.png";  // Xiaomi

    const newItems = [
        {
            id: 6,
            title: "Apple MacBook Pro 14\" - M3 Chip Premium Edition",
            category: "electronics",
            brand: "Apple",
            price: 1999.00,
            oldPrice: 2199.00,
            rating: 5.0,
            orders: 85,
            desc: "Supercharged by M3 chip. Stunning Liquid Retina XDR display with ProMotion and advanced minimalist thermal architecture.",
            imgName: "apple.png" 
        },
        {
            id: 7,
            title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
            category: "electronics",
            brand: "Sony",
            price: 398.00,
            oldPrice: 449.00,
            rating: 4.8,
            orders: 520,
            desc: "Industry-leading noise cancellation, magnificent sound engineering with dual processors, and ultra-comfortable luxury design.",
            imgName: "headphone.png" 
        },
        {
            id: 8,
            title: "Logitech G Pro X Superlight Wireless Gaming Headset",
            category: "electronics",
            brand: "Logitech",
            price: 149.00,
            oldPrice: 179.00,
            rating: 4.7,
            orders: 310,
            desc: "Pro-grade wireless performance with precision audio monitoring, Blue VO!CE microphone technology, and lightweight structure.",
            imgName: "headset.png" 
        }
    ];

    newItems.forEach(item => {
        if (!productsDatabase.some(p => p.id === item.id)) {
            productsDatabase.push(item);
        }
    });
}

const originalRenderProductsList = renderProductsList;
renderProductsList = function (productsArray) {
    originalRenderProductsList(productsArray);

    document.querySelectorAll('.product-card').forEach((card) => {
        const div = card.querySelector('.product-img');
        const titleText = card.querySelector('h4') ? card.querySelector('h4').innerText : '';
        const product = productsDatabase.find(p => p.title === titleText);

        if (div && product) {
            div.style.backgroundImage = `url('${product.imgName}')`;
            div.style.backgroundRepeat = 'no-repeat';
            div.style.backgroundPosition = 'center';
            div.style.backgroundSize = 'contain';
            div.innerHTML = ''; 
        }
    });
};

const originalOpenProductDetails = openProductDetails;
openProductDetails = function (productId) {
    originalOpenProductDetails(productId);

    const product = productsDatabase.find(p => p.id === productId);
    if (product) {
        const detailImg = document.querySelector('.detail-main-img');
        if (detailImg) {
            detailImg.style.backgroundImage = `url('${product.imgName}')`;
            detailImg.style.backgroundRepeat = 'no-repeat';
            detailImg.style.backgroundPosition = 'center';
            detailImg.style.backgroundSize = 'contain';
            detailImg.innerHTML = ''; 
        }
    }
};