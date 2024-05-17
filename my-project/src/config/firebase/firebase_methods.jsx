import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, } from "firebase/auth";
import { auth, database } from "./";
import { onValue, ref, set } from "firebase/database";

const create_account = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

const login_account = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });
};

function write_user_data(user_id, data) {
  return set(ref(database, "users/" + user_id), {
    ...data,
  });
}

const read_user_data = () => {
  const reference = ref(database, "users/" + user_id);
  onValue(reference, (snapshot) => {
    const data = snapshot.val();
  });
};



const signout_user = () => {
  return
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}



const onAuthState = () => {
  return

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

export { create_account, login_account, write_user_data, signout_user, onAuthState };
