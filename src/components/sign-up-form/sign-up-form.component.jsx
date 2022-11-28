import { useState } from 'react';
import FormInput from "../form-input/form-input.component.jsx";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js';
import "./sign-up-form.styles.scss";
import Button from "../button/button.component.jsx";

const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
};

const SignUpForm=()=>{
    const [formFields, setFormFields]=useState(defaultFormFields);
    const { displayName, email, password, confirmPassword }=formFields;

    const resetFormFields=()=>{
        setFormFields(defaultFormFields);
    };

    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(password!==confirmPassword){
            alert("The passwords do not match");
            return;
        };
        try{
            const { user }=await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
        }catch(error){
            if(error.code==="auth/email-already-in-use"){
                alert("Cannot create user, email already in use");
            }else{
                console.log("User creation encountered an error",error);
            }
        };
    };
    const handleChange=(event)=>{
        console.log(event.target);
        const { name, value}=event.target;
        console.log(name);
        console.log(value);
        setFormFields({...formFields, [name]:value});
    };
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email address here.</span>
            <form onSubmit={ handleSubmit }>
                <FormInput
                    label="Display Name"
                    type="text"
                    name="displayName"
                    value={ displayName }
                    onChange={ handleChange }
                    required
                />
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
                <FormInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={ confirmPassword }
                    onChange={ handleChange }
                    required
                />
                <Button type="submit">Sign up!</Button>
            </form>
        </div>
    )
};

export default SignUpForm;
