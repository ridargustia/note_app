import React, { Component } from "react";
import { connect } from "react-redux";
import { actionUserName } from "../../../config/redux/action";

class Login extends Component{
    changeUser = () => {
        this.props.changeUserName();
    }

    render(){
        return(
            <div>
                <p>Halaman Login { this.props.userName }</p>
                <button onClick={this.changeUser}>Ubah Username</button>
                <button>Register</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isPopup: state.isPopup,
        userName: state.user
    }
}

//TODO menunggu 2 detik actionUserName() dijalankan
const mapDispatchToProps = (dispatch) => {
    return {
        changeUserName: () => dispatch(actionUserName())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);