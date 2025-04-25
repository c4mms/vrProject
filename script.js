// PRODUCTS DATA
const products = {
  1: {
    name: "Elegant Dress",
    price: "$350",
    description: "An elegant dress perfect for evening occasions.",
    image: "img/sp1.jpg",
    category: "springCollection25",
    allSizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L"],
    vr:true
  },
  2: {
    name: "Luxury Handbag",
    price: "$490",
    description: "A stylish handbag with premium leather finish.",
    image: "img/sp2.jpg", 
    category: "springCollection25",
    allSizes: ["One Size"],
    availableSizes: ["One Size"],
    vr:false

  },
  3: {
    name: "Valentino Handbag",
    price: "$490",
    description: "A timeless Valentino piece with gold accents.",
    image: "img/sp3.jpg", 
    category: "springCollection25",
    allSizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L"],
    vr:true
  },
  4: {
    name: "Campaign Handbag",
    price: "$490",
    description: "Featured in our 2025 spring campaign.",
    image: "img/sp4.jpg", 
    category: "springCollection25",
    allSizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L"],
    vr:true
  },
  5: {
    name: "Elegant Dress",
    price: "$350",
    description: "A stylish Gucci-inspired dress for luxury occasions.",
    image: "img/sp5.jpg",
    category: "springCollection25",
    allSizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L"],
    vr:true
  },
  6: {
    name: "Elegant Dress",
    price: "$350",
    description: "Refined silhouette with modern elegance for 2025.",
    image: "img/sp6.jpg",
    category: "springCollection25",
    allSizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L"],
    vr:true
  },
  7: {
    name: "Elegant Dress",
    price: "$350",
    description: "Refined silhouette with modern elegance for 2025.",
    image: "img/w1.jpg",
    category: "woman",
    allSizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L"],
    vr:true
  },
  8: {
    name: "Elegant Dress",
    price: "$350",
    description: "Refined silhouette with modern elegance for 2025.",
    image: "img/w2.jpg",
    category: "woman",
    allSizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L"],
    vr:true
  },
  9: {
    name: "Elegant Dress",
    price: "$350",
    description: "Refined silhouette with modern elegance for 2025.",
    image: "img/w3.jpg",
    category: "woman",
    allSizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L"],
    vr:true
  },
  10: {
    name: "Elegant Dress",
    price: "$350",
    description: "An elegant dress perfect for evening occasions.",
    image: "img/sp1.jpg",
    category: "springCollection25",
    allSizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L"],
    vr:false
  }
};

// This function renders products based on the category passed to it
function renderCategoryProducts(category, containerId, showAll = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = ""; // clear previous content
  let hasProducts = false;

  const matchedProducts = Object.entries(products)
    .filter(([_, product]) => product.category === category);

  const productsToShow = showAll ? matchedProducts : matchedProducts.slice(0, 6);

  for (const [id, product] of productsToShow) {
    hasProducts = true;

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

  // If no products were found, display a message indicating no products are available for that category
  if (!hasProducts) {
    container.innerHTML = "<p>No products available in this category at the moment. Check back later!</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (document.getElementById("spring-products")) {
    // Show only 6 on the homepage, all on collection page
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
});


// This only runs on product.html page to render the individual product
    document.addEventListener("DOMContentLoaded", function () {
      const params = new URLSearchParams(window.location.search);
      const productId = params.get("id");
    
      if (!productId) return;
    
      const product = products[productId]; // Assuming 'products' is already defined with all products data
    
      if (product) {
        // Set product details in the page
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
    
        // Handle size buttons and add to cart button
        const sizeButtonsContainer = document.querySelector(".size-buttons");
        const addToCartBtn = document.querySelector(".add-to-cart-btn");
        let selectedSize = null;
    
        if (sizeButtonsContainer) {
          if (product.allSizes && product.availableSizes) {
            sizeButtonsContainer.innerHTML = ''; // Clear previous buttons
    
            product.allSizes.forEach(size => {
              const button = document.createElement('button');
              button.classList.add('size-btn');
              button.textContent = size;
              button.setAttribute('data-size', size);
    
              // Disable unavailable sizes
              if (!product.availableSizes.includes(size)) {
                button.disabled = true;
              }
    
              // Size selection logic
              button.addEventListener('click', () => {
                document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                selectedSize = size;
    
                if (addToCartBtn) addToCartBtn.disabled = false;
              });
    
              sizeButtonsContainer.appendChild(button);
            });
    
            // Disable Add to Cart until a size is selected
            if (addToCartBtn) addToCartBtn.disabled = true;
            sizeButtonsContainer.style.display = 'flex';
          } else {
            sizeButtonsContainer.style.display = 'none';
            if (addToCartBtn) addToCartBtn.disabled = false;
          }
        }
    
        // Show popup when the product is added to cart
        function showPopup(message) {
          const popup = document.getElementById("popup");
          if (!popup) return;
    
          popup.textContent = message;
          popup.classList.add("show");
    
          setTimeout(() => {
            popup.classList.remove("show");
          }, 2000);
        }
    
        if (addToCartBtn) {
          addToCartBtn.addEventListener("click", () => {
            if (selectedSize || sizeButtonsContainer.style.display === "none") {
              showPopup("Product added to cart!");
            }
          });
        }
    
        // Fetch related products from the same category and show them
        const sameCollectionContainer = document.getElementById("suggested-products");
    
        if (sameCollectionContainer) {
          const relatedProducts = Object.values(products).filter(p =>
            p.category === product.category && p !== product // Ensure we don't show the current product
          ).slice(0, 3); // Limit to 3 products
    
          relatedProducts.forEach(relatedProduct => {
            const card = document.createElement("div");
            card.className = "product-card"; // Same class for styling
          
            // Structure the related product card like the main card
            card.innerHTML = `
              <a href="product.html?id=${relatedProduct.id}" class="product-link">
                <div class="product-image" style="background-image: url('${relatedProduct.image}')"></div>
                <div class="product-info">
                  <div class="product-name">${relatedProduct.name}</div>
                  <div class="product-price">${relatedProduct.price}</div>
                </div>
              </a>
            `;
          
            // Append the card to the container
            sameCollectionContainer.appendChild(card);
          });
          
        }
      } else {
        const main = document.querySelector("main");
        if (main) {
          main.innerHTML = "<p>Product not found 😢</p>";
        }
      }
    });
// Wishlist heart button toggle
function toggleHeart(btn) {
  btn.classList.toggle("liked");
  btn.textContent = btn.classList.contains("liked") ? "❤️" : "♡";
}

// Smooth scroll to section (if used)
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}