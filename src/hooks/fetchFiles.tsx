import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "~/firebaseConfig";
import { ArrayType } from "~/interface";

let files = collection(database, "files");

export const fetchFiles = (parentId: string, userEmail: string) => {
  const [fileList, setFileList] = useState<ArrayType>([]);

  const getFolders = () => {
    if (userEmail) {
      let emailQuery = query(files, where("userEmail", "==", userEmail));
      if (!parentId) {
        onSnapshot(emailQuery, (response) => {
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter((item: any) => item.parentId === ""),
          );
        });
      } else {
        onSnapshot(emailQuery, (response) => {
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter((item: any) => item.parentId === parentId),
          );
        });
      }
    }
  };

  useEffect(() => {
    getFolders();
  }, [parentId, userEmail]);

  return { fileList };
};
