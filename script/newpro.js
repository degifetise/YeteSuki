const products = [
  { name: "Rose glow Serum", price: "450 ETB", image: "/Image/herbal_.webp", category: "Face and body" },
  { name: "Glow Serum", price: "450 ETB", image: "/Image/prodcut1.jpg", category: "Hair" },
  { name: "Ro glow Serum", price: "450 ETB", image: "/Image/prodcut1.jpg", category: "Hand Watch" },
  { name: "Se glow Serum", price: "450 ETB", image: "/Image/prodcut1.jpg", category: "BottomWear" },
  { name: "Rose glow Serum", price: "450 ETB", image: "/Image/news.jpg", category: "TopWear" },
  { name: "Glow Serum", price: "450 ETB", image: "/Image/prodcut1.jpg", category: "Hair" }
];

const shopList = document.getElementById("shopProducts");
const buttons = document.querySelectorAll(".button-value");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

let currentCategory = "all";

// Function to render filtered products only
function renderProducts() {
  shopList.innerHTML = "";
  const searchValue = searchInput.value.trim().toLowerCase();

  const filteredProducts = products.filter(product => {
    const matchCategory = currentCategory === "all" || product.category.toLowerCase() === currentCategory.toLowerCase();
    const matchSearch = product.name.toLowerCase().includes(searchValue);
    return matchCategory && matchSearch;
  });

  if (filteredProducts.length === 0) {
    shopList.innerHTML = `<p style="text-align:center;color:#777;">No products found.</p>`;
    return;
  }

  filteredProducts.forEach((product, i) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.style.animationDelay = `${i * 0.1}s`;

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="window.location.href='product.html'">View Details</button>
    `;

    shopList.appendChild(productCard);
  });
}

// Category filter
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.getAttribute("data-category");
    renderProducts();
  });
});

// Search filter (on typing or button click)
searchBtn.addEventListener("click", renderProducts);
searchInput.addEventListener("input", renderProducts);

// Initial load
renderProducts();
