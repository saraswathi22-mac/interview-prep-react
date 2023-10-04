import React from "react";
import TopBar from "../TopBar";
import UploadFiles from "../UploadFiles";
import ShowFiles from "../ShowFiles";

const HomeComponent = () => {
  return (
    <div>
      <TopBar />
      <UploadFiles />
      <ShowFiles />
    </div>
  );
};

export default HomeComponent;
