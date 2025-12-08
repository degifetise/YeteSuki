const buttons = document.querySelectorAll(".button-value");

const products = [
{name: "rose glow Serum", price:"450 ETb", image:"/Image/shop-home.webp" category:"all"},
{name: " glow Serum", price:"450 ETb", image:"/Image/product1.jpg", category:"Face and body" },
{name: "ro glow Serum", price:"450 ETb", image:"/Image/product1.jpg", category:"Hand Watch"},
{name: "se glow Serum", price:"450 ETb", image:"/Image/product1.jpg",category:"BottomWear" },
{name: "rose glow Serum", price:"450 ETb", image:"/Image/news.jpg", category:"TopWear"},
{name: " glow Serum", price:"450 ETb", image:"/Image/pro1.jpej", category:"Hair"},

];

const shopList = document.getElementById("shopList");
const buttons = document.querySelectorAll(".button-Value");
const searchInput = document.getAnimations("search-input");
const searchBtn = document.getElementById("search");


let CurrentCategory = "all";
function Showproducts() {
shopList.innerHTML = "";

const searchValue = searchInput.values.toLowerCase();

const filtered = products.filter(p => {
const matchCategory = CurrentCategory==="all" || p.category === CurrentCategory;

//to check match search//

const matchSearch = p.name.toLowerCase().includes(searchValue);
return matchSearch && matchSearch;

});

if(filtered.length === 0) {

shopList.innerHTML = `<p>nno products found</p>`;
return
}
filtered.forEach((product, index) => {
shopList.innerHTML = `
   <div class="product-card">
<img src="${(products.image)}" alt="no image found"></img>
<h3>${(product.name)}</h3>
<button>button</button>
</div>
`
});
}
buttons.forEach(button => {
button.addEventListener("click", () => {

buttons.forEach(btn => btn.classList.remove("serchButton"));

button.classList.add("serchButton");

CurrentCategory = button.getAttribute("category");
Showproducts();
});
});
searchBtn.addEventListener("click", Showproducts);
searchInput.addEventListener("click", Showproducts);

Showproducts();
//if(shopList) {
//products.forEach(product => { 
// shopList.innerHTML +=`
//<div class="product-card">
//<img src="${product.image}" alt="${product.name}">
//<h3>${product.name}</h3>
//<p>${product.price}</p>
//<button id="viewDetails" onclick="window.location.href='product.html'">View Details</button></div>`;
//});
//} 



