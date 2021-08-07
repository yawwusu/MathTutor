import React from "react";
import { createUser } from "./db";
import firebase from "./firebase";

interface authContextInterface {
  user: firebase.User;
  signinWithGoogle: () => any;
  signout: () => any;
}

const authContext = React.createContext<authContextInterface | null>(null);

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return React.useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = React.useState(null);

  const handleUser = (rawUser: boolean | firebase.User) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signinWithGoogle = async () => {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return handleUser(response.user);
  };

  const signout = async () => {
    await firebase.auth().signOut();
    return handleUser(false);
  };

  React.useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user) => handleUser(user));

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGoogle,
    signout,
  };
}

const formatUser = (user: any) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
