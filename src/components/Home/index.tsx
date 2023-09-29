import { signIn, signOut } from "next-auth/react";
import React from "react";
import Button from "~/components/common/Button";
import useFetchSession from "~/hooks/useSession";
import styles from './Home.module.scss'

const HomeComponent = () => {
  let { session } = useFetchSession();
  return (
    <div className={styles.authBtn}>
      {session ? (
        // <Button
        //   onClick={() => signOut()}
        //   btnClass="btn-primary"
        //   title="Sign Out"
        // />
        <img className={styles.profileImg} src={session?.user.image as string} />
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

export default HomeComponent;
