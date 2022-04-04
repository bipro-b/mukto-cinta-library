import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeFirebaseAuthentication();
const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const signInUsingGoogle = () => {
        // signInWithPopup(auth, googleProvider)
        //     .then((result) => setUser(result.user))
        //     .catch((error) => setError(error.massage));
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    };



    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setError("");
            }
        });
    }, [auth]);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [auth])


    return {
        signInUsingGoogle, logOut, user, loading, error
    }
};
export default useFirebase;