import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuwhE1T07cWZy5-hkHo92rDbATa-tlHL8",
    authDomain: "react-crud-65a62.firebaseapp.com",
    projectId: "react-crud-65a62",
    storageBucket: "react-crud-65a62.appspot.com",
    messagingSenderId: "285971024947",
    appId: "1:285971024947:web:594d5639d377d28adc6746"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();

export default firestore;