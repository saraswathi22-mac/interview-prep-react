import React from "react";
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from "~/hooks/fetchFiles";
import { access } from "fs";
import { AiFillFileText } from "react-icons/ai";

const ShowFiles = () => {
  let { fileList } = fetchFiles();
  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };

  return (
    <div className={styles.filesGrid}>
      {fileList.map((file: { imgLink: ""; imgName: "" }) => {
        return (
          <div>
            <div
              className={`${styles.files} bg-green-200`}
              onClick={() => openFile(file.imgLink)}
            >
              <AiFillFileText size={80} />
              <p>{file.imgName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowFiles;
