"use client";
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import Cookies from "js-cookie";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const profileUpdate = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // get current user info
  useEffect(() => {
    // set/mount the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      if (currentUser) {
        currentUser.getIdToken().then((token) => Cookies.set("token", token));
        setUser(currentUser);
        setLoading(false);
      }
      else{
        setUser(null);
        Cookies.remove("token");
      }
    });
    // clear the observer
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    logInUser,
    googleSignIn,
    profileUpdate,
    logOut,
    user,
    setUser,
    loading,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
