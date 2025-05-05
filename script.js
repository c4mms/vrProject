let products = {
  "1": {
    "id": 1,
    "name": "ACNE STUDIOS - DOWN JACKET",
    "price": "790 €",
    "description": "Garment-Dyed Nylon – Logo Embroidery on Chest – Centre-Front Zipper & Snap Button Closure – Front & Internal Pockets – Fitted Fit – Below Waist Length – Model is 188 cm / 6'2 and Wears Size 46 – Shell: 100% Nylon – Lining: 100% Recycled Nylon – Filling: 90% Recycled Down, 10% Recycled Feathers – Made in Italy",
    "image": "img/m1.jpg",
    "category": "man",
    "allSizes": ["42", "44", "46", "48", "50", "52", "54"],
    "availableSizes": ["42", "44", "46", "48", "50"],
    "vr": true,
    "glbPath": "https://showroomcd.s3.amazonaws.com/vestitiglb/pufferjacket.glb"
  },
  "2":{
    "id": 2,
    "name": "GIORGIO ARMANI - SOHO WOOL SUIT",
    "price": "2200 €",
    "description": "Virgin Wool – Slim Fit – Single-Breasted Two-Button Jacket – Peak Lapels – Chest Welt Pocket – Two Front Welt Pockets – Double Back Vents – Jacket Length: 73.5 cm – Flat Front Trousers – Belt Loops – Covered Zip & Button Closure – Side Welt Pockets – Rear Welt Pockets with Button – Trouser Hem Width: 19 cm – Jacket: 100% Virgin Wool – Jacket Lining: 100% Cupro – Trousers: 100% Virgin Wool – Trouser Knee Lining: 60% Acetate, 40% Cupro – Made in Italy",
    "image": "img/m2.jpg",
    "category": "man",
    "allSizes": ["42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    "availableSizes": ["42", "44", "46", "52"],
    "vr": true,
    "glbPath": "https://showroomcd.s3.amazonaws.com/vestitiglb/suit2.glb"
  },
  "3":{
    "id": 3,
    "name": "ANN DEMEULEMEESTER - ERBE TRUCKET JACKET",
    "price": "2250 €",
    "description": "Erbe Trucket Jacket - Black - Grained Leather - Collar - Removable Signature Grosgrain Ribbon - Button Closure - Button Flap Chest Pockets - Side Pockets - Buttoned Cuffs - Fitted - 100% Sheep Leather - Made in Italy",
    "image": "img/m3.jpg",
    "category": "man",
    "allSizes": ["44", "46", "48", "50", "52", "54", "56"],
    "availableSizes": ["46", "48", "50", "52"],
    "vr": true,
    "glbPath": "https://showroomcd.s3.amazonaws.com/vestitiglb/tshirt.glb"
  },
  "4":{
    "id": 4,
    "name": "DIOR - ABANDON SHIRT DRESS",
    "price": "3000 €",
    "description": "Cotton-Silk Poplin – Asymmetric Neckline – One-Shoulder – Rounded Hem – Tonal Removable Belt with Metal Buckle – Hidden Front Button Closure – Buttoned Cuffs – Bee & CD Embroidery – Unlined – Asymmetric Fit – 57% Cotton, 43% Silk – Made in France ",
    "image": "img/w1.jpg",
    "category": "woman",
    "allSizes": ["38", "40", "42", "44", "46", "48", "50"],
    "availableSizes": ["40", "42", "46", "48"],
    "vr": true,
    "glbPath": "https://showroomcd.s3.amazonaws.com/vestitiglb/dior.glb"
  },
  "5":{
    "id": 5,
    "name": "BALENCIAGA - RIBBED KNIT TANK TOP",
    "price": "850 €",
    "description": "Ribbed Wool Blend – Crew Neck – Sleeveless – Ribbed Finish – Embroidered Balenciaga Logo on Back – Fitted Fit – 90% Wool, 8% Polyamide, 2% Elastane – Embroidery: 100% Polyester – Made in Italy ",
    "image": "img/w2.jpg",
    "category": "woman",
    "allSizes": ["38", "40", "42", "44", "46"],
    "availableSizes": ["40", "42", "44", "46"],
    "vr": true,
    "glbPath": "https://showroomcd.s3.amazonaws.com/vestitiglb/canottiera.glb"
  },
  "6":{
    "id": 6,
    "name": "GIVENCHY - DRAPPED SATIN GOWN",
    "price": "4500 €",
    "description": "Satin – Draped Design – Open Back – Asymmetric Crystal-Embroidered Straps – Invisible Side Zip – Front Slit – Flowing Long Skirt – Unlined – Fit: Slim with Fluid Skirt – Made in France",
    "image": "img/w3.jpg",
    "category": "woman",
    "allSizes": ["38", "40", "42", "44", "46", "48"],
    "availableSizes": ["38", "40", "44"],
    "vr": true,
    "glbPath": "https://showroomcd.s3.amazonaws.com/vestitiglb/minidress.glb"
  },
  "7":{
    "id": 7,
    "name": "MCQUEEN - NAVY LACE INSERT DRESS",
    "price": "1590 €",
    "description": "Wool Blend – Rear Hidden Zip & Hook Closure – Straps – Back Slit – Lace Inserts – Slim Fit – Outer: 75% Wool, 25% Mohair – Lining: 74% Acetate, 26% Silk – Made in Italy ",
    "image": "img/w4.jpg",
    "category": "woman",
    "allSizes": ["36", "38", "40", "42", "44", "46"],
    "availableSizes": ["36", "38", "40", "42", "44", "46"],
    "vr": true,
    "glbPath": "https://showroomcd.s3.amazonaws.com/vestitiglb/dress.glb"
  },
  "8":{
    "id": 8,
    "name": "Elegant Dress",
    "price": "$350",
    "description": "Refined silhouette with modern elegance for 2025.",
    "image": "img/w4.jpg",
    "category": "woman",
    "allSizes": ["XS", "S", "M", "L", "XL"],
    "availableSizes": ["S", "M", "L"],
    "vr": false
  },
  "9":{
    "id": 9,
    "name": "Elegant Dress",
    "price": "$350",
    "description": "Refined silhouette with modern elegance for 2025.",
    "image": "img/w5.jpg",
    "category": "woman",
    "allSizes": ["XS", "S", "M", "L", "XL"],
    "availableSizes": ["S", "M", "L"],
    "vr": false
  },
  "10": {
    "id": 10,
    "name": "Blossom Gown",
    "price": "$390",
    "description": "A delicate gown inspired by the first blooms of spring.",
    "image": "img/sp1.jpg",
    "category": "springCollection25",
    "allSizes": ["XS", "S", "M", "L"],
    "availableSizes": ["S", "M", "L"]
  },
  "11": {
    "id": 11,
    "name": "Sunrise Midi Dress",
    "price": "$420",
    "description": "Elegant midi dress with flowing lines and soft colors.",
    "image": "img/sp2.jpg",
    "category": "springCollection25",
    "allSizes": ["XS", "S", "M", "L", "XL"],
    "availableSizes": ["M", "L"]
  },
  "12": {
    "id": 12,
    "name": "Rose Petal Slip",
    "price": "$370",
    "description": "A soft slip dress with rose petal detailing, ideal for garden parties.",
    "image": "img/sp3.jpg",
    "category": "springCollection25",
    "allSizes": ["XS", "S", "M", "L"],
    "availableSizes": ["XS", "S", "M"]
  },
  "13": {
    "id": 13,
    "name": "Golden Hour Dress",
    "price": "$360",
    "description": "Flowy evening dress capturing the magic of golden hour.",
    "image": "img/sp4.jpg",
    "category": "springCollection25",
    "allSizes": ["S", "M", "L", "XL"],
    "availableSizes": ["S", "M"]
  },
  "14": {
    "id": 14,
    "name": "Pastel Dream Dress",
    "price": "$340",
    "description": "Light pastel dress, perfect for sunny spring days.",
    "image": "img/sp5.jpg",
    "category": "springCollection25",
    "allSizes": ["XS", "S", "M", "L", "XL"],
    "availableSizes": ["S", "L"]
  },
  "15": {
    "id": 15,
    "name": "Velvet Garden Dress",
    "price": "$660",
    "description": "Luxurious velvet dress adorned with floral embroidery.",
    "image": "img/sp6.jpg",
    "category": "springCollection25",
    "allSizes": ["XS", "S", "M"],
    "availableSizes": ["S", "M"]
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

       const vrButton = product.vr ? `<button class="vr-button" onclick="startVR('${product.glbPath}')">Try in VR</button>` : "";

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
  // Handle VR button
const vrButton = document.getElementById("vr-button");
if (vrButton && product.glbPath) {
  vrButton.onclick = () => {
    window.open(`vr/welcome_scene.html?model=${encodeURIComponent(product.glbPath)}`, '_blank');
  };
}
else {
    // No VR support 
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
