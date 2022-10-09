import React, { Component } from "react";
import './Register.scss';
// import appFirebaseConfig from "../../../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

class Register extends Component{
    state = {
        email: '',
        password: '',
    }

    handleChangeText = (e) => {
        // console.log(e.target.id);
        this.setState({
            [e.target.id] : e.target.value,
        })
    }

    handleRegisterSubmit = () => {
        // console.log('Email => ', this.state.email);
        // console.log('Password => ', this.state.password);
        const {email, password} = this.state;
        console.log('Data before add => ', email, password);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Halaman Register</p>
                    <input className="input" placeholder="Email" id="email" type="text" onChange={this.handleChangeText} />
                    <input className="input" placeholder="Password" id="password" type="password" onChange={this.handleChangeText} />
                    <button className="btn" onClick={this.handleRegisterSubmit}>Register</button>
                </div>

                {/* <button>Dashboard</button> */}
            </div>
        )
    }
}

export default Register;