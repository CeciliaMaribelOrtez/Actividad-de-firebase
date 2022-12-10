// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getfirestore,collection,addDoc,getDocs
 } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeg6d4sIs3jG2SSFXOEhf_hq1ZuDht9Hk",
  authDomain: "fir-javascript-crud-eac28.firebaseapp.com",
  projectId: "fir-javascript-crud-eac28",
  storageBucket: "fir-javascript-crud-eac28.appspot.com",
  messagingSenderId: "910528289229",
  appId: "1:910528289229:web:f52f4b231247a801f3cc84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getfirestore()
export const savetasks = (title,description) =>
    addDoc(collection(db,'tasks'),{title: ,description: })
export const getTasks=() => getDocs(collection(db, 'Tasks'))