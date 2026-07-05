import {getAuth, onAuthStateChanged, signInWithEmailLink, sendSignInLinkToEmail, isSignInWithEmailLink} from "firebase/auth";
import firebaseApp from "@/firebase/config";

const auth = getAuth(firebaseApp)

export {
    auth,
    onAuthStateChanged,
    signInWithEmailLink,
    sendSignInLinkToEmail,
    isSignInWithEmailLink
}