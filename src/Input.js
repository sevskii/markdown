import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserInput = this
            .handleUserInput
            .bind(this);
    }
    handleUserInput(e) {
        this
            .props
            .handleUserInput(e.target.value);
    }
    render() {
        return (
            <textarea onChange={this.handleUserInput} value={this.props.input}/>
        );
    }
};

export default Input;