import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';

const firebaseConfig={

    apiKey: "AIzaSyA-xxgvpjXOSlt4VvJfSo7RgeBEyvDfEnU",

    authDomain: "rubber-to-runway.firebaseapp.com",

    projectId: "rubber-to-runway",
    
    storageBucket: "rubber-to-runway.appstop.com",

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

export const signInWithGoogleRedirect=()=>signInWithRedirect(auth, provider);

export const db=getFirestore();

export const addCollectionsAndDocuments= async (collectionKey, objectsToAdd) =>{
    const collectionRef=collection(db, collectionKey);
    const batch=writeBatch(db);
    objectsToAdd.forEach((object)=>{
        const docRef=doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
};

export const getCollectionsAndDocuments= async ()=> {
    const collectionRef=collection(db,'categories');
    const q=query(collectionRef);
    const querySnapShot=await getDocs(q);
    const categoryMap=querySnapShot.docs.reduce((acc, docSnapshot)=>{
        const { title, items }=docSnapshot.data();
        acc[title.toLowerCase()]=items;
        return acc;
    }, {});

    return categoryMap;
}

export const createUserDocumentFromAuth=async(userAuth, additionalInformation={})=>{

    if(!userAuth) return;

    const userDocRef=doc(db,'users',userAuth.uid);
    const snapShot=await getDoc(userDocRef);
    console.log(snapShot.exists());
    if(!snapShot.exists()){

        const { displayName, email }=userAuth;
        const createdAt=new Date();

        try{

            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });

        }catch(error){
            console.log("Error creating user document", error.message);
        };
        
    };

    return userDocRef;

};

export const createAuthUserWithEmailAndPassword=async(email, password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword=async(email, password)=>{
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password);
};

export const signUserOut=async()=>await signOut(auth);

export const onAuthStateChangedListener=(callback)=>{
    onAuthStateChanged(auth, callback);
};
