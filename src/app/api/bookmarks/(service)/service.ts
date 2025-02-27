import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "@/app/lib/firebase";

interface Bookmark {
  id: string;
  [key: string]: string | number | boolean | object;
}

export async function getBookMarks() {
  const session = await getServerSession(authOptions);
  const bookmarksRef = collection(db, "bookmarks");

  const q = query(bookmarksRef, where("userId", "==", session?.user?.email));
  const querySnapshot = await getDocs(q);

  const bookmarks: Bookmark[] = [];
  querySnapshot.forEach((doc) => {
    bookmarks.push({ id: doc.id, ...doc.data() });
  });
  return bookmarks;
}

export async function addBookMark(data: Bookmark) {
  const bookmarksRef = doc(collection(db, "bookmarks"));
  await setDoc(bookmarksRef, data);
}
