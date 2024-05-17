import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDG9K1nBt1LjzOFjHtN3pPFIuDgrMylmoc",
  authDomain: "e-commerceweb-hackathon.firebaseapp.com",
  projectId: "e-commerceweb-hackathon",
  storageBucket: "e-commerceweb-hackathon.appspot.com",
  messagingSenderId: "1047023279351",
  appId: "1:1047023279351:web:01497bcfc583ab583747f2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
