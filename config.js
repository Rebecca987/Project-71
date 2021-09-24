import firebase from 'firebase'
require("@firebase/firestore")


  const firebaseConfig = {
    apiKey: "AIzaSyAFL5rEg9QtYdQb6J7O-1tyipO-GFiQY2Y",
    authDomain: "complaint-forum-fa7e8.firebaseapp.com",
    projectId: "complaint-forum-fa7e8",
    storageBucket: "complaint-forum-fa7e8.appspot.com",
    messagingSenderId: "794707891981",
    appId: "1:794707891981:web:e30e4b531dc14d91f34244"
  };


const firebaseConfig = {
 //Add configuration here
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

