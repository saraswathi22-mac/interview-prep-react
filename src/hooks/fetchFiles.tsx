import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "~/firebaseConfig";
import { ArrayType } from "~/interface";

let files = collection(database, "files");

export const fetchFiles = () => {
  const [fileList, setFileList] = useState<ArrayType>([]);
  useEffect(() => {
    return onSnapshot(files, (response) => {
      setFileList(
        response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        }),
      );
    });
  }, []);
  return { fileList };
};
