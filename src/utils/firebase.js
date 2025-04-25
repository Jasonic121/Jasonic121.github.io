// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, onValue, get, update } from "firebase/database";

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
export const addComment = async (name, text, position, mood = 'happy') => {
  try {
    const newCommentRef = push(commentsRef);
    const timestamp = new Date().toISOString();
    
    await set(newCommentRef, {
      name,
      text,
      position,
      timestamp,
      mood, // Add mood to the comment data
      approved: false // Default to unapproved
    });
    
    return {
      id: newCommentRef.key,
      name,
      text,
      position,
      timestamp,
      mood, // Include mood in the returned object
      approved: false
    };
  } catch (error) {
    console.error("Error adding comment: ", error);
    throw error;
  }
};

// Get all comments
export const getComments = async () => {
  return new Promise((resolve, reject) => {
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      const comments = data ? Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      })).filter(comment => comment.approved) : []; // Only return approved comments
      resolve(comments);
    }, (error) => {
      console.error("Error fetching comments: ", error);
      reject(error);
    }, {
      onlyOnce: true
    });
  });
};

// Approve a comment (for admin use)
export const approveComment = async (commentId) => {
  try {
    const commentRef = ref(database, `comments/${commentId}`);
    await update(commentRef, { approved: true });
    return true;
  } catch (error) {
    console.error("Error approving comment: ", error);
    throw error;
  }
};

export default database; 