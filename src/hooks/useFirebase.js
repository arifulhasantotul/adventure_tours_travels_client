import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { initAuthentication } from "../Firebase/firebase.init";

initAuthentication();

const useFirebase = () => {
   const [user, setUser] = useState({});
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(true);

   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();

   const signInUsingGoogle = () => {
      setIsLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const registerUsingEmail = (email, password, checkPassword) => {
      if (password.length < 8) {
         setError("Password should be more then 8 characters");
         return;
      }
      if (password !== checkPassword) {
         setError("Both password should be same");
         return;
      }

      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signInUsingEmail = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const handleLogout = () => {
      setIsLoading(true);
      signOut(auth)
         .then(() => {
            setUser({});
         })
         .catch((error) => {
            setError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         } else {
            setUser({});
         }
         setIsLoading(false);
      });
      return unsubscribed;
   }, [auth]);

   return {
      user,
      setUser,
      error,
      setError,
      isLoading,
      setIsLoading,
      registerUsingEmail,
      signInUsingEmail,
      signInUsingGoogle,
      handleLogout,
   };
};

export default useFirebase;
