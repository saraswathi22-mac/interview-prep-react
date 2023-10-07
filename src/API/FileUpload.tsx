import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebaseConfig";
import { addFiles } from "./Firestore";

export const fileUpload = (
  file: any,
  setProgress: Function,
  parentId: string,
  userEmail: string,
) => {
  const storageRef = ref(storage, `files/${file?.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      );
      setProgress(progress);
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
        addFiles(downloadURL, file.name, parentId, userEmail),
      );
    },
  );
};
