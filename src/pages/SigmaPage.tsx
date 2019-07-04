import {Component} from 'react';
import * as React from 'react';
import MonacoEditor from "react-monaco-editor";
import * as monacoEditor from "monaco-editor";
import {Box, Button, Grid} from "grommet";
import {API} from "../api";

export class SigmaPage extends Component {
    public state = {
        code: ['(',
            '\t[',
            '\t\tx = @ this => 0,',
            '\t\tmove = @ this => \\dx => this.x := this.x + dx',
            '\t].move 5',').x'
        ].join('\n'),
    };
    public result: string = '';

    constructor(props: {}) {
        super(props);
        this.exec = this.exec.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    public editorDidMount(editor: monacoEditor.editor.IStandaloneCodeEditor, monaco: typeof monacoEditor) {
        console.log('editorDidMount', editor);
        editor.focus();
    }

    public onChange(newValue: string, e: monacoEditor.editor.IModelContentChangedEvent) {
        this.setState({
            code: newValue,
        });
    }

    public async exec() {
        try {
            const res = await API.execCode(this.state.code);
            this.result = res as string;
        } catch(e) {
            console.log(e);
        }
    }

    public render() {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <Box
                direction="row"
                justify="between"
                border={{ side: "top", color: "light-4" }}
                pad={{ top: "xsmall" }}
            >
                <MonacoEditor
                    width="800"
                    height="600"
                    language="text"
                    theme="vs"
                    value={code}
                    options={options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                />
                <Box align='start' margin="medium">
                    <Button label='Eval' onClick={this.exec} />
                    {this.result && <p>Result: {this.result}</p>}
                </Box>
            </Box>
        );
    }
}
