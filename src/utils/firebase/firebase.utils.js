import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyA-xxgvpjXOSlt4VvJfSo7RgeBEyvDfEnU",
  
    authDomain: "rubber-to-runway.firebaseapp.com",
  
    projectId: "rubber-to-runway",
  
    storageBucket: "rubber-to-runway.appspot.com",
  
    messagingSenderId: "345143883557",
  
    appId: "1:345143883557:web:5336c0d8d812d8863acccc"
  
};

const firebaseapp=initializeApp(firebaseConfig);

const provider=new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account',
});

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth, provider);
export const db=getFirestore();
export const createUserDocumentFromAuth=async(userAuth)=>{
    const userDocRef=doc(db, 'users', userAuth.uid);
    const snapShot=await getDoc(userDocRef);
    console.log(snapShot.exists());
    if(!snapShot.exists()){
        const {displayName, email}=userAuth;
        const createdAt=new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log("Error creating user document", error.message);
        }
    }
    return userDocRef;
};