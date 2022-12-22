import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjh38jc5koqDGa-4iIA2tth_Rd0n_afbs",
  authDomain: "kalify-alogarapa-7bb6d.firebaseapp.com",
  databaseURL: "https://kalify-alogarapa-7bb6d-default-rtdb.firebaseio.com",
  projectId: "kalify-alogarapa-7bb6d",
  storageBucket: "kalify-alogarapa-7bb6d.appspot.com",
  messagingSenderId: "802273436922",
  appId: "1:802273436922:web:0e94c552ad8d2776a15543",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export const storage = getStorage(app);

export default database;
