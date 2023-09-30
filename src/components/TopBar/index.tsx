import { signIn, signOut } from "next-auth/react";
import React from "react";
import Button from "~/components/common/Button/Button";
import useFetchSession from "~/hooks/useSession";
import styles from './TopBar.module.scss'

const TopBar = () => {
  let { session } = useFetchSession();
  return (
    <div className={styles.authBtn}>
      {session ? (
        <img onClick={() => signOut()} className={styles.profileImg} src={session?.user.image as string} />
      ) : (
        <Button
          onClick={() => signIn()}
          btnClass="btn-primary"
          title="Sign Up"
        />
        
      )}
    </div>
  );
};

export default TopBar;
