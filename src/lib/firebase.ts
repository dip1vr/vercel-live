import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "mock_key",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "mock_domain",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "mock_project_id",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "mock_bucket",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "mock_sender_id",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "mock_app_id",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "mock_measurement_id"
};

if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    console.warn("⚠️ WARNING: Firebase API Key is missing in environment variables!");
    console.log("Check process.env:", Object.keys(process.env).filter(k => k.startsWith('NEXT_PUBLIC_')));
} else {
    console.log("✅ Firebase API Key found:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY.slice(0, 5) + "...");
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

// Analytics can only be initialized on the client side
// Analytics can only be initialized on the client side
let analytics;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

export { app, auth, db, analytics };
