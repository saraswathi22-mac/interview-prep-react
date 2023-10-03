import React, { ChangeEvent, useState } from "react";
import styles from "./Upload.module.scss";
import Button from "../common/Button/Button";
import { fileUpload } from "~/API/FileUpload";

const UploadFiles = () => {
  const [isFileVisible, setFileVisible] = useState(false);

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(file);
  };

  return (
    <div className={styles.uploadMain}>
      <Button
        onClick={() => setFileVisible(!isFileVisible)}
        title="Add a File"
        btnClass="btn-primary"
      />
      {isFileVisible ? (
        <input
          onChange={(event) => uploadFile(event)}
          type="file"
          className="file-input w-full max-w-xs"
        />
      ) : (
        <></>
      )}
      <Button title="Add a Folder" btnClass="btn-success" />
    </div>
  );
};

export default UploadFiles;
