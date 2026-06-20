const PRODUCTS_DATABASE = [

    { id: 1, category: "Mobiles", title: "iPhone 15 Pro Max Silicon Alpha", price: 1199.00, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80", desc: "Grade A aerospace configuration framework layer.", rating: 5 },
    { id: 2, category: "Mobiles", title: "Samsung Galaxy Ultra S24 Obsidian", price: 1299.00, img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=300&q=80", desc: "Dynamic AMOLED crystal layout density array.", rating: 5 },
    { id: 3, category: "Mobiles", title: "Google Pixel 8 Pro Pure Porcelain", price: 999.00, img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80", desc: "AI compute unified processing platform system.", rating: 4 },
    { id: 4, category: "Mobiles", title: "OnePlus 12 Fluid Emerald Matrix", price: 799.00, img: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&w=300&q=80", desc: "Sustained high frequency charging circuitry layout.", rating: 4 },
    { id: 5, category: "Mobiles", title: "Xiaomi 14 Ultra Dark Titanium Leic", price: 1099.00, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80", desc: "Quad-sensor focal setup arrays optimized.", rating: 5 },
    { id: 6, category: "Mobiles", title: "Sony Xperia 1 VI Cinema Ratio", price: 1399.00, img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=300&q=80", desc: "Native 4K display driver panel matrix.", rating: 5 },
    { id: 7, category: "Mobiles", title: "Asus ROG Phone 8 Ultimate Gaming", price: 1199.00, img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80", desc: "Active cooling logic integration controller.", rating: 5 },
    { id: 8, category: "Mobiles", title: "Nothing Phone (2) Glyph Lumina", price: 699.00, img: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&w=300&q=80", desc: "Symmetric structural glass interface transparency.", rating: 4 },
    { id: 9, category: "Mobiles", title: "Huawei Pura 70 Ultra Variable", price: 1249.00, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80", desc: "Retractable mechanical optical housing lens.", rating: 5 },
    { id: 10, category: "Mobiles", title: "iPhone SE Luxury Custom Leather", price: 549.00, img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=300&q=80", desc: "Compact form element architecture deployment.", rating: 4 },


    { id: 11, category: "Electronics", title: "MacBook Pro 16 M3 Max Slate", price: 3499.00, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80", desc: "Liquid Retina XDR high dynamic range control panel.", rating: 5 },
    { id: 12, category: "Electronics", title: "Dell XPS 13 Seamless Glass Edition", price: 1899.00, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=300&q=80", desc: "InfiniteEdge presentation grid array.", rating: 4 },
    { id: 13, category: "Electronics", title: "Razer Blade 16 Mercury Edition", price: 2999.00, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=300&q=80", desc: "Dual-mode mini-LED operational display module.", rating: 5 },
    { id: 14, category: "Electronics", title: "HP Spectre x360 Dynamic Node", price: 1499.00, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80", desc: "OLED touch sensor grid convertible framework.", rating: 4 },
    { id: 15, category: "Electronics", title: "Lenovo ThinkPad X1 Carbon Elite", price: 2199.00, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=300&q=80", desc: "Reinforced weave structural carbon composite outer shell.", rating: 5 },
    { id: 16, category: "Electronics", title: "ASUS Zenbook Duo Dual Horizon", price: 2099.00, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=300&q=80", desc: "Twin expansion interactive display workspace grids.", rating: 5 },
    { id: 17, category: "Electronics", title: "Microsoft Surface Laptop Studio 2", price: 2399.00, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80", desc: "Articulated dynamic woven hinge mechanism.", rating: 4 },
    { id: 18, category: "Electronics", title: "Acer Predator Helios Spatial 3D", price: 3199.00, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=300&q=80", desc: "Glasses-free stereoscopic 3D tracking sensors.", rating: 5 },
    { id: 19, category: "Electronics", title: "LG Gram SuperSlim Featherweight", price: 1699.00, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=300&q=80", desc: "Magnesium alloy processing structure optimization.", rating: 4 },
    { id: 20, category: "Electronics", title: "Samsung Galaxy Book4 Ultra Premium", price: 2599.00, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80", desc: "Ecosystem dynamic connectivity core link array.", rating: 5 },


    { id: 21, category: "Watches", title: "VÉLOCE Chrono Titanium Smartwatch", price: 899.00, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80", desc: "Sapphire glass surface with micro bio-sensors built in.", rating: 5 },
    { id: 22, category: "Watches", title: "Apple Watch Ultra 2 Ocean Black", price: 799.00, img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=300&q=80", desc: "Dual frequency localized navigation arrays.", rating: 5 },
    { id: 23, category: "Watches", title: "Garmin MARQ Athlete Luxury Gen 2", price: 1899.00, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80", desc: "Grade-5 high density brushed titanium element ring.", rating: 5 },
    { id: 24, category: "Watches", title: "Samsung Galaxy Watch Ultra Carbon", price: 649.00, img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=300&q=80", desc: "BioActive metric monitoring sensor grid base.", rating: 4 },
    { id: 25, category: "Watches", title: "TAG Heuer Connected Calibre E4", price: 2350.00, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80", desc: "Luxury horology digital display interface profile.", rating: 5 },
    { id: 26, category: "Watches", title: "Montblanc Summit 3 Heritage Node", price: 1290.00, img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=300&q=80", desc: "Handcrafted calfskin interface band system tracking.", rating: 4 },
    { id: 27, category: "Watches", title: "Huawei Watch Ultimate Expedition", price: 849.00, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80", desc: "Liquid metal amorphous alloy protective case grid.", rating: 5 },
    { id: 28, category: "Watches", title: "Tissot T-Touch Connect Solar Platinum", price: 1100.00, img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=300&q=80", desc: "Photovoltaic infinite charge processing surface layout.", rating: 4 },
    { id: 29, category: "Watches", title: "Withings ScanWatch Nova Diver", price: 599.00, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80", desc: "Clinical grade medical electrocardiogram diagnostic node.", rating: 4 },
    { id: 30, category: "Watches", title: "Casio G-SHOCK MR-G Premium Titan", price: 3200.00, img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=300&q=80", desc: "Traditional Sallaz polishing surface finishing architecture.", rating: 5 },


    { id: 31, category: "Accessories", title: "Minimalist Full-Frame Camera Core", price: 2499.00, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80", desc: "Mirrorless architecture processing core array module.", rating: 5 }
];

let LOCAL_CART = [];

document.addEventListener("DOMContentLoaded", () => {
    initializeApplicationCore();
    renderHomepageBlocks();
});

function initializeApplicationCore() {
    // Theme Switch Processing Engine Logic
    const toggleBtn = document.getElementById("themeToggle");
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const isDark = document.body.classList.contains("dark-theme");
        toggleBtn.querySelector("i").className = isDark ? "fas fa-moon" : "fas fa-sun";
    });

    // Real-Time Search Handler Setup
    document.getElementById("globalSearch").addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length > 1) {
            const filtered = PRODUCTS_DATABASE.filter(p => p.title.toLowerCase().includes(query));
            displayCatalog(filtered, `Search Results for: "${query}"`);
            navigateTo('shop');
        }
    });


    setInterval(() => {
        const targetSecs = document.getElementById("secs");
        if (targetSecs) {
            let current = parseInt(targetSecs.innerText);
            current = current <= 0 ? 59 : current - 1;
            targetSecs.innerText = current.toString().padStart(2, '0');
        }
    }, 1000);
}


function navigateTo(targetViewId) {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const standardSections = document.querySelectorAll(".view-section");
    standardSections.forEach(sec => {
        sec.classList.remove("active-view");
        setTimeout(() => sec.style.display = "none", 400);
    });

    const destination = document.getElementById(`${targetViewId}-view`);
    if (destination) {
        setTimeout(() => {
            destination.style.display = "block";
            setTimeout(() => destination.classList.add("active-view"), 50);
        }, 400);
    }


    document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
}

function renderHomepageBlocks() {
    // 1. Render Deals Row Grid (Screenshot 2 Style Reference)
    const dealsTarget = document.getElementById("deals-grid-target");
    const sampleDeals = PRODUCTS_DATABASE.slice(0, 5);
    if (dealsTarget) {
        dealsTarget.innerHTML = sampleDeals.map(product => `
            <div class="deal-product-item" onclick="viewProductDetails(${product.id})">
                <img src="${product.img}" alt="${product.title}">
                <h4>${product.title.split(' ')[0]}</h4>
                <div class="discount-pill">-20%</div>
            </div>
        `).join('');
    }

    const outdoorTarget = document.getElementById("outdoor-grid-target");
    const outdoorSample = PRODUCTS_DATABASE.slice(20, 24);
    if (outdoorTarget) {
        outdoorTarget.innerHTML = outdoorSample.map(product => `
            <div class="sub-grid-cell" onclick="viewProductDetails(${product.id})">
                <div>
                    <h4>${product.title.split(' ').slice(0, 2).join(' ')}</h4>
                    <p>From USD $${(product.price * 0.8).toFixed(0)}</p>
                </div>
                <img src="${product.img}" alt="${product.title}">
            </div>
        `).join('');
    }

    const elecTarget = document.getElementById("electronics-grid-target");
    const elecSample = PRODUCTS_DATABASE.slice(10, 14);
    if (elecTarget) {
        elecTarget.innerHTML = elecSample.map(product => `
            <div class="sub-grid-cell" onclick="viewProductDetails(${product.id})">
                <div>
                    <h4>${product.title.split(' ').slice(0, 2).join(' ')}</h4>
                    <p>From USD $${product.price}</p>
                </div>
                <img src="${product.img}" alt="${product.title}">
            </div>
        `).join('');
    }

    const recTarget = document.getElementById("recommended-grid-target");
    if (recTarget) {
        recTarget.innerHTML = PRODUCTS_DATABASE.slice(0, 10).map(product => `
            <div class="product-showcase-card">
                <img src="${product.img}" alt="${product.title}" onclick="viewProductDetails(${product.id})">
                <div>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-title" onclick="viewProductDetails(${product.id})">${product.title}</div>
                    <div class="product-rating">${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}</div>
                </div>
                <button class="btn btn-primary btn-sm" style="margin-top:12px;" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `).join('');
    }
}


function filterCategory(catName) {
    const subset = PRODUCTS_DATABASE.filter(p => p.category === catName || catName === "Electronics");
    displayCatalog(subset, `${catName} Premium Range Collection`);
    navigateTo('shop');
}

function displayCatalog(productsArray, contextTitle) {
    document.getElementById("current-category-title").innerText = contextTitle;
    const catalogGrid = document.getElementById("shop-catalog-target");

    if (productsArray.length === 0) {
        catalogGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 60px; color: var(--text-secondary);">No premium matrix items match this indexing profile.</p>`;
        return;
    }

    catalogGrid.innerHTML = productsArray.map(product => `
        <div class="product-showcase-card">
            <img src="${product.img}" alt="${product.title}" onclick="viewProductDetails(${product.id})">
            <div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-title" onclick="viewProductDetails(${product.id})">${product.title}</div>
                <p style="font-size:0.75rem; color: var(--text-secondary); margin-bottom: 8px;">${product.desc}</p>
                <div class="product-rating">${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}</div>
            </div>
            <button class="btn btn-primary btn-sm" style="margin-top:12px;" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}


function viewProductDetails(productId) {
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (!product) return;

    const targetContainer = document.getElementById("details-view-target");
    targetContainer.innerHTML = `
        <div class="detail-gallery-pane">
            <img src="${product.img}" alt="${product.title}">
        </div>
        <div class="detail-info-pane">
            <h1>${product.title}</h1>
            <div class="product-rating">${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)} (Verified Executive Review)</div>
            <div class="detail-meta-row">
                <span class="product-price">$${product.productPrice || product.price.toFixed(2)}</span>
                <span style="color: #2ecc71; font-weight:600; font-size:0.9rem;"><i class="fas fa-shield-check"></i> In Stock & Inspected</span>
            </div>
            <p style="line-height: 1.6; color: var(--text-secondary); margin-bottom: 24px;">${product.desc} Engineered to absolute international architectural requirements. Includes high end global coverage warranties.</p>
            
            <table class="specs-table">
                <tr><td>Model Array Reference</td><td>VL-${product.id}90-2026</td></tr>
                <tr><td>Structural Build Material</td><td>VIP Anodized Composites</td></tr>
                <tr><td>Global Shipping Grade</td><td>Priority Air Carrier Class</td></tr>
            </table>

            <div style="display:flex; gap: 16px; margin-top:32px;">
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Strategic Cart</button>
                <button class="btn btn-luxury" onclick="directBuyNow(${product.id})">Buy Item Now</button>
            </div>
        </div>
    `;
    navigateTo('details');
}



function addToCart(productId) {
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (!product) return;

    const existingInstance = LOCAL_CART.find(item => item.product.id === productId);
    if (existingInstance) {
        existingInstance.quantity += 1;
    } else {
        LOCAL_CART.push({ product, quantity: 1 });
    }
    synchronizeCartState();
}

function updateQuantity(productId, delta) {
    const target = LOCAL_CART.find(item => item.product.id === productId);
    if (!target) return;

    target.quantity += delta;
    if (target.quantity <= 0) {
        LOCAL_CART = LOCAL_CART.filter(item => item.product.id !== productId);
    }
    synchronizeCartState();
}

function synchronizeCartState() {
    // Synchronize Counter Badge Elements
    const totalCount = LOCAL_CART.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").innerText = totalCount;

    // Render Cart Listing Panels
    const listTarget = document.getElementById("cart-items-target");
    const summaryTarget = document.getElementById("cart-summary-target");

    if (!listTarget) return;

    if (LOCAL_CART.length === 0) {
        listTarget.innerHTML = `<p style="color: var(--text-secondary); padding: 40px 0;">Your premium tracking allocation index is currently empty.</p>`;
        if (summaryTarget) summaryTarget.innerHTML = `<p>Awaiting structural item deployment parameters.</p>`;
        return;
    }

    listTarget.innerHTML = LOCAL_CART.map(item => `
        <div class="cart-item-row">
            <div style="display:flex; align-items:center; gap:20px;">
                <img src="${item.product.img}" alt="${item.product.title}">
                <div>
                    <h4 style="font-size:1rem; font-weight:600;">${item.product.title}</h4>
                    <p style="color:var(--text-secondary); font-size:0.85rem;">Unit Configuration Base: $${item.product.price.toFixed(2)}</p>
                </div>
            </div>
            <div style="display:flex; align-items:center; gap:24px;">
                <div style="display:flex; align-items:center; gap:12px; background: var(--bg-surface-elevated); padding:6px 12px; border-radius:6px;">
                    <button onclick="updateQuantity(${item.product.id}, -1)" style="cursor:pointer;"><i class="fas fa-minus"></i></button>
                    <span style="font-weight:bold; font-size:1rem;">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.product.id}, 1)" style="cursor:pointer;"><i class="fas fa-plus"></i></button>
                </div>
                <span style="font-weight:700; font-size:1.1rem; min-width:80px; text-align:right;">$${(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
        </div>
    `).join('');

    const calculatedGrossTotal = LOCAL_CART.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    summaryTarget.innerHTML = `
        <h3 style="margin-bottom:20px; font-size:1.2rem; text-transform:uppercase;">Allocation Invoice Summary</h3>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; color:var(--text-secondary);"><span>Base Value Total</span><span>$${calculatedGrossTotal.toFixed(2)}</span></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; color:var(--text-secondary);"><span>VIP Logistics Freight</span><span style="color:#2ecc71;">FREE METRIC</span></div>
        <hr style="border:none; border-top:1px solid var(--border-color); margin:16px 0;">
        <div style="display:flex; justify-content:space-between; margin-bottom:24px; font-weight:bold; font-size:1.2rem;"><span>Gross Net Balance</span><span>$${calculatedGrossTotal.toFixed(2)}</span></div>
        <button class="btn btn-luxury btn-block" style="width:100%;" onclick="navigateTo('checkout')">Proceed to Checkout Node</button>
    `;


    const chkSummary = document.getElementById("checkout-summary-target");
    if (chkSummary) {
        chkSummary.innerHTML = `
            <h3>Order Configuration</h3>
            <div style="margin:20px 0;">
                ${LOCAL_CART.map(item => `<p style="font-size:0.9rem; margin-bottom:8px; display:flex; justify-content:between;"><span>${item.product.title.slice(0, 20)}... (x${item.quantity})</span> <strong>$${(item.product.price * item.quantity).toFixed(2)}</strong></p>`).join('')}
            </div>
            <hr style="border:none; border-top:1px solid var(--border-color); margin:16px 0;">
            <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:1.1rem;"><span>Required Authorized Value</span><span>$${calculatedGrossTotal.toFixed(2)}</span></div>
        `;
    }
}

function directBuyNow(productId) {
    addToCart(productId);
    navigateTo('cart');
}


function handleInquiry(event) {
    event.preventDefault();
    alert("Authorization confirmed. Your global commercial quote request parameter sets have been transmitted to matching industrial suppliers.");
    event.target.reset();
}

function processOrder(event) {
    event.preventDefault();
    alert("Transaction authorized and encrypted securely via token gateway. Processing high priority luxury fulfillment protocols.");
    LOCAL_CART = [];
    synchronizeCartState();
    navigateTo('home');
}


displayCatalog = function (productsArray, contextTitle) {
    const titleElement = document.getElementById("current-category-title");
    if (titleElement) titleElement.innerText = contextTitle;

    const catalogGrid = document.getElementById("shop-catalog-target");
    if (!catalogGrid) return;

    if (productsArray.length === 0) {
        catalogGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 60px; color: var(--text-secondary);">No premium matrix items match this indexing profile.</p>`;
        return;
    }

    // New structural layout that maps perfectly to modern grid
    catalogGrid.innerHTML = productsArray.map(product => `
        <div class="product-showcase-card final-grid-card">
            <div class="final-card-img-wrapper" onclick="viewProductDetails(${product.id})">
                <img src="${product.img}" alt="${product.title}">
            </div>
            <div class="final-card-info">
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-title" onclick="viewProductDetails(${product.id})">${product.title}</div>
                <p class="final-card-desc">${product.desc}</p>
                <div class="product-rating">${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}</div>
            </div>
            <button class="btn btn-primary btn-sm final-card-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
};


function filterCategory(catName) {
    // Agar user "Laptops" click kare to database se "Electronics" dhoondo
    const searchCat = (catName === "Laptops") ? "Electronics" : catName;
    const subset = PRODUCTS_DATABASE.filter(p => p.category === searchCat);
    displayCatalog(subset, `${catName} Premium Range Collection`);
    navigateTo('shop');
}


PRODUCTS_DATABASE[31] = { id: 32, category: "Headphones", title: "Sony WH-1000XM5 ANC Noir", price: 399.00, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80", desc: "Industry leading noise cancellation acoustic processor.", rating: 5 };
PRODUCTS_DATABASE[32] = { id: 33, category: "Headphones", title: "Bose QuietComfort Ultra Studio", price: 429.00, img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=300&q=80", desc: "Spatial audio calibration immersion grid framework.", rating: 5 };
PRODUCTS_DATABASE[33] = { id: 34, category: "Headphones", title: "Apple AirPods Max Space Gray", price: 549.00, img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=300&q=80", desc: "High-fidelity custom dynamic driver system tracking.", rating: 4 };

filterCategory = function (catName) {
    let subset = [];

    if (catName === "Laptops") {
        subset = PRODUCTS_DATABASE.filter(p =>
            p && p.category === "Electronics" &&
            (p.title.includes("MacBook") || p.title.includes("Dell") || p.title.includes("Razer") ||
                p.title.includes("HP") || p.title.includes("ThinkPad") || p.title.includes("ASUS") ||
                p.title.includes("Surface") || p.title.includes("Acer") || p.title.includes("LG") ||
                p.title.includes("Samsung"))
        );
    }
    else {
        subset = PRODUCTS_DATABASE.filter(p => p && p.category === catName);
    }


    const titleElement = document.getElementById("current-category-title");
    if (titleElement) titleElement.innerText = `${catName} Premium Range Collection`;

    displayCatalog(subset, `${catName} Premium Range Collection`);
    navigateTo('shop');
};



displayCatalog = function (productsArray, contextTitle) {
    const titleElement = document.getElementById("current-category-title");
    if (titleElement) titleElement.innerText = contextTitle;

    const catalogGrid = document.getElementById("shop-catalog-target");
    if (!catalogGrid) return;

    if (productsArray.length === 0) {
        catalogGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 60px; color: var(--text-secondary);">No premium matrix items match this indexing profile.</p>`;
        return;
    }

    catalogGrid.innerHTML = productsArray.map(product => `
        <div class="shop-grid-item-card">
            <div class="shop-grid-img-holder" onclick="viewProductDetails(${product.id})">
                <img src="${product.img}" alt="${product.title}">
            </div>
            <div class="shop-grid-info-holder">
                <div class="shop-grid-price">$${product.price.toFixed(2)}</div>
                <div class="shop-grid-title" onclick="viewProductDetails(${product.id})">${product.title}</div>
                <p class="shop-grid-desc">${product.desc}</p>
                <div class="shop-grid-rating">${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}</div>
            </div>
            <button class="btn btn-primary btn-sm shop-grid-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    `).join('');
};

const originalSynchronizeCartState = synchronizeCartState;
synchronizeCartState = function () {
    // Run initial state to populate badge icons
    if (typeof originalSynchronizeCartState === 'function') {
        originalSynchronizeCartState();
    }

    const summaryTarget = document.getElementById("cart-summary-target");
    if (!summaryTarget || LOCAL_CART.length === 0) return;

    const calculatedGrossTotal = LOCAL_CART.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    summaryTarget.innerHTML = `
        <h3 class="invoice-box-heading">Allocation Invoice Summary</h3>
        <div class="invoice-billing-row">
            <span class="invoice-label">Base Value Total</span>
            <span class="invoice-value">$${calculatedGrossTotal.toFixed(2)}</span>
        </div>
        <div class="invoice-billing-row">
            <span class="invoice-label">VIP Logistics Freight</span>
            <span class="invoice-value speed-highlight">FREE METRIC</span>
        </div>
        <hr class="invoice-divider">
        <div class="invoice-billing-row invoice-grand-total">
            <span class="invoice-label">Gross Net Balance</span>
            <span class="invoice-value">$${calculatedGrossTotal.toFixed(2)}</span>
        </div>
        <button class="btn btn-luxury btn-block invoice-action-btn" onclick="navigateTo('checkout')">Proceed to Checkout Node</button>
    `;
};



displayCatalog = function (productsArray, contextTitle) {
    const titleElement = document.getElementById("current-category-title");
    if (titleElement) titleElement.innerText = contextTitle;

    const catalogGrid = document.getElementById("shop-catalog-target");
    if (!catalogGrid) return;

    if (productsArray.length === 0) {
        catalogGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 60px; color: var(--text-secondary);">No premium matrix items match this indexing profile.</p>`;
        return;
    }

    catalogGrid.innerHTML = productsArray.map(product => `
        <div class="shop-grid-item-card">
            <div class="shop-grid-img-holder" onclick="viewProductDetails(${product.id})">
                <img src="${product.img}" alt="${product.title}">
            </div>
            <div class="shop-grid-info-holder">
                <div class="shop-grid-price">$${product.price.toFixed(2)}</div>
                <div class="shop-grid-title" onclick="viewProductDetails(${product.id})">${product.title}</div>
                <p class="shop-grid-desc">${product.desc}</p>
                <div class="shop-grid-rating">${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}</div>
            </div>
            <button class="btn btn-primary btn-sm shop-grid-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    `).join('');
};



(function () {
    function enforceMinimalTopSpacing() {
        const components = document.querySelectorAll('aside, .category-sidebar, #main-slider-container, [class*="promo-sidebar"]');
        components.forEach(item => {
            if (item) {
                item.style.setProperty('margin-top', '8px', 'important');
            }
        });
    }

    enforceMinimalTopSpacing();

    document.addEventListener('DOMContentLoaded', enforceMinimalTopSpacing);
    window.addEventListener('load', enforceMinimalTopSpacing);
    document.addEventListener('click', () => setTimeout(enforceMinimalTopSpacing, 60));
})();




/* ==========================================================================
   DYNAMIC RUNTIME MOBILE DOM ALIGNMENT PATCH
   ========================================================================== */
(function () {
    function enforceGlobalResponsiveLayout() {
        if (window.innerWidth > 991) return;

        // Force convert complex layout grids to structural block layout columns
        const gridRows = document.querySelectorAll('.row, [class*="hero-main-card"], main section .container > div');
        gridRows.forEach(row => {
            row.style.setProperty('display', 'flex', 'important');
            row.style.setProperty('flex-direction', 'column', 'important');
            row.style.setProperty('width', '100%', 'important');
            row.style.setProperty('margin', '0', 'important');
            row.style.setProperty('padding', '10px', 'important');
        });

        // Safe padding block parameters for inner side components
        const heroBlocks = document.querySelectorAll('aside, .category-sidebar, #main-slider-container, [class*="promo-sidebar"], [class*="right-stack"]');
        heroBlocks.forEach(item => {
            if (item) {
                item.style.setProperty('margin-top', '0px', 'important');
                item.style.setProperty('margin-bottom', '15px', 'important');
            }
        });
    }

    window.addEventListener('resize', enforceGlobalResponsiveLayout);
    document.addEventListener('DOMContentLoaded', enforceGlobalResponsiveLayout);
    window.addEventListener('load', enforceGlobalResponsiveLayout);

    // Interval check loop to maintain state alignment during page dynamic routing
    setInterval(enforceGlobalResponsiveLayout, 400);
})();


/* ==========================================================================
   DOM MATRIX SCREEN BOUNDS OVERRIDE ENGINE
   ========================================================================== */
(function () {
    function recalibrateMobileViewports() {
        if (window.innerWidth > 991) return;

        // Strip inline widths of bootstrap blocks that freeze elements inside flex chains
        const hardcodedContainers = document.querySelectorAll('.container, .row, main, footer, header, [style*="width"]');
        hardcodedContainers.forEach(el => {
            if (el && !el.classList.contains('shop-grid-item-card')) {
                // Skips individual item grids to protect catalog integrity
                const currentWidth = el.style.width;
                if (currentWidth && currentWidth !== '100%') {
                    el.style.setProperty('width', '100%', 'important');
                    el.style.setProperty('max-width', '100%', 'important');
                }
            }
        });

        // Enforce full horizontal layout across row block nodes
        const layoutRows = document.querySelectorAll('.row');
        layoutRows.forEach(row => {
            row.style.setProperty('display', 'flex', 'important');
            row.style.setProperty('flex-direction', 'column', 'important');
            row.style.setProperty('margin', '0', 'important');
        });
    }

    window.addEventListener('resize', recalibrateMobileViewports);
    document.addEventListener('DOMContentLoaded', recalibrateMobileViewports);
    window.addEventListener('load', recalibrateMobileViewports);

    // Constant loop engine to block framework script shifts
    setInterval(recalibrateMobileViewports, 350);
})();
