import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2DD-0U79_4swv-Bns2rEkFzPtxXebH8o",
  authDomain: "shugabascollection.firebaseapp.com",
  projectId: "shugabascollection",
  storageBucket: "shugabascollection.firebasestorage.app",
  messagingSenderId: "501879564137",
  appId: "1:501879564137:web:836a9d9612f5764e5dbff8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };