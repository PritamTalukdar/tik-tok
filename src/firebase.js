import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZb5sGY5vwcY6XkkuIYgXrtNhmU4Re2yQ",
    authDomain: "tik-tok-341fb.firebaseapp.com",
    databaseURL: "https://tik-tok-341fb.firebaseio.com",
    projectId: "tik-tok-341fb",
    storageBucket: "tik-tok-341fb.appspot.com",
    messagingSenderId: "548580541777",
    appId: "1:548580541777:web:e70db774fc6837ea91ff70",
    measurementId: "G-H83NF8PHBG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;