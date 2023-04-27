import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVSYjKuKufYKgOWhHm3eCVo3r9crfLJhY",
  authDomain: "learnfirebox-bb521.firebaseapp.com",
  databaseURL: "https://learnfirebox-bb521-default-rtdb.firebaseio.com",
  projectId: "learnfirebox-bb521",
  storageBucket: "learnfirebox-bb521.appspot.com",
  messagingSenderId: "205350957637",
  appId: "1:205350957637:web:fd5ae0ca681489e67de92c"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
