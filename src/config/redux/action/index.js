// import "../../../config/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { database } from "../../../config/firebase";
import { getDatabase, ref, set, push } from "firebase/database";
const auth = getAuth();
const db = getDatabase();

//TODO Cara menggunakan asynchronuous function (Implementasi Redux Thunk), Menunggu waktu 2 detik maka actionUserName dijalankan pada dispatch. Tanpa redux thunk fungsi async ini tidak berjalan
export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({type: 'CHANGE_USER', value: 'Ridar'})
    }, 2000);
}

export const registerUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value: true});
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // console.log(user);
            dispatch({type: 'CHANGE_LOADING', value: false});
            resolve(true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            dispatch({type: 'CHANGE_LOADING', value: false});
            reject(false);
        })
    });
}

export const loginUserAPI = (data) => (dispatch) => {
    // return new Promise((resolve, reject) => {
        // console.log('Proses action');
        dispatch({type: 'CHANGE_LOADING', value: true});
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // console.log(user);
            const dataUser = {
                email: user.email,
                uid: user.uid,
                emailVerified: user.emailVerified,
                refreshToken: user.refreshToken
            }

            dispatch({type: 'CHANGE_LOADING', value: false});
            dispatch({type: 'CHANGE_LOGIN', value: true});
            dispatch({type: 'CHANGE_USER', value: dataUser});
            // resolve(true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            dispatch({type: 'CHANGE_LOADING', value: false});
            dispatch({type: 'CHANGE_LOGIN', value: false});
            // reject(false);
        })
    // });

}

export const addDataToAPI = (data) => (dispatch) => {
    push(ref(db, 'notes/' + data.userId), {
        title: data.title,
        date: data.date,
        content: data.content
    })
}