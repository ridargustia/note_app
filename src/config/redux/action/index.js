import "../../../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

//TODO Cara menggunakan asynchronuous function (Implementasi Redux Thunk), Menunggu waktu 2 detik maka actionUserName dijalankan pada dispatch. Tanpa redux thunk fungsi async ini tidak berjalan
export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({type: 'CHANGE_USER', value: 'Ridar'})
    }, 2000);
}

export const registerUserAPI = (data) => (dispatch) => {
    dispatch({type: 'CHANGE_LOADING', value: true});
    return(
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // console.log(user);
            dispatch({type: 'CHANGE_LOADING', value: false});
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            dispatch({type: 'CHANGE_LOADING', value: false});
        })
    )
}