import { db } from "./firebase.js";

import {
collection,
addDoc,
getDocs,
deleteDoc,
doc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const productsRef = collection(db,"products");

window.addProduct = async function(){

const name =
document.getElementById("name").value;

const price =
document.getElementById("price").value;

const image =
document.getElementById("image").value;

const description =
document.getElementById("description").value;

await addDoc(productsRef,{
name,
price,
image,
description
});

alert("Product Added Successfully");

document.getElementById("name").value = "";
document.getElementById("price").value = "";
document.getElementById("image").value = "";
document.getElementById("description").value = "";

loadProducts();

};

async function loadProducts(){

const snapshot =
await getDocs(productsRef);

let output = "";
let totalProducts = 0;
snapshot.forEach((item)=>{

const product = item.data();
totalProducts++;
output += `
<div class="order">

<img src="${product.image}"
style="
width:150px;
height:150px;
object-fit:cover;
border-radius:10px;
border:2px solid gold;
">

<h3>${product.name}</h3>

<p><strong>${product.price}</strong></p>

<p>${product.description}</p>

<button
class="delete-btn"
onclick="deleteProduct('${item.id}')">
Delete Product
</button>

</div>
`;

});
document.getElementById("productCount").textContent =
totalProducts;
document.getElementById("productsList").innerHTML =
output;

}

window.deleteProduct =
async function(id){

if(confirm("Delete this product?")){

await deleteDoc(
doc(db,"products",id)
);

loadProducts();

}

};

loadProducts();