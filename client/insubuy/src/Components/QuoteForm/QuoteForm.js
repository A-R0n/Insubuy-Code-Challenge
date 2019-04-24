import React, {Component} from 'react';

export default class QuoteForm extends Component {
    constructor(){
        super();

        this.state = {
            val: 0
        }
    }
    validateForm = () => {
		var missing = ['The following fields are incomplete:'];
		for (let i = 0; i <= 6; i++) {
			if (document.forms['QuoteForm']['end'].value > document.forms['QuoteForm']['start'].value) {
                continue;
                // if this reaches here make fetch call to db
                // take values from db create view in Results
            }
            else {
                console.log('end is not greater than start')
            }
            
		}
		console.log(missing);  
    }

    startDateCreated = (start) => {
        this.setState({val: start})
        console.log(this.state.val)
    }
    render(){
    var todayTime = new Date();
        var month = todayTime.getMonth() + 1;
        var day = todayTime.getDate();
        var year = todayTime.getFullYear();
        var rightNow = year + '-' + 0 + month + '-' + day;
        return (
            // Input type: 'date' responsive for Chrome 20 and Opera 11,
            // but not supported in Safari or Internet Explorer 11 and earlier versions.
            // Input 'name' supported in Chrome 1.0, IE 2.0, FireFox 1.0, Safari 1.0, and Opera 1.0
            <form name="QuoteForm" action="/api" onSubmit={(e) => this.validateForm(e)}>
                <p>Start Date:<input type="date" name="start" min={rightNow} onChange={e => this.startDateCreated(e.target.value)} /></p>
                <p>End Date:<input type="date" name="end" min={this.state.val} /></p>
                <p>Policy max:
                    <select name="PolicyMax" >
                        <option value={50}>50,000</option>
                        <option value={100}>100,000</option>
                        <option value={250}>250,000</option>
                        <option value={500}>500,000</option>
                    </select>
                </p>
                <p>Citizenship:<input type="text" name="citizenship" pattern="[A-Za-z | s]{2,}" title="No numbers or special characters" /></p>
                <p>Age/Year of Birth:<input type="text" name="bday" alt='age' pattern='[1-9][0-9]?$|^100$ | ^1919|192[0-9]\d|20[0-9]\d|201[0-9]$' title="Field needs to be your age in years or your year of birth" /></p>
                <p>Mailing State:<input type="text" name="state" pattern="[A-Za-z | s]{2,}" title="No numbers or special characters" /></p>
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
            </form>
        );
    }
	
}


