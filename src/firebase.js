import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAw4x50sPmXh1B_jLgfNSLi4UaAZ1HGxRE",
  authDomain: "projeto-react-tarefa-479d5.firebaseapp.com",
  projectId: "projeto-react-tarefa-479d5",
  storageBucket: "projeto-react-tarefa-479d5.firebasestorage.app",
  messagingSenderId: "1076480564460",
  appId: "1:1076480564460:web:112436e4f03046911799c9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export {auth};