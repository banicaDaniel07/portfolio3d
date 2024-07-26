// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import moment from "moment";
import {
    APP_DATE_FORMAT,
    APP_DATE_TIME_FORMAT,
    NUMBER_OF_VISITS_TODAY,
    USER_ID,
} from "./constants";
import { publicIpv4 } from "public-ip";
import { doc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARjX0rmr5JRSYcwlJZn2VCPDe93v5e0xg",
    authDomain: "portfolio-3d-aab4e.firebaseapp.com",
    projectId: "portfolio-3d-aab4e",
    storageBucket: "portfolio-3d-aab4e.appspot.com",
    messagingSenderId: "976955159242",
    appId: "1:976955159242:web:e291cb8166c4cee69ffa33",
    measurementId: "G-V7V7PK00BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const writeUserData = async () => {
    const respone = await publicIpv4();
    // @ts-ignore
    await setDoc(doc(db, moment().format(APP_DATE_FORMAT), localStorage.getItem(USER_ID)), {
        lastVisitTime: moment().format(APP_DATE_TIME_FORMAT),
        visits: localStorage.getItem(NUMBER_OF_VISITS_TODAY),
        [respone]: 'IP'
    });
}

export default writeUserData;