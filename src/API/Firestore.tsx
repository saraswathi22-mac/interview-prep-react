import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { database } from "~/firebaseConfig";

let files = collection(database, "files");

export const addFiles = (imgLink: string, imgName: string) => {
  try {
    addDoc(files, {
      imgLink: imgLink,
      imgName: imgName,
    });
  } catch (err) {
    console.log(err);
  }
};
