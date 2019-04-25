import React, { Component } from 'react';
import axios from 'axios';
import './List.css';

export default class List extends Component {
	constructor() {
		super();
		this.state = {
            quotes: [],
            alphabetized: [],
            highestPrice: [],
            lowestPrice: [],
			policyMax: false,
			bestSeller: false,
			whatSection: false,
            whatType: false
		};
	}

	componentDidMount() {
		axios.get('http://localhost:8080/quotes/').then((response) => {
			this.setState({ quotes: response.data.quotes });
        });
	}

	handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
    };
    // Trying to pass in the event from the option selected
    // and sort based on it's property.
    handleChange = (e) => {
        if(e.target.value == this.state.highestPrice){
            this.sortHighest()
        }
        if(e.target.value == this.state.lowestPrice){
            this.sortLowest()
        }
        if(e.target.value == this.state.alphabetized){
            this.alphabetize()
        }
    };
    
    alphabetize = () => {
        var alphabetizer = [];
        for(let i = 0; i < this.state.quotes.length; i++){
            alphabetizer.push(this.state.quotes[i]);
        }
        alphabetizer.sort((a, b) => {
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
        this.setState({alphabetized: alphabetizer})
    }

    sortHighest = () => {
        var priceSorter = [];
        for(let i = 0; i < this.state.quotes.length; i++){
            priceSorter.push(this.state.quotes[i]);
        }
        priceSorter.sort((a, b) => {
            if(a.price < b.price) { return -1; }
            if(a.price > b.price) { return 1; }
            return 0;
        })
        this.setState({highestPrice: priceSorter})
    }

    sortLowest = () => {
        var priceSorter = [];
        for(let i = 0; i < this.state.quotes.length; i++){
            priceSorter.push(this.state.quotes[i]);
        }
        priceSorter.sort((a, b) => {
            if(a.price > b.price) { return -1; }
            if(a.price < b.price) { return 1; }
            return 0;
        })
        this.setState({lowestPrice: priceSorter})
    }

	render() {
        if(this.state.alphabetized.length < 1){
            var quoteToDisplay = this.state.quotes
			.filter(elem => {
				const { policyMax, bestSeller, whatType, whatSection } = this.state;
				if (!policyMax) {
					return elem.price;
				}
				if (!bestSeller) {
					return elem.bestSellers;
				}
				if (!whatType) {
					return elem.type;
				}
				if (!whatSection) {
					return elem.section;
				}
			})
			.map((elem, i) => {
				return (
					<div key={i} id="eachList">
						<div id="eachName">{elem.name}</div>
						<div id="firstLine">
							Price:<span>{elem.price}</span>
							Best Seller:<span>{elem.bestSellers}</span>
						</div>
						<div id="secondLine">
							Description:<span>{elem.description}</span>
							Section:<span>{elem.section}</span>
							Type:<span>{elem.type}</span>
						</div>
					</div>
				);
            });
        }
        else {
            var quoteToDisplay = this.state.alphabetized
			.filter(elem => {
				const { policyMax, bestSeller, whatType, whatSection } = this.state;
				if (!policyMax) {
					return elem.price;
				}
				if (!bestSeller) {
					return elem.bestSellers;
				}
				if (!whatType) {
					return elem.type;
				}
				if (!whatSection) {
					return elem.section;
				}
			})
			.map((elem, i) => {
				return (
					<div key={i} id="eachList">
						<div id="eachName">{elem.name}</div>
						<div id="firstLine">
							Price:<span>{elem.price}</span>
							Best Seller:<span>{elem.bestSellers}</span>
						</div>
						<div id="secondLine">
							Description:<span>{elem.description}</span>
							Section:<span>{elem.section}</span>
							Type:<span>{elem.type}</span>
						</div>
					</div>
				);
            });
        }
		return (
			<div className="List">
				<p className="sort">
					Sort by:
                    <select onChange={this.alphabetize}>
                        <option value={null}></option>
						<option value={this.state.alphabetized} name='sortName'>
							name
						</option>
						<option value={this.state.highestPrice} name='highestPrice'>
							highest price
						</option>
						<option value={this.state.lowestPrice} name='lowestPrice'>
							lowest price
						</option>
					</select>
				</p>
				<form>
					<p>Filter By:</p>
					<label>
						Policy Max{' '}
						<input
							type="checkbox"
							name="policyMax"
							checked={this.state.policyMax}
							onChange={this.handleInputChange}
						/>
					</label>
					<label>
						Best Seller<input
							type="checkbox"
							name="bestSeller"
							checked={this.state.bestSeller}
							onChange={this.handleInputChange}
						/>
					</label>
					<label>
						Type<input
							type="checkbox"
							name="whatType"
							checked={this.state.whatType}
							onChange={this.handleInputChange}
						/>
					</label>
					<label>
						Section<input
							type="checkbox"
							name="whatSection"
							checked={this.state.whatSection}
							onChange={this.handleInputChange}
						/>
					</label>
				</form>
				<div>{quoteToDisplay}</div>
			</div>
		);
	}
}
