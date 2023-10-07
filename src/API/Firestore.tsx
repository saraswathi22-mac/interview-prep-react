import { collection, addDoc } from "firebase/firestore";
import { database } from "~/firebaseConfig";

let files = collection(database, "files");

export const addFiles = (
  imgLink: string,
  imgName: string,
  parentId: string,
  userEmail: string,
) => {
  try {
    addDoc(files, {
      imgLink: imgLink,
      imgName: imgName,
      isFolder: false,
      parentId: parentId,
      userEmail: userEmail,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addFolder = (payload: {}) => {
  try {
    addDoc(files, {
      ...payload,
    });
  } catch (err) {
    console.log(err);
  }
};
