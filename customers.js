import { db } from "./firebase.js";

import {
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const customersDiv =
document.getElementById("customers");

async function loadCustomers(){

const snapshot =
await getDocs(
collection(db,"orders")
);

let output = "";

let totalCustomers = 0;

snapshot.forEach((docData)=>{

const customer =
docData.data();

totalCustomers++;

output += `

<div class="order">

<h3>${customer.name}</h3>

<p><strong>Phone:</strong>
${customer.phone}</p>

<p><strong>Address:</strong>
${customer.address}</p>

</div>

`;

});

document.getElementById(
"customerCount"
).textContent =
totalCustomers;

customersDiv.innerHTML =
output;

}

loadCustomers();

window.logout = function(){

localStorage.removeItem(
"adminLoggedIn"
);

window.location.href =
"admin-login.html";

}