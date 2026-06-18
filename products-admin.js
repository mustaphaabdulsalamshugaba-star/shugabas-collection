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

loadProducts();

};

async function loadProducts(){

const snapshot =
await getDocs(productsRef);

let output = "";

snapshot.forEach((item)=>{

const product = item.data();

output += `
<div class="order">

<h3>${product.name}</h3>

<p>${product.price}</p>

<img src="${product.image}"
width="120">

<br><br>

<button onclick="deleteProduct('${item.id}')">
Delete
</button>

</div>
`;

});

document.getElementById("productsList").innerHTML =
output;

}

window.deleteProduct =
async function(id){

await deleteDoc(
doc(db,"products",id)
);

loadProducts();

};

loadProducts();