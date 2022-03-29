import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const firebaseinit=()=>{
    initializeApp(firebaseConfig);
}
export default firebaseinit;