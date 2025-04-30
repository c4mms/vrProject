let products = {
  "1": {
    "id": 1,
    "name": "DOWN JACKET",
    "price": "790€",
    "description": "Jacket is crafted from a technical down nylon with a garment-dyed finish. Detailed with a logo embroidery on the chest. Complete with a centre-front zipper closure. Cut to a fitted fit and below waist length. - Fitted fit - Below waist length - Acne Studios logo embroidery - Centre front zipper closure and snap button - Front and internal pockets - Model is 188 cm / 6'2 and wears a size 46 - Style ID: FN-MN-OUTW001135 - Shell: 100% Nylon, Lining: 100% Recycled nylon, Filling: 90% Recycled down, 10%  Recycled feathers",
    "image": "img/m1.jpg",
    "category": "man",
    "allSizes": ["XS", "S", "M", "L", "XL"],
    "availableSizes": ["XS", "M", "L"],
    "vr": true
  },
  "2":{
    "id": 2,
    "name": "ABITO LINEA SOHO MONOPETTO IN SAGLIA DI LANA",
    "price": "2100€",
    "description": "Sofisticato abito della linea Soho che coniuga i dettagli della tradizione sartoriale con tessuti ricercati e pregiati che sottolineano l'immagine contemporanea del capo.\nQuesto modello realizzato in saglia di lana vergine water repellent si compone di una giacca monopetto con revers a specchio e tasche a filetto, abbinate a un pantalone flat front dalla vestibilità confortevole.\nUna proposta dall'eleganza senza tempo, indispensabile nel guardaroba dell'uomo elegante.\nGiacca tess. principale: 100% lana vergine; giacca fodera principale: 100% cupro;\npantaloni tess. principale: 100% lana vergine; fodera ginocchiera pantaloni: 63% acetato, 37% viscosa.\n- Abito Linea Soho\n- Giacca monopetto a due bottoni\n- Collo con revers a specchio\n- Due tasche a filetto\n- Un taschino a filetto sul petto\n- Spacchi laterali\n- Foderata\n- Lunghezza giacca: 73,5 cm\n- Pantaloni flat front\n- Cinturino con passanti\n- Chiusura con bottone e zip\n- Due tasche a filetto\n- Due tasche a filetto sul retro\n- Larghezza fondo pantaloni: 19 cm\n- Made in Italy",
    "image": "img/w1.jpg",
    "category": "woman",
    "allSizes": ["One Size"],
    "availableSizes": ["One Size"],
    "vr": false
  },
  "3":{
    "id": 3,
    "name": "Erbe Trucket Jacket",
    "price": "2250€ ",
    "description": "Erbe Trucket Jacket - Black - Grained Leather - Collar - Removable Signature Grosgrain Ribbon - Button Closure - Button Flap Chest Pockets - Side Pockets - Buttoned Cuffs - Fitted - 100% Sheep Leather - Made in Italy",
    "image": "img/m3.jpg",
    "category": "man",
    "allSizes": ["XS", "S", "M", "L", "XL"],
    "availableSizes": ["S", "M", "L"],
    "vr": true
  },
  "4":{
    "id": 4,
    "name": "Campaign Handbag",
    "price": "$490",
    "description": "Featured in our 2025 spring campaign.",
    "image": "img/sp4.jpg",
    "category": "springCollection25",
    "allSizes": ["XS", "S", "M", "L", "XL"],
    "availableSizes": ["S", "M", "L"],
    "vr": true
  },
  "5":{
    "id": 5,
    "name": "Elegant Dress",
    "price": "$350",
    "description": "A stylish Gucci-inspired dress for luxury occasions.",
    "image": "img/sp5.jpg",
    "category": "springCollection25",
    "allSizes": ["XS", "S", "M", "L", "XL"],
    "availableSizes": ["S", "M", "L"],
    "vr": true
  },
  "6":{
    "id": 6,
    "name": "Elegant Dress",
    "price": "$350",
    "description": "Refined silhouette with modern elegance for 2025.",
    "image": "img/sp6.jpg",
    "category": "springCollection25",
    "allSizes": ["XS", "S", "M", "L", "XL"],
    "availableSizes": ["S", "M", "L"],
    "vr": true
  },
  "7":{
    "id": 7,
    "name": "Elegant Dress",
    "price": "$350",
    "description": "Refined silhouette with modern elegance for 2025.",
    "image": "img/w1.jpg",
    "category": "woman",
    "allSizes": ["XS", "S", "M", "L", "XL"],
    "availableSizes": ["S", "M", "L"],
    "vr": true
  },
  "8":{
    "id": 8,
    "name": "Elegant Dress",
    "price": "$350",
    "description": "Refined silhouette with modern elegance for 2025.",
    "image": "img/w2.jpg",
    "category": "woman",
    "allSizes": ["XS", "S", "M", "L", "XL"],
    "availableSizes": ["S", "M", "L"],
    "vr": true
  },
  "9":{
    "id": 9,
    "name": "Elegant Dress",
    "price": "$350",
    "description": "Refined silhouette with modern elegance for 2025.",
    "image": "img/w3.jpg",
    "category": "woman",
    "allSizes": ["XS", "S", "M", "L", "XL"],
    "availableSizes": ["S", "M", "L"],
    "vr": true
  },
  "10":{
    "id": 10,
    "name": "Elegant Dress",
    "price": "$350",
    "description": "An elegant dress perfect for evening occasions.",
    "image": "img/sp1.jpg",
    "category": "springCollection25",
    "allSizes": ["XS", "S", "M", "L", "XL"],
    "availableSizes": ["S", "M", "L"],
    "vr": false
  }
}

renderProducts();// This renders the collections (woman, man, etc.)
try{    
//if we are on a single product page
    if (document.querySelector('.product-detail')) {
      renderProductDetail();
    }
  } catch (error) {
    console.error('Error loading products:', error);
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
