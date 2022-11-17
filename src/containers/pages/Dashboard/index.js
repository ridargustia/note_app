import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addDataToAPI, getDataFromAPI } from "../../../config/redux/action";
import './Dashboard.scss';

class Dashboard extends Component{
    state = {
        title: '',
        date: '',
        content: ''
    }

    componentDidMount() {
    //     const userData = localStorage.getItem('userData');
    //     const user = JSON.parse(userData);
        const userData = JSON.parse(localStorage.getItem('userData'));
        this.props.getNotes(userData.uid);
    }

    onChangeInput = (data) => {
        this.setState({
            [data.target.id] : data.target.value,
        })
    }

    handleSaveNote = () => {
        const {title, content} = this.state;
        const {saveNote} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'));

        const data = {
            title: title,
            date: new Date().getTime(),
            content: content,
            userId: userData.uid
            // userId: this.props.userData.uid
        }
        // console.log(data);
        saveNote(data);
    }

    render(){
        const {title, date, content} = this.state;
        const { notes } = this.props;
        console.log('Notes: ', notes);
        return(
            <div className="container">
                <div className="input-form">
                    <input type="text" placeholder="Title" className="input-title" id="title" value={title} onChange={this.onChangeInput} />
                    <textarea placeholder="Content" className="input-content" id="content" value={content} onChange={this.onChangeInput}></textarea>
                    <button onClick={this.handleSaveNote} className="save-button">Simpan</button>
                </div>
                <hr />
                {
                    notes.length > 0 ? (
                        <Fragment>
                            {
                                notes.map(note => {
                                    return (
                                        <div className="card-content" key={note.id}>
                                            <p className="title">{note.data.title}</p>
                                            <p className="date">{note.data.date}</p>
                                            <p className="content">{note.data.content}</p>
                                        </div>
                                    )
                                })
                            }
                        </Fragment>
                    ) : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
        notes: state.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveNote: (data) => dispatch(addDataToAPI(data)),
        getNotes: (data) => dispatch(getDataFromAPI(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);