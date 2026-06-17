/* ==========================================
   SHUGABA'S COLLECTION - SCRIPT.JS
========================================== */

/* ==========================
   READ MORE BUTTON
========================== */

function toggleAbout() {

    let moreText = document.getElementById("moreText");

    let btn = document.getElementById("readBtn");

    if (moreText.style.display === "inline") {

        moreText.style.display = "none";

        btn.innerHTML = "Read More";

    } else {

        moreText.style.display = "inline";

        btn.innerHTML = "Read Less";

    }

}

/* ==========================
   PRODUCT IMAGE GALLERY
========================== */

function changeImage(mainImageId, newImage){

    document.getElementById(mainImageId).src = newImage;

}

/* ==========================
   SCROLL TO TOP BUTTON
========================== */

window.onscroll = function(){

    let topBtn = document.getElementById("topBtn");

    if(topBtn){

        if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

            topBtn.style.display = "block";

        }else{

            topBtn.style.display = "none";

        }

    }

};

function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/* ==========================
   FADE ANIMATION
========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".fade").forEach((element)=>{

    observer.observe(element);

});

/* ==========================
   SMOOTH HOVER EFFECT
========================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

/* ==========================
   PRELOADER (OPTIONAL)
========================== */

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});
// Hero Slider

let slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => slide.classList.remove("active"));

    slides[index].classList.add("active");

}

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

},4000);
function toggleWishlist(button){

    button.classList.toggle("active");

}
import { auth } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth,(user)=>{

if(user){

document.getElementById("userEmail").innerHTML =
"👤 " + user.email;

}

});

function logout(){

signOut(auth)
.then(()=>{

alert("Logged Out");

window.location.href="login.html";

});

}
function changeQty(btn,value){

let input =
btn.parentElement.querySelector(".qty-input");

let current =
parseInt(input.value);

current += value;

if(current < 1){
current = 1;
}

input.value = current;

}

function addFeaturedToCart(btn,name,price,image){

let quantity =
parseInt(
btn.parentElement.querySelector(".qty-input").value
);

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name:name,
price:price,
image:image,
quantity:quantity
});

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert(quantity + " item(s) added to cart!");

}

window.logout = logout;

/* ==========================
   END OF SCRIPT.JS
========================== */