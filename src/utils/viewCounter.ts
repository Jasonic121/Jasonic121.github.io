import { getDatabase, ref, runTransaction, get } from "firebase/database";
import database from "./firebase";

// Increment the view count for a blog post by slug
export async function incrementViewCount(slug: string): Promise<number> {
  const viewRef = ref(database, `views/${slug}`);
  let newCount = 0;
  await runTransaction(viewRef, (current) => {
    newCount = (current || 0) + 1;
    return newCount;
  });
  return newCount;
}

// Get the current view count for a blog post by slug
export async function getViewCount(slug: string): Promise<number> {
  const viewRef = ref(database, `views/${slug}`);
  const snapshot = await get(viewRef);
  return snapshot.exists() ? snapshot.val() : 0;
} 