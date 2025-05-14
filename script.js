// Global object to store all loaded products
let products = {};

// Asynchronous function that initializes the page by loading product data
async function init() {
  try {
    // Fetch product data from JSON file
    const response = await fetch('products.json');
    if (!response.ok) throw new Error('Errore nel caricamento di products.json');
    
    // Parse JSON and assign it to the global products object
    products = await response.json();
   
    // Render products for category pages
    renderProducts();

     // If we are on a product detail page, render the product info
    if (document.querySelector('.product-detail')) {
      renderProductDetail();
    }

  } catch (error) {
    console.error('Errore nel caricamento dei prodotti:', error);
  }
}

// Start the app
init();

// Render product cards for each category on the corresponding pages
function renderProducts() {
  const path = window.location.pathname;
  
  // Show only 6 products if we are on the homepage
  const showAll = !(path === "/" || path.endsWith("index.html"));

  // Check which sections exist on the page and render products for each
  if (document.getElementById("spring-products")) {
    renderCategoryProducts("springCollection25", "spring-products", showAll);
  }

  if (document.getElementById("woman-products")) {
    renderCategoryProducts("woman", "woman-products", showAll);
  }

  if (document.getElementById("man-products")) {
    renderCategoryProducts("man", "man-products",showAll);
  }

  if (document.getElementById("bags-products")) {
    renderCategoryProducts("bags", "bags-products", showAll);
  }
}

// Render product cards for a given category
function renderCategoryProducts(category, containerId, showAll = true) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Contenitore "${containerId}" non trovato.`);
    return;
  }


  let count = 0;
  for (const [id, product] of Object.entries(products)) {
    // Limit to 6 products unless showAll is true
    if (product.category === category) {
            if (!showAll && count >= 6) break; // Show only 6 unless showAll is true
      count++;
      // Create card for each product
      const card = document.createElement("div");
      card.className = "product-card";


      // Set inner HTML for the card
      card.innerHTML = `
        <a href="product.html?id=${id}" class="product-link">
          <div class="product-image" style="background-image: url('${product.image}')"></div>
          <div class="product-name">${product.name}</div>
          <div class="product-price">${product.price}</div>
        </a>
        <div class="product-buttons">
          <button class="heart-button" onclick="toggleHeart(this)">♡</button>
        </div>
      `;
      
      // Add VR button only if applicable
      if (product.vr && product.glbPath) {
        const vrBtn = document.createElement("button");
        vrBtn.className = "vr-button";
        vrBtn.textContent = "Try in VR";
        vrBtn.addEventListener("click", () => startVR(product.glbPath));
        card.querySelector(".product-buttons").appendChild(vrBtn);
      }

        container.appendChild(card);
    }
  }
}

// Function to open VR viewer with the model URL
function startVR(glbPath) {
  const encoded = encodeURIComponent(glbPath);
  window.open(`vr/vr-clothesViewer.html?model=${encoded}`, '_blank');
}

// Toggle wishlist heart
function toggleHeart(button) {
  button.classList.toggle('hearted');
  button.textContent = button.classList.contains('hearted') ? '♥' : '♡';
}

// Render the product detail page
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  // Exit if product ID is invalid or not found
  if (!productId || !products[productId]) return;

  const product = products[productId];
  // Get DOM elements
  const nameEl = document.getElementById("product-name");
  const priceEl = document.getElementById("product-price");
  const descEl = document.getElementById("product-description");
  const imgEl = document.getElementById("product-image");

  // Fill product information
  if (nameEl) nameEl.textContent = product.name;
  if (priceEl) priceEl.textContent = product.price;
  if (descEl) descEl.textContent = product.description;
  if (imgEl) {
    imgEl.src = product.image;
    imgEl.alt = product.name;
  }

  const sizeButtonsContainer = document.querySelector(".size-buttons");
  const addToCartBtn = document.querySelector(".add-to-cart-btn");
  let selectedSize = null;
  
  // Handle size selection
  if (sizeButtonsContainer) {
    if (product.allSizes && product.availableSizes) {
      sizeButtonsContainer.innerHTML = '';

      product.allSizes.forEach(size => {
        const button = document.createElement('button');
        button.classList.add('size-btn');
        button.textContent = size;
        button.setAttribute('data-size', size);

        if (!product.availableSizes.includes(size)) {
          button.disabled = true;
        }
        // When a size is selected
        button.addEventListener('click', () => {
          document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
          button.classList.add('selected');
          selectedSize = size;

          if (addToCartBtn) addToCartBtn.disabled = false;
        });

        sizeButtonsContainer.appendChild(button);
      });

      if (addToCartBtn) addToCartBtn.disabled = true;
      sizeButtonsContainer.style.display = 'flex';
    } else {
      // If no sizes are needed
      sizeButtonsContainer.style.display = 'none';
      if (addToCartBtn) addToCartBtn.disabled = false;
    }
  }

  // Handle add to cart popup
   if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      if (selectedSize || sizeButtonsContainer.style.display === "none") {
        showPopup("Product added to cart!");
      }
    });
  }
// Render same collection products
  const sameCollectionContainer = document.getElementById("suggested-products");

  if (sameCollectionContainer) {
    const relatedProducts = Object.entries(products)
      .filter(([id, p]) => p.category === product.category && id !== productId)
      .slice(0, 3);

    relatedProducts.forEach(([id, relatedProduct]) => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <a href="product.html?id=${id}" class="product-link">
          <div class="product-image" style="background-image: url('${relatedProduct.image}')"></div>
          <div class="product-name">${relatedProduct.name}</div>
          <div class="product-price">${relatedProduct.price}</div>
        </a>
        <div class="product-buttons">
          <button class="heart-button" onclick="toggleHeart(this)">♡</button>
        </div>
      `;

      sameCollectionContainer.appendChild(card);
    });
  }
 
// Handle VR button on product detail page
const vrButton = document.getElementById("vr-button");
if (vrButton && product.glbPath) {
  vrButton.onclick = () => {
    window.open(`vr/welcome_scene.html?model=${encodeURIComponent(product.glbPath)}`, '_blank');
  };
}
else {
    // VR not supported: disable or alert
    vrButton.disabled = false; // keep it clickable
    vrButton.classList.add("disabled");
    vrButton.onclick = () => {
    alert("Sorry, we don’t have a 3D model for this product yet.");
      };
  }
}


// Show popup
function showPopup(message) {
  const popup = document.getElementById("popup");
  if (!popup) return;

  popup.textContent = message;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 2000);
}

// Smooth scroll to section (if used)
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
