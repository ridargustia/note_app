import React, { Component } from "react";
import { connect } from "react-redux";
import { addDataToAPI } from "../../../config/redux/action";
import './Dashboard.scss';

class Dashboard extends Component{
    state = {
        title: '',
        date: '',
        content: ''
    }

    onChangeInput = (data) => {
        this.setState({
            [data.target.id] : data.target.value,
        })
    }

    handleSaveNote = () => {
        const {title, content} = this.state;
        const {saveNote} = this.props;

        const data = {
            title: title,
            date: new Date().getTime(),
            content: content,
            userId: this.props.userData.uid
        }
        // console.log(data);
        saveNote(data);
    }

    render(){
        const {title, date, content} = this.state;
        return(
            <div className="container">
                <div className="input-form">
                    <input type="text" placeholder="Title" className="input-title" id="title" value={title} onChange={this.onChangeInput} />
                    <textarea placeholder="Content" className="input-content" id="content" value={content} onChange={this.onChangeInput}></textarea>
                    <button onClick={this.handleSaveNote} className="save-button">Simpan</button>
                </div>
                <hr />
                <div className="card-content">
                    <p className="title">Title</p>
                    <p className="date">14 Nov 2022</p>
                    <p className="content">Contents Notes</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveNote: (data) => dispatch(addDataToAPI(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);