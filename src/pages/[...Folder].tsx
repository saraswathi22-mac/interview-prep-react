import { useRouter } from "next/router";
import React from "react";
import ShowFiles from "~/components/ShowFiles";
import TopBar from "~/components/TopBar";
import UploadFiles from "~/components/UploadFiles";

const Folder = () => {
  const router = useRouter();
  let parentId = router?.query?.id;
  return (
    <div>
      <TopBar />
      <UploadFiles parentId={parentId as string} />
      <ShowFiles parentId={parentId as string} />
    </div>
  );
};

export default Folder;
