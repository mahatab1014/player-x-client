import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProfider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        setUser(user);
      } else {
        setLoading(false);
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signUpWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userInformation = async (full_name, profile_pic) => {
    const user = auth.currentUser;
    console.log(user);
    if (user) {
      return updateProfile(user, {
        displayName: full_name,
        photoURL: profile_pic,
      })
        .then(() => {
          console.log("Profile updated successfully");
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    } else {
      console.error("No authenticated user found.");
      return Promise.reject("No authenticated user found.");
    }
  };

  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const continueWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider);
  };
  const continueWithFacebook = () => {
    setLoading(true);
    signInWithPopup(auth, facebookProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    signOut(auth);
  };

  const AuthInfo = {
    user,
    loading,
    signUpWithEmailAndPassword,
    userInformation,
    userSignIn,
    continueWithGoogle,
    continueWithFacebook,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProfider;
