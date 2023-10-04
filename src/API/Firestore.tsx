import { collection, addDoc } from "firebase/firestore";
import { database } from "~/firebaseConfig";

let files = collection(database, "files");

export const addFiles = (imgLink: string, imgName: string) => {
  try {
    addDoc(files, {
      imgLink: imgLink,
      imgName: imgName,
      isFolder: false,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addFolder = (payload: {
  folderName: string;
  isFolder: boolean;
  fileList: object;
}) => {
  try {
    addDoc(files, {
      folderName: payload.folderName,
      isFolder: payload.isFolder,
      fileList: payload.fileList,
    });
  } catch (err) {
    console.log(err);
  }
};
