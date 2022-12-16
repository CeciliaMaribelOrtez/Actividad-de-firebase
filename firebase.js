
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, deleteDoc, onSnapshot, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCv7uHOBO5ejx2OtvpyKs9K82PJG5KDOQw",
    authDomain: "fir-javascript-crud-dfba3.firebaseapp.com",
    projectId: "fir-javascript-crud-dfba3",
    storageBucket: "fir-javascript-crud-dfba3.appspot.com",
    messagingSenderId: "293989265274",
    appId: "1:293989265274:web:39dd2fe5d1654c29d8f0c3"
   };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const db  = getFirestore()
  export const saveTask = (title, description)  => {
   addDoc(collection(db, 'tasks'), { title, description})
  }
 export const getTasks  = () => getDocs (collection(db, 'tasks') ) 
 
 export const onGetTasks = (callback) => 
 onSnapshot(collection(db,'task'), callback)

 export const deleteTask  = (id) => deleteDoc(doc(db, "tasks",id))

 export const getTask = id => getDoc(doc(db, "tasks", id)) 

 export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields)