//import { seedDatabase } from '../seed';

const config = {
    apiKey: 'AIzaSyBzbDVpXMNirX9Frhm465m0vUFTNQhHM1w',
    authDomain: 'instagram-e8841.firebaseapp.com',
    databaseURL: 'https://instagram-e8841.firebaseio.com',
    projectId: 'instagram-e8841',
    storageBucket: 'instagram-e8841.appspot.com',
    messagingSenderId: '1052235904858',
    appId: '1:1052235904858:web:eac84ef7c0e15590916563'
  };
  
  const firebase = window.firebase.initializeApp(config);
  const { FieldValue } = window.firebase.firestore;
  
  //seedDatabase(firebase);
  
  export { firebase, FieldValue };