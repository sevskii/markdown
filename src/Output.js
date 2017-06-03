import React from 'react';
import marked from 'marked';
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

class Output extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                className="output"
                dangerouslySetInnerHTML={{
                __html: marked(this.props.input)
            }}></div>
        );
    }
}

export default Output;