import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } }

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {

            const {email, displayName, photoURL} = result.user;
            // console.log(photoURL);
            const signedInUser = {name:displayName, email:email, image:photoURL} 
            setLoggedInUser(signedInUser);
            history.replace(from);


        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }


    return (
        <div>
            <h1>This is login</h1>
            <Button variant='info' onClick={handleGoogleSignIn}>Sign in with Google</Button>
        </div>
    );
};

export default Login;