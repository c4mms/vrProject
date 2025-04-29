let products = [];

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
});
// Load products from JSON
async function loadProducts() {
  try {
    // Fetch the product data (assuming you have a 'products.json' file)
    const response = await fetch('products.json'); // Replace with your actual data source
    const data = await response.json();
    
    // Assign the fetched data to the products array
    products = data;

    renderProducts();// This renders the collections (woman, man, etc.)
    //if we are on a single product page
    if (document.querySelector('.product-detail')) {
      renderProductDetail();
    }
  } catch (error) {
    console.error('Error loading products:', error);
  }
}
// Render category pages
function renderProducts() {
  const path = window.location.pathname;

  if (document.getElementById("spring-products")) {
    const showAll = path.includes("collection2025.html");
    renderCategoryProducts("springCollection25", "spring-products", showAll);
  }

  if (document.getElementById("woman-products")) {
    renderCategoryProducts("woman", "woman-products");
  }

  if (document.getElementById("man-products")) {
    renderCategoryProducts("man", "man-products");
  }

  if (document.getElementById("bags-products")) {
    renderCategoryProducts("bags", "bags-products");
  }
}

function renderCategoryProducts(category, containerId, showAll = false) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Contenitore "${containerId}" non trovato.`);
    return;
  }


  let count = 0;
  for (const [id, product] of Object.entries(products)) {
    if (product.category === category) {
            if (!showAll && count >= 6) break; // Show only 6 unless showAll is true
      count++;

      const card = document.createElement("div");
      card.className = "product-card";

      const vrButton = product.vr ? `<button class="vr-button">Try in VR</button>` : "";

      card.innerHTML = `
        <a href="product.html?id=${id}" class="product-link">
          <div class="product-image" style="background-image: url('${product.image}')"></div>
          <div class="product-name">${product.name}</div>
          <div class="product-price">${product.price}</div>
        </a>
        <div class="product-buttons">
          <button class="heart-button" onclick="toggleHeart(this)">♡</button>
          ${vrButton}
        </div>
      `;

        container.appendChild(card);
    }
  }
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

  if (!productId || !products[productId]) return;

  const product = products[productId];

  const nameEl = document.getElementById("product-name");
  const priceEl = document.getElementById("product-price");
  const descEl = document.getElementById("product-description");
  const imgEl = document.getElementById("product-image");

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
