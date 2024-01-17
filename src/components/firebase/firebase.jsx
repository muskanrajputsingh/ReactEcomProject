import firebase from "firebase/compat/app" ;
import  'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBw0y58SIEdqB-31x0M6UJMxAaUvLK8sAw",
    authDomain: "ecomm-386b2.firebaseapp.com",
    projectId: "ecomm-386b2",
    storageBucket: "ecomm-386b2.appspot.com",
    messagingSenderId: "1080736524036",
    appId: "1:1080736524036:web:32078a13e1c52ba5469251"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export default app.database().ref();
  export const fireDB= getFirestore(app);
  