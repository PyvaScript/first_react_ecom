//import { useEffect } from 'react';
//import { getRedirectResult } from 'firebase/auth';
import SignUpForm from "../../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../../components/sign-in-form/sign-in-form.component.jsx";
import { AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication=()=>{
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
   return (
    <AuthenticationContainer>
        <SignInForm/>
        <SignUpForm/>
    </AuthenticationContainer>
   )
};

export default Authentication;
