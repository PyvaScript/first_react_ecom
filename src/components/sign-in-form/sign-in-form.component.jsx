import { useState } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component.jsx";
import FormInput from "../form-input/form-input.component.jsx";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils.js";
import { SignInContainer } from "./sign-in-form.styles.jsx";

const defaultFormFields={
    email: "",
    password: "",
};

const SignInForm=()=>{
    const [formFields, setFormFields]=useState(defaultFormFields);
    const { email, password }=formFields;

    const resetFormFields=()=>{
        setFormFields(defaultFormFields);
    };

    const handleSubmit=async(event)=>{
        event.preventDefault();
        try {
            const { user }=await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        }catch(error) {
            switch(error.code) {
                case "auth/wrong-password":
                    alert("Incorrect password. Please try again");
                    break;
                case "auth/user-not-found":
                    alert("Account not found. Please try again");
                    break;
                default:
                    console.log("Error unknown",error);
            };
        };
    };

    const handleChange=(event)=>{
        const { name, value }=event.target;
        setFormFields({...formFields, [name]:value});
    };

    const signInWithGoogle=async()=>{
        await signInWithGooglePopup();
    };

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email address here</span>
            <form onSubmit={ handleSubmit }>
                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    value={ email }
                    onChange={ handleChange }
                    required
                />
                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    value={ password }
                    onChange={ handleChange }
                    required
                />
                <div className="buttons-container">
                    <Button buttonType={ BUTTON_TYPE_CLASSES.base } type="submit">Sign In</Button>
                    <Button buttonType={ BUTTON_TYPE_CLASSES.google } type="button" onClick={ signInWithGoogle }>Google Sign in</Button>
                </div>
            </form>
        </SignInContainer>
    )
};

export default SignInForm;
