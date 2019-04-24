import React from 'react';

function QuoteForm() {
    var date = new Date();
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    var yyyy = date.getFullYear();
	function validateForm() {
		var missing = 'The following fields are missing information:';
		for (let i = 0; i <= 6; i++) {
			if (!document.forms['QuoteForm'][i].value) {
				missing.concat(document.forms['QuoteForm'][i].toString());
			}
		}
		if (missing.length > 46) {
			alert(missing);
        }
        

    }
    function getFormattedDate() {
        var todayTime = new Date();
        var month = todayTime.getMonth() + 1;
        var day = todayTime.getDate();
        var year = todayTime.getFullYear();
        return month + "/" + day + "/" + year;
    }

	return (
		// Input type: 'date' responsive for Chrome 20 and Opera 11,
		// but not supported in Safari or Internet Explorer 11 and earlier versions.
		// Input 'name' supported in Chrome 1.0, IE 2.0, FireFox 1.0, Safari 1.0, and Opera 1.0
		<form name="QuoteForm" action="http://localhost:8080/api" onSubmit={(e) => validateForm(e)} method="post">
			<p>
				Start Date:
				<input type="date" name="start" min={getFormattedDate()} />
			</p>
			<p>
				End Date:
				<input type="date" name="end" />
			</p>
			<p>
				Policy max:
				<select name="PolicyMax" name="policy">
					<option value={50}>50,000</option>
					<option value={100}>100,000</option>
					<option value={250}>250,000</option>
					<option value={500}>500,000</option>
				</select>
			</p>

			<p>
				Citizenship:
				<input type="text" name="citizenship" pattern="[A-Za-z || s]{2,}" />
			</p>

			<p>
				Age/Birthday:
				<input type="date" name="bday" min={getFormattedDate()} />
			</p>

			<p>
				Mailing State:
				<input type="text" name="state" pattern="[A-Za-z || s]{2,}" />
			</p>
			<input type="submit" value="Submit" />
			<input type="reset" value="Reset" />
		</form>
	);
}

export default QuoteForm;
