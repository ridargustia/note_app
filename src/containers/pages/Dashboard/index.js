import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addDataToAPI, getDataFromAPI, updateDataAPI } from "../../../config/redux/action";
import './Dashboard.scss';

class Dashboard extends Component{
    state = {
        title: '',
        date: '',
        content: '',
        textButton: 'SIMPAN',
        noteId: ''
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
        const {title, content, textButton, noteId} = this.state;
        const {saveNote, updateNote} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'));

        const data = {
            title: title,
            date: new Date().getTime(),
            content: content,
            userId: userData.uid
            // userId: this.props.userData.uid
        }
        // console.log(data);
        if (textButton === 'SIMPAN') {
            saveNote(data);
        } else {
            data.noteId = noteId;
            updateNote(data);
        }
    }

    updateNote = (note) => {
        // console.log(note);
        this.setState({
            title: note.data.title,
            content: note.data.content,
            textButton: 'UPDATE',
            noteId: note.id
        })
    }

    cancelUpdate = () => {
        this.setState({
            title: '',
            content: '',
            textButton: 'SIMPAN'
        })
    }

    render(){
        const {title, date, content, textButton} = this.state;
        const { notes } = this.props;
        return(
            <div className="container">
                <div className="input-form">
                    <input type="text" placeholder="Title" className="input-title" id="title" value={title} onChange={this.onChangeInput} />
                    <textarea placeholder="Content" className="input-content" id="content" value={content} onChange={this.onChangeInput}></textarea>
                    {
                        textButton === 'UPDATE' ? (
                            <div className="button-wrapper">
                                <button onClick={this.cancelUpdate} className="save-button cancel">Cancel</button>
                                <button onClick={this.handleSaveNote} className="save-button">{textButton}</button>
                            </div>
                        ) : (
                            <button onClick={this.handleSaveNote} className="save-button">{textButton}</button>
                        )
                    }
                </div>
                <hr />
                {
                    notes.length > 0 ? (
                        <Fragment>
                            {
                                notes.map(note => {
                                    return (
                                        <div className="card-content" key={note.id} onClick={() => this.updateNote(note)}>
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
        getNotes: (data) => dispatch(getDataFromAPI(data)),
        updateNote: (data) => dispatch(updateDataAPI(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);