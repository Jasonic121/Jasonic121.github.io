// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, onValue, get, update } from "firebase/database";
import { collection, addDoc, query, where, orderBy, getDocs } from "firebase/firestore";
import { serverTimestamp, updateDoc, doc } from "firebase/firestore";

// Your web app's Firebase configuration
// Using environment variables for security
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the comments collection
const commentsRef = ref(database, 'comments');

// Add a new comment
export const addComment = async (name, text, position, mood) => {
  try {
    const commentsRef = collection(db, 'comments');
    await addDoc(commentsRef, {
      name,
      text,
      position,
      mood,
      timestamp: serverTimestamp(),
      approved: false
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};

// Get all comments
export const getComments = async () => {
  try {
    const commentsRef = collection(db, 'comments');
    const q = query(commentsRef, where('approved', '==', true), orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

// Approve a comment (for admin use)
export const approveComment = async (commentId) => {
  try {
    const commentRef = doc(db, 'comments', commentId);
    await updateDoc(commentRef, { approved: true });
  } catch (error) {
    console.error("Error approving comment:", error);
    throw error;
  }
};

export default database; 