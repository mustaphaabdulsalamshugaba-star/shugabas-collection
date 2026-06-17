import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.adminLogin = async function(){

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

if(email === "mustaphaabdulsalamshugaba@gmail.com"){

localStorage.setItem(
"adminLoggedIn",
"true"
);

window.location.href =
"admin.html";

}else{

alert("Access Denied");

}

}
catch(error){

alert(error.message);

}

}