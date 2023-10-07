import { useRouter } from "next/router";
import React from "react";
import ShowFiles from "~/components/ShowFiles";
import TopBar from "~/components/TopBar";
import UploadFiles from "~/components/UploadFiles";
import useFetchSession from "~/hooks/useSession";

const Folder = () => {
  const router = useRouter();
  let parentId = router?.query?.id;
  let { session } = useFetchSession();

  return (
    <div>
      <TopBar />
      {session ? (
        <>
          <UploadFiles parentId={parentId as string} />
          <ShowFiles parentId={parentId as string} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Folder;
