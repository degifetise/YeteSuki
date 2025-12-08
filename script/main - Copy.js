const navbar = document.getElementById("navbar");
const outdent = document.getElementById("outdent");

outdent.addEventListener("click", () => {
navbar.classList.toggle("navbarDisplay");

if(navbar.classList.contains("navbarDisplay")) {
outdent.innerHTML = `<i class="fas fa-times"></i>`;
}
else{
outdent.innerHTML = `<i class="fas fa-bars"></i>`;
}

});

// pop up value prodicts added



const adeBtn = document.querySelectorAll("#cartBtn");
const counterContainer = document.getElementById("counter");

if(!counterContainer) {
console.log("no this element here");
} else {
adeBtn.forEach((button) => {

button.addEventListener("click", () => {

setTimeout(() => {
let count = parseInt(counterContainer.innerText, 10) || 0;
count++;
counterContainer.innerText = count;

setTimeout(() => {
button.innerText = "Take Your Cart";
}, 1000);
setTimeout(() => {
button.innerText = "Checked Up";
}, 3000)
/*setTimeout(() => {
/*button.innerHTML = '<i class="fas fa-circle-notch fa-spin spinner"></i>';
/*
/*}, 500);*/

button.innerHTML = '<i class="fas fa-circle-notch fa-spin spinner"></i>';

}, 999);

})
});
}


// scroll reveal animations

// Wait until DOM is ready so selectors exist
document.addEventListener('DOMContentLoaded', function () {
  // Make sure ScrollReveal is available
if (typeof ScrollReveal === 'undefined') {
  console.error('ScrollReveal not loaded. Check that <script src="https://unpkg.com/scrollreveal"></script> is included BEFORE this script.');
  return;
}

  const baseOptions = {
    distance: "60px",
    duration: 1000,
    delay: 150,
    // reset: true // uncomment if you want animations to replay when scrolling up
  };

  // Hero — large heading + content
  ScrollReveal().reveal(".hero.section-content", {
    ...baseOptions,
    origin: "top"
  });

  // Services cards (stagger with interval)
  ScrollReveal().reveal(".services .content-card", {
    ...baseOptions,
    origin: "bottom",
    interval: 1500
  });

  // Featured products — each product card
  ScrollReveal().reveal(".featured-products .product-card", {
    ...baseOptions,
    origin: "right",
    interval: 1200
  });

  // Section headers (example: featured-products h1)
  ScrollReveal().reveal(".featured-products > h1, .featured-products > h3", {
    ...baseOptions,
    origin: "left"
  });

  // About product container
  ScrollReveal().reveal(".about-product .aboutPro-container", {
    ...baseOptions,
    origin: "left"
  });

  // Banner
  ScrollReveal().reveal(".banner-section", {
    ...baseOptions,
    origin: "bottom"
  });

  // New products grid items
  ScrollReveal().reveal(".aboutreho .brandimg", {
    ...baseOptions,
    origin: "bottom",
    interval: 1200
  });

  // Newsletter (note your HTML class is "newsleter" — using same selector)
  ScrollReveal().reveal(".newsleter", {
    ...baseOptions,
    origin: "top"
  });

  // Footer rows
  ScrollReveal().reveal("footer .row", {
    ...baseOptions,
    origin: "bottom",
    interval: 1600
  });

  // Example: reveal header logo and nav (small subtle effect)
  ScrollReveal().reveal("header .logo, header nav, .cartBag", {
    ...baseOptions,
    origin: "top",
    distance: "20px",
    duration: 700,
    interval: 800
  });

  console.log('ScrollReveal initialized.');
});




//add products card and category


let products = {

data: [
{
    productName: "Olive oil",
    category: "Hair oil",
    Price: "450 birr",
    image: "Image/rosemary_1.webp",
},

{
    productName: "herbal cut",
    category: "Hair oil",
    Price: "450 birr",
    image: "Image/rosemary_1.webp",
},


{
    productName: "Olive oil",
    category: "Hair oil",
    Price: "450 birr",
    image: "Image/rosemary_1.webp",
},

{
    productName: "Olive oil",
    category: "Hair oil",
    Price: "450 birr",
    image: "Image/rosemary_1.webp",
},
],
};

for(let i of products.data) {
//create grid card//
let card = document.createElement("div");

//card should have category
card.classList.add("product-card", "i.category");

//create imafe tag//

let image = document.createElement("img");

image.setAttribute("src", i.image);

let Productname =  document.createElement("h3");

Productname.innerText = i.productName;

let price = document.createElement("p");

price.innerText = i.price;


card.appendChild(image);
card.appendChild(Productname);
card.appendChild(price);

//product grid //

document.getElementsByClassName("product-grid").appendChild(card);
}

let now = Date.now();
console.log(non);
//footer date//

let d = new Date();
const year = d.getFullYear();
document.getElementById("date").innerText = year;