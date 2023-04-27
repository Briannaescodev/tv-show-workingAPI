import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { secrets } from "../secrets.js";

initializeApp({ // connect to our firebase project
credential: cert(secrets) // using these creditials 
})

export const db = getFirestore() // connect us to firestore db 