//import { useEffect } from 'react';
//import { getRedirectResult } from 'firebase/auth';
import {
    //auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../../components/sign-up-form/sign-up-form.component.jsx";

const SignIn=()=>{
    /*
    useEffect(()=>{
        (async()=>{
            const response=await getRedirectResult(auth);
            if(response){
                const userDocRef=await createUserDocumentFromAuth(response.user);
                console.log(response);
            }else{
                console.log("There was no response to log");
            };
        })();
    },[]);
    */
   const logGoogleUser=async()=>{
    const { user }=await signInWithGooglePopup();
    const userDocRef=await createUserDocumentFromAuth(user);
   };
   return (
    <div>
        <h2>Sign in to manage your orders and accounts</h2>
        <button onClick={ logGoogleUser }>Sign in with Google popup</button>
        <SignUpForm/>
    </div>
   )
};

export default SignIn;
