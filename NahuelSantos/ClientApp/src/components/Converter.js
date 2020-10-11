import React, { Component } from 'react';

export class Converter extends Component {
    static displayName = Converter.name;

    constructor(props) {
        super(props);
        this.state = { name: "", number: "", convertedNumber: "", loading: false };
        this.handleConvertClick = this.handleConvertClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
    }

    handleConvertClick() {
        this.convertToWords();
    }

    handleBackClick() {
        window.history.back();
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleNumberChange(e) {
        if (/^\d*\.?\d*$/.test(e.target.value)) {
            this.setState({ number: e.target.value });
        }

    }

    static renderResult(name, convertedNumber) {
        return (
            <div>
                <p><strong>{name}</strong></p>
                <p><strong>{convertedNumber}</strong></p>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Converter.renderResult(this.state.name, this.state.convertedNumber);

        return (
            <div>
                <h1 id="tabelLabel" >Number Converter</h1>
                <p>Covert this number into words with a currency of dollars and cents.</p>
                <p>Please provide a number to convert it to words.</p>
                <div class="input-group mb-3">
                    <input id="txtName" type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Your name" />
                </div>
                <div class="input-group mb-3">
                    <input id="txtNumber" type="text" value={this.state.number} onChange={this.handleNumberChange} placeholder="Number" />
                </div>
                <button className="btn btn-primary" onClick={this.handleConvertClick}>Convert</button>
                <button className="btn btn-secondary " onClick={this.handleBackClick}>Back</button>
                {contents}
            </div>
        );
    }

    async convertToWords() {
        this.setState({ loading: true });
        fetch('numbers/' + this.state.number)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                this.setState({ convertedNumber: data.result, loading: false });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        
    }
}
