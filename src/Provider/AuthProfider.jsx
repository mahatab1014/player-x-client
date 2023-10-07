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
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProfider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(true);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userInformation = async (full_name, profile_pic) => {
    const user = auth.currentUser;

    if (user) {
      return updateProfile(user, {
        displayName: full_name,
        photoURL: profile_pic,
      })
        .then(() => {
          // Profile updated successfully
          console.log("Profile updated successfully");
        })
        .catch((error) => {
          // Handle any errors that occur during the update
          console.error("Error updating profile:", error);
        });
    } else {
      // Handle the case when there is no authenticated user
      console.error("No authenticated user found.");
      return Promise.reject("No authenticated user found.");
    }
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const continueWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  const continueWithFacebook = () => {
    signInWithPopup(auth, facebookProvider);
  };

  const AuthInfo = {
    user,
    loading,
    signUpWithEmailAndPassword,
    userInformation,
    userSignIn,
    continueWithGoogle,
    continueWithFacebook,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProfider;
