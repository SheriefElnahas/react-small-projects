import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCzPIBFqZxkF8yDhULlEUW0Eoz31-ydJis',
  authDomain: 'finance-tracker-personal-4e1af.firebaseapp.com',
  projectId: 'finance-tracker-personal-4e1af',
  storageBucket: 'finance-tracker-personal-4e1af.appspot.com',
  messagingSenderId: '8871785014',
  appId: '1:8871785014:web:59def4a9097347b7635e97',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth();

export { app, auth };
