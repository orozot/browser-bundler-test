import React, { Component } from 'react'
import Editor from './editor/editor'

class MainContent extends Component {
    render(){
        return(
            <main className="content-main">
                <Editor/>
            </main>
        )
    }
}

export default MainContent;