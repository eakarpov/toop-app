import {Component} from 'react';
import * as React from 'react';
import * as monaco from 'monaco-editor';

export class SigmaPage extends Component {
    public editor!: HTMLDivElement|null;

    public render() {
        return (
            <div ref={instance => { this.editor = instance; }} style={{ height: '300px', width: '500px' }}/>
        );
    }

    public componentDidMount(): void {
        if (this.editor) {
            monaco.editor.create(this.editor, {
                value: [
                    'function x() {',
                    '\tconsole.log("Hello world!");',
                    '}'
                ].join('\n'),
                language: 'javascript'
            });
        }
    }
}
