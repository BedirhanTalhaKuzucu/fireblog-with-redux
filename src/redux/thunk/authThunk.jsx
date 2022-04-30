import { setCurrentUser, clearCurrentUser } from "../actions/authActions";
import { auth } from "../../helpers/authFunctions";
import { onAuthStateChanged } from "firebase/auth";

export const userObserver = (dispatch) => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            dispatch(setCurrentUser(currentUser));
        }else{
            dispatch(clearCurrentUser())
        }
    })
};