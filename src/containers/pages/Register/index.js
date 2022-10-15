import React, { Component } from "react";
import './Register.scss';
import "../../../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Button from "../../../components/atoms/Button";
import { connect } from "react-redux";
import { registerUserAPI } from "../../../config/redux/action";
const auth = getAuth();

class Register extends Component{
    state = {
        email: '',
        password: '',
        // isLoading: false
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
        // console.log('Data before add => ', email, password);
        // this.setState({
        //     isLoading: true
        // });
        // setTimeout(() => {
        //     this.setState({
        //         isLoading: false
        //     });
        // }, 5000);
        this.props.registerAPI({email, password});
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Halaman Register</p>
                    <input className="input" placeholder="Email" id="email" type="text" onChange={this.handleChangeText} />
                    <input className="input" placeholder="Password" id="password" type="password" onChange={this.handleChangeText} />
                    <Button onClick={this.handleRegisterSubmit} title="Register" isLoading={this.props.isLoading} />
                </div>

                {/* <button>Dashboard</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerAPI: (data) => dispatch(registerUserAPI(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);