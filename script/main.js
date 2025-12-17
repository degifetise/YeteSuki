const navbar = document.getElementById("navbar");
const outdent = document.getElementById("outdent");

outdent.addEventListener("click", () => {
  navbar.classList.toggle("navbarDisplay");

  if (navbar.classList.contains("navbarDisplay")) {
    outdent.innerHTML = `<i class="fas fa-times"></i>`;
    outdent.classList.add("fa-time");
  } else {
    outdent.innerHTML = `<i class="fas fa-bars"></i>`;
  }
});

// pop up value products added

const adeBtn = document.querySelectorAll("#cartBtn");

const counterContainer = document.getElementById("counter");

if (!counterContainer) {
  console.log("no this element here");
} else {
  adeBtn.forEach(button => {
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
        }, 3000);

        button.innerHTML =
          '<i class="fas fa-circle-notch fa-spin spinner"></i>';
      }, 999);
    });
  });
}

//account parts//
const acc = document.getElementById("account");
const inputBlock = document.getElementById("field");
acc.addEventListener("click", () => {
  inputBlock.classList.toggle("showButtons");
});

//hide form//
const hidedForm = document.getElementById("hideForm");
const formToHide = document.getElementById("firstForm");

if (hidedForm) {
  hidedForm.addEventListener("click", () => {
    formToHide.classList.add("hide-form");
  });
}




//to make see image details//
const smallImage = document.querySelectorAll(".small");
const mainImage = document.getElementById("main-image");
const detailBtn = document.querySelectorAll(".imgBtn");

smallImage.forEach((image) => {
  image.addEventListener("click", () => {
    mainImage.src = image.src;
  });
});

//contact form validation//

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "vu1yffoze79QCdAok",
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_1yjp47o", "contact_form", this).then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};
window.addEventListener("scroll", () => {
  const scrl = document.querySelector(".product-card");
  scrl.style.opacity = 1 - window.scrollY / 600;

  const scrollY = window.scrollY / 500;


})


//search for prodcuts  by filtering it using lavasvcript//

const searchName = document.getElementById("searchName");
const searchCard = document.querySelectorAll(".product-card");
searchName.addEventListener('keyup', function () {
  const filter = searchName.value.toLowerCase();
  searchCard.forEach((card) => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(filter)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });

});


//form at top account//

const firstForm = document.querySelector(".login");
const remove = document.getElementById("hideForm");

remove.addEventListener("click", () => {
  firstForm.classList.add("slide-out");
});




//form validation//
/* document.getElementById("windowLocation").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById('userEmail').value;
  const password = document.getElementById("userPassword").value;
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

if(!emailPattern.test(email) && email==="") {
  alert("Please enter a valid email address.");
return false;
}
elseif(password.length < 8  && password==="") {
alert("Password must be at least 8 characters long.");
return false;
}
else{
    window.location = "index.html";
}
});
 */


//slide part//

const previous = document.querySelector(".prev");
const next = document.querySelector(".next");
const slideInfo = document.querySelector(".slid-info");

slideInfo.forEach((cardSlide) => {
  if (next) {
    next.addEventListener("click", () => {
      /*  cardSlide.style.transform = "translateX(-100%)"; */
      cardSlide.classList.add("nextSlide");
    });
  }
  if (previous) {
    previous.addEventListener("click", () => {
      /*  cardSlide.style.transform = "translateX(0%)"; */
      cardSlide.classList.add("prevSlide");
    });

  }

});


//section for testimonials//

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
direction: 'row',
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  },
});