import React from "react";
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from "~/hooks/fetchFiles";
import { AiFillFolder } from "react-icons/ai";
import { useRouter } from "next/router";

const ShowFiles = ({parentId}) => {
  const router = useRouter();
  let { fileList } = fetchFiles(parentId);
  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };

  return (
    <div className={styles.filesGrid}>
      {fileList.map(
        (file: {
          imgLink: "";
          imgName: "";
          isFolder: false;
          folderName: "";
          id: "";
        }) => {
          return (
            <div key={file.id}>
              {file.isFolder ? (
                <div
                  className={`${styles.files} bg-green-200`}
                  onClick={() => router.push(`/folder?id=${file.id}`)}
                >
                  <AiFillFolder size={80} />
                  <p>{file.folderName}</p>
                </div>
              ) : (
                <div
                  className={`${styles.files} bg-green-200`}
                  onClick={() => openFile(file.imgLink)}
                >
                  <img className={styles.imageLink} src={file.imgLink} />
                  <p>{file.imgName}</p>
                </div>
              )}
            </div>
          );
        },
      )}
    </div>
  );
};

export default ShowFiles;
