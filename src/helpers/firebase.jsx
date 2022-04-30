
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWQkRfU7eaNVN78b5iITlwLOhZb0VsQCo",
  authDomain: "fireblog-withreact.firebaseapp.com",
  databaseURL: "https://fireblog-withreact-default-rtdb.firebaseio.com",
  projectId: "fireblog-withreact",
  storageBucket: "fireblog-withreact.appspot.com",
  messagingSenderId: "1068465745443",
  appId: "1:1068465745443:web:c568586d28be4068a2cb96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
