import React, { Component } from 'react'
import Editor from './editor/editor'
import { connect } from 'react-redux';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editVal:""
        }
    }

    onEditorValChange = (newVal) => {

    }

    render(){
        return(
            <main className="content-main">
                <Editor onEditorValChange={this.onEditorValChange}/>
            </main>
        )
    }
}

export default MainContent;