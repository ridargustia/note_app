import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component{
    render(){
        return(
            <div>
                <p>Halaman Login { this.props.isPopup }</p>
                <button>Dashboard</button>
                <button>Register</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isPopup: state.isPopup
    }
}

export default connect(mapStateToProps)(Login);