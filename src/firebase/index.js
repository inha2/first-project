// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBl2IJvyVq9x_0ZlLGChjssFOn9xNiUqKE',
    authDomain: 'ddaeng-fbba2.firebaseapp.com',
    databaseURL: 'https://ddaeng-fbba2-default-rtdb.firebaseio.com',
    projectId: 'ddaeng-fbba2',
    storageBucket: 'ddaeng-fbba2.appspot.com',
    messagingSenderId: '978175736639',
    appId: '1:978175736639:web:29475ec7fd809f9c7eb18a',
}

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Realtime Database and get a reference to the service

export default app
