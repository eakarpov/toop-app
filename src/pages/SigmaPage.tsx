import {Component} from 'react';
import * as React from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monacoEditor from 'monaco-editor';
import {Box, Button, ResponsiveContext} from 'grommet';
import {API} from '../api';

export class SigmaPage extends Component {
    public state = {
        code: ['(',
            '\t[',
            '\t\tx = @ this => 0,',
            '\t\tmove = @ this => \\dx => this.x := this.x + dx',
            '\t].move 5', ').x',
        ].join('\n'),
        result: '',
        error: '',
    };

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
            const res: { errorMessage?: string; termString?: string } = await API.execCode(this.state.code);
            if ('errorMessage' in res) {
                this.setState({
                    error: res.errorMessage,
                    result: '',
                });
            } else {
                this.setState({
                    error: '',
                    result: res.termString,
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    public render() {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true,
        };
        return (
            <ResponsiveContext.Consumer>
                {size => (<Box
                    direction={(size !== 'small' && size !== 'xsmall' && size !== 'medium') ? 'row' : 'column'}
                    justify="between"
                    border={{side: 'top', color: 'light-4'}}
                    pad={{top: 'xsmall'}}
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
                        <Button label='Eval' onClick={this.exec}/>
                        {this.state.result && <p style={{wordBreak: 'break-word'}}>Result: {this.state.result}</p>}
                        {this.state.error && <p style={{wordBreak: 'break-word'}}>Error: {this.state.error}</p>}
                    </Box>
                </Box>)}
            </ResponsiveContext.Consumer>
        );
    }
}
