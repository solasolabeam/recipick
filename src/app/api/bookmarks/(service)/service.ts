import { getServerSession } from "next-auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import { authOptions } from "@/utills/authOptions";

interface Bookmark {
  id: string;
  [key: string]: string | number | boolean | object;
}

export async function getBookMarks() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    throw new Error("User email is not available");
  }

  const bookmarksRef = collection(db, "users", session.user.email, "bookmarks");

  const querySnapshot = await getDocs(bookmarksRef);
  const bookmarks: Bookmark[] = [];
  querySnapshot.forEach((doc) => {
    bookmarks.push({ id: doc.id, ...doc.data() });
  });
  return bookmarks;
}

export async function toggleBookMark(data: Bookmark, id: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    throw new Error("User email is not available");
  }

  const bookmarksRef = doc(db, "users", session.user.email, "bookmarks", id);
  const bookmarkSnap = await getDoc(bookmarksRef);

  if (bookmarkSnap.exists()) {
    await deleteDoc(bookmarksRef);
  } else {
    await setDoc(bookmarksRef, data);
  }

  return bookmarkSnap.data();
}
