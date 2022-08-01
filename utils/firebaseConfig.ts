import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import type { Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwfWzS9gP85bmMJTDwqN1QFx9pE70Lbg0",
  authDomain: "portfolio22-c89e3.firebaseapp.com",
  projectId: "portfolio22-c89e3",
  storageBucket: "portfolio22-c89e3.appspot.com",
  messagingSenderId: "339577113696",
  appId: "1:339577113696:web:adf9026694a87c7cc9c705",
  measurementId: "G-RDL9YK34R6",
};

let analytics;
let app;
let db: Firestore;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== "undefined") {
    analytics = getAnalytics(app);
  }

  // Initialize Firestore
  db = getFirestore(app);
}

export { app, db };
