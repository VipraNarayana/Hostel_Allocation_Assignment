import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBInq_xVMmGJ0NA8WBWKy30c4MJzRXvsyA",
  authDomain: "hostel-booking-app-62fdd.firebaseapp.com",
  projectId: "hostel-booking-app-62fdd",
  storageBucket: "hostel-booking-app-62fdd.appspot.com",
  messagingSenderId: "251831305504",
  appId: "1:251831305504:web:06cf29ed36b6d115400345",
  measurementId: "G-X1J7QJ2SSF"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;