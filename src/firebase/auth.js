import { auth, provider } from './firebase';

// Sign in
export const googleSignIn = (callback) => {
    auth.signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(result)
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        callback({ user, token })
      }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        callback({ errorCode, errorMessage, email, credential })
      });
}

// Sign out
export const doSignOut = () =>
  auth.signOut();

// ---- If using email auth ---

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Password Reset
export const doPasswordReset = (email) =>
auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
auth.currentUser.updatePassword(password);