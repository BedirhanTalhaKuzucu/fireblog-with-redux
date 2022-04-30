import app from "./firebase";
import { getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword, 
onAuthStateChanged, 
signOut, 
GoogleAuthProvider, 
signInWithPopup, 
updateProfile } from "firebase/auth";
import { toastSuccessNotify, toastErrorNotify } from "../helpers/toastNotify";

export const auth = getAuth(app);

export const createUser = async (email, password, username, navigate) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
            displayName: username,
        });
        navigate("/");
        toastSuccessNotify("Registered successfully!")
    } catch (error) {
        const errorCode = error.code;
        // const errorMessage = error.message;
        toastErrorNotify(errorCode)
    }
}

export const login = async (email, password, navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password);
        setTimeout(() => {
            toastSuccessNotify("Logged in successfully!");
        }, 2000)
        navigate("/");
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        toastErrorNotify(errorMessage)
    }
};

// export const userObserver = (dispatch, setCurrentUser ) => {
//     onAuthStateChanged(auth, (currentUser) => {
//         if (currentUser) {
//             dispatch(setCurrentUser(currentUser));
//         } else {
//             // User is signed out
//             return false ;
//         }
//     })
// };

export const logOut = () => {
    signOut(auth);
    toastSuccessNotify("Logged out successfully!")
};

export const signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            navigate("/");
            toastSuccessNotify("Login successfully!");
        })
        .catch((error) => {
            // Handle Errors here.
            console.log(error);
        });
};