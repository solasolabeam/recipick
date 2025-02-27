import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

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
    console.log("doc.data()", doc.data());
  });
  return bookmarks;
}

export async function addBookMark(data: Bookmark) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    throw new Error("User email is not available");
  }

  const bookmarksRef = doc(
    db,
    "users",
    session.user.email,
    "bookmarks",
    data.RCP_SEQ.toString(),
  );
  await setDoc(bookmarksRef, data);
}
