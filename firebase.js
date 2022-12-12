
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import {
    getFirestore, 
    collection,
     addDoc,
    getDoc,
    onSnapshot,
    deleteDoc,
    Doc,
    updateDoc,
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
  
  const db = getFirestore()

  export const savetask = (title,description)  => 

   addDoc(collection(db, 'tasks'),{ title,description} )

   export const getTasks  = () => getDoc (collection(db, 'tasks'))

   export const onGetTasks = (callback) => onSnapshot(collection(db,'task'),callback)
   export const deleteTask = id => deleteDoc(doc(db,'Tasks'),id)
   export const getTask = id => getDoc(doc(db,'tasks',id))
   export const updateTask  = (id,newFields)  => 
   updateDoc( doc(db,'tasks',id),newFields)
