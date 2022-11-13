import React, { Component, useState, useEffect } from "react";
import './Login.scss';
import { connect, useDispatch, useSelector } from "react-redux";
import { actionUserName } from "../../../config/redux/action";
import Button from "../../../components/atoms/Button";
import { loginUserAPI } from "../../../config/redux/action";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const isLogin = useSelector((e) => e.isLogin);
    const isLoading = useSelector((e) => e.isLoading);
    // console.log('Status Login Before Login', isLogin);
    // console.log('Status Loading Before Login', isLoading);
    const dispatch = useDispatch();

    const handleLoginSubmit = (e) => {
        // console.log('Submit');
        dispatch(loginUserAPI({email, password}));
    }

    useEffect((e) => {
        if (isLogin) {
            // console.log('Status login : ', isLogin);
            // console.log('Status loading : ', isLoading);
            navigate('/');
        }
    });

    return(
        <div className="auth-container">
            <div className="auth-card">
                <p className="auth-title">Halaman Login</p>
                <input className="input" placeholder="Email" id="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input className="input" placeholder="Password" id="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <Button title="Login" onClick={(e) => handleLoginSubmit(e)} isLoading={isLoading} />
            </div>
        </div>
    )
}

//TODO Stateful Component========================
// class Login extends Component{
//     // changeUser = () => {
//     //     this.props.changeUserName();
//     // }

//     state = {
//         email: '',
//         password: '',
//     }

//     handleChangeText = (e) => {
//         this.setState({
//             [e.target.id] : e.target.value,
//         })
//     }

    // handleLoginSubmit = async () => {
    //     const navigate = useNavigate();
    //     const {email, password} = this.state;
    //     const { history } = this.props;
    //     const res = await this.props.loginAPI({email, password}).catch(err => err);

    //     console.log(res);

    //     if (res) {
    //         console.log('LOGIN SUKSES');
    //         this.setState({
    //             email: '',
    //             password: ''
    //         });
    //         // history.push('/');
    //         navigate('/dashboard');
    //     } else {
    //         console.log('LOGIN GAGAL');
    //     }
    // }

    // render(){
    //     return(
    //         <div className="auth-container">
    //             <div className="auth-card">
    //                 <p className="auth-title">Halaman Login</p>
    //                 <input className="input" placeholder="Email" id="email" type="text" onChange={this.handleChangeText} value={this.state.email} />
    //                 <input className="input" placeholder="Password" id="password" type="password" onChange={this.handleChangeText} value={this.state.password} />
    //                 <Button onClick={this.handleLoginSubmit} title="Login" isLoading={this.props.isLoading} />
    //             </div>
    //         </div>
    //     )
    // }
// }
//TODO Close Stateful Component ==========================

// const mapStateToProps = state => {
//     return {
//         isPopup: state.isPopup,
//         userName: state.user
//     }
// }

// //TODO menunggu 2 detik actionUserName() dijalankan
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeUserName: () => dispatch(actionUserName())
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         isLoading: state.isLoading
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loginAPI: (data) => dispatch(loginUserAPI(data))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;