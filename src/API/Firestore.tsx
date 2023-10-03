import { collection, addDoc } from "firebase/firestore";
import { database } from "~/firebaseConfig";

let files = collection(database, "files");

export const addFiles = (imgLink: string) => {
  try {
    addDoc(files, {
      imgLink: imgLink,
    });
  } catch (err) {
    console.log(err);
  }
};
