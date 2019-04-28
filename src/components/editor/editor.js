import React, { Component } from 'react';
import styles from './editor.module.scss';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef()
    }
    componentDidMount() {
        this.monacoEditor = monaco.editor.create(this.editorRef.current,{
            value:`console.log("hello,world")`,
            language:"javascript",
            theme: "vs-dark"
        });

        this.monacoEditor.onDidChangeModelContent((event)=>{
            const newVal = this.monacoEditor.getValue();
            debugger;
        })

    }

    componentWillUnmount() {
        this.monacoEditor && this.monacoEditor.dispose();
    }

    render() {
        return (
            <div className={styles.editorContainer}>
                <div ref={this.editorRef} className={styles.editor}/>
            </div>
        )
    }
}

export default Editor;