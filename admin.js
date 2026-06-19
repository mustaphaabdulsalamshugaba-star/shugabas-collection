if(localStorage.getItem("adminLoggedIn") !== "true"){

window.location.href =
"admin-login.html";

}
import { db } from "./firebase.js";

import {
collection,
getDocs,
deleteDoc,
doc,
updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




const ordersDiv = document.getElementById("orders");
async function loadOrders(){

ordersDiv.innerHTML = "<h3>Loading Orders...</h3>";

const querySnapshot = await getDocs(
collection(db,"orders")
);

let totalOrders = 0;
let pendingOrders = 0;
let deliveredOrders = 0;
let totalRevenue = 0;
let output = "";

querySnapshot.forEach((documentData)=>{

const order = documentData.data();

totalOrders++;

totalRevenue += order.total;

if(order.status === "Delivered"){

deliveredOrders++;

}else{

pendingOrders++;

}

output += `

<div class="order"><h3>${order.name}</h3><p><strong>Phone:</strong> ${order.phone}</p><p><strong>Address:</strong> ${order.address}</p><p><strong>Date:</strong> ${order.date}</p><p>
<strong>Status:</strong>
<span style="
color:
${order.status==="Delivered"?"lime":
order.status==="Processing"?"orange":"red"};
font-weight:bold;
">
${order.status || "Pending"}
</span>
</p><p><strong>Products Ordered:</strong></p><ul>
${order.products.map(product => `
<li>
${product.name}
(Quantity: ${product.quantity || 1})
</li>
`).join("")}
</ul>
${order.status === "Delivered" ? "" : `
<button
class="complete-btn"
onclick="markCompleted('${documentData.id}')">
Mark as Completed
</button>
`}</div>`;

});

document.getElementById("totalOrders").innerHTML =
totalOrders;

document.getElementById("pendingOrders").innerHTML =
pendingOrders;

document.getElementById("deliveredOrders").innerHTML =
deliveredOrders;

document.getElementById("totalRevenue").innerHTML = `₦${totalRevenue.toFixed(2)}`;

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
window.markCompleted = async function(id){

await updateDoc(
doc(db,"orders",id),
{
status: "Delivered"
}
);

loadOrders();

}
window.logout = function(){

localStorage.removeItem(
"adminLoggedIn"
);

window.location.href =
"admin-login.html";

}