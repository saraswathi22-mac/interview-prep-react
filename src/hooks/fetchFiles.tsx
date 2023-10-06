import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "~/firebaseConfig";
import { ArrayType } from "~/interface";

let files = collection(database, "files");

export const fetchFiles = (parentId: string) => {
  const [fileList, setFileList] = useState<ArrayType>([]);

  const getFolders = () => {
    if(!parentId) {

      onSnapshot(files, (response) => {
        setFileList(
          response.docs.map((item) => {
            return { ...item.data(), id: item.id };
          }).filter((item: any) => item.parentId === '')
        );
      });
    }
    else {
      onSnapshot(files, (response) => {
        setFileList(
          response.docs.map((item) => {
            return { ...item.data(), id: item.id };
          }).filter((item: any) => item.parentId === parentId)
        );
      });
    }
  };

  useEffect(() => {
    getFolders();
  }, [parentId]);
  
  return { fileList };
};
