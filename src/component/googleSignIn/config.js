import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmmSS0ENGBeP275vIgPgSHOgmP9UV0iys",
  authDomain: "academiahub-server.firebaseapp.com",
  projectId: "academiahub-server",
  storageBucket: "academiahub-server.appspot.com",
  messagingSenderId: "434386089840",
  appId: "1:434386089840:web:b9a5796cdc1e776d1fc1b5",
  measurementId: "G-QNNC7T3FPS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

const db = getFirestore(app);
export default db;
export {auth, provider};