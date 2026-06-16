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

/* ==========================
   END OF SCRIPT.JS
========================== */