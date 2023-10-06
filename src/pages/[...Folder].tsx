import { useRouter } from "next/router";
import React from "react";
import ShowFiles from "~/components/ShowFiles";
import UploadFiles from "~/components/UploadFiles";

const Folder = () => {
  const router = useRouter();
  let parentId = router?.query?.id;
  return (
    <div>
      <UploadFiles parentId={(parentId = "")} />
    </div>
  );
};

export default Folder;
