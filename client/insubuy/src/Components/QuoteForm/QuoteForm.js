import React from 'react';

function QuoteForm() {
    var miney;
	function validateForm() {
		var missing = ['The following fields are incomplete:'];
		for (let i = 0; i <= 6; i++) {
			if (document.forms['QuoteForm']['start'].value > document.forms['QuoteForm']['end'].value) {
				miney = document.forms['QuoteForm']['start'].value;
            }
            else {
                missing += document.forms['QuoteForm'][i];
            }
            console.log('hi')
		}
		console.log(missing);  
    }

    var todayTime = new Date();
        var month = todayTime.getMonth() + 1;
        var day = todayTime.getDate();
        var year = todayTime.getFullYear();
        var rightNow = year + '-' + 0 + month + '-' + day;
    
	return (
		// Input type: 'date' responsive for Chrome 20 and Opera 11,
		// but not supported in Safari or Internet Explorer 11 and earlier versions.
		// Input 'name' supported in Chrome 1.0, IE 2.0, FireFox 1.0, Safari 1.0, and Opera 1.0
		<form name="QuoteForm" action="/api" onSubmit={(e) => validateForm(e)}>
			<p>Start Date:<input type="date" name="start" min={rightNow} /></p>
			<p>End Date:<input type="date" name="end" min={miney} /></p>
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

export default QuoteForm;
