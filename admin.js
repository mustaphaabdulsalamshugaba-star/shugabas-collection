if(localStorage.getItem("adminLoggedIn") !== "true"){

window.location.href =
"admin-login.html";

}
import { db } from "./firebase.js";

import {
collection,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const ordersDiv = document.getElementById("orders");

async function loadOrders(){

ordersDiv.innerHTML = "<h3>Loading Orders...</h3>";

const querySnapshot = await getDocs(
collection(db,"orders")
);

let output = "";

querySnapshot.forEach((documentData)=>{

const order = documentData.data();

output += `

<div class="order">

<h3>${order.name}</h3>

<p><strong>Phone:</strong> ${order.phone}</p>

<p><strong>Address:</strong> ${order.address}</p>

<p><strong>Date:</strong> ${order.date}</p>

<p><strong>Status:</strong> ${order.status || "Pending"}</p>

<p><strong>Products:</strong></p>
</span>
</p>

<p><strong>Products:</strong></p>

<p><strong>Products Ordered:</strong></p>

<ul>
${order.products.map(product => `
<li>
${product.name}
(Quantity: ${product.quantity || 1})
</li>
`).join("")}
</ul>

<button
class="delete-btn"
onclick="deleteOrder('${documentData.id}')">

Mark as Completed

</button>

</div>

`;

});

ordersDiv.innerHTML = output;

}

window.deleteOrder = async function(id){

if(confirm("Delete this order?")){

await deleteDoc(
doc(db,"orders",id)
);

loadOrders();

}

}

loadOrders();