import React, { Component } from 'react';

export class Converter extends Component {
	static displayName = Converter.name;

	constructor(props) {
		super(props);
		this.state = { name: "", number: "", convertedNumber: "", isLoading: false, isValidForm: false, showResult: false };
		this.handleConvertClick = this.handleConvertClick.bind(this);
		this.handleBackClick = this.handleBackClick.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleNumberChange = this.handleNumberChange.bind(this);
		this.handleResetClick = this.handleResetClick.bind(this);
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

	handleResetClick(e) {
		this.setState({ name: "", number: "", convertedNumber: "", isLoading: false, isValidForm: false, showResult: false });
	}

	handleNumberChange(e) {
		if (/^\d*\.?\d*$/.test(e.target.value)) {
			this.setState({ number: e.target.value });
			this.setState({ isValidForm: this.state.number.length > 0 });
		}
	}

	static renderResult(showResult, name, convertedNumber) {
		let result = showResult
			? <div class="result"><p><strong>{name}</strong></p><p><strong>{convertedNumber}</strong></p></div>
			: ""
		return (
			<div>
				{result}
			</div>
		);
	}

	render() {
		let contents = this.state.isLoading
			? <p><em>Loading...</em></p>
			: Converter.renderResult(this.state.showResult, this.state.name, this.state.convertedNumber);

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
				<button className="btn btn-primary" onClick={this.handleConvertClick} disabled={!this.state.isValidForm}>Convert</button>
				<button className="btn btn-danger " onClick={this.handleResetClick}>Reset</button>
				<button className="btn btn-secondary " onClick={this.handleBackClick}>Back</button>
				{contents}
			</div>
		);
	}

	async convertToWords() {
		this.setState({ isLoading: true });
		fetch('numbers/' + this.state.number)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Something went wrong');
				}
			})
			.then(data => {
				this.setState({ convertedNumber: data.result, isLoading: false, showResult: true });
			})
			.catch((error) => {
				console.error('Error:', error);
			});

	}
}
