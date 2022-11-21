import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils.js";

const signIn=()=>{
    const logGoogleUser=async()=>{
        const { user }=await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h2>Sign in to manage your orders</h2>
            <button onClick={logGoogleUser}>Sign in with Google popups</button>
        </div>
    )
}

export default signIn;
