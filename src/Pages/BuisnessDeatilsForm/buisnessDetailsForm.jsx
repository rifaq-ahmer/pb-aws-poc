import React from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import BuisnessFormComponent from "../../components/buisness-form/buisness-form.component";

function BuisnessDetailsForm(formData) {
	const history = useHistory();
	const handleSubmit = (values) => {
		console.log(values);
		history.push("/LoanDetailsForm");
	};
	return (
		<>
			<Container>
				<div className="heading">
					<h1>Buisness Details Form</h1>
				</div>
				<BuisnessFormComponent formData={formData} onSubmit={handleSubmit} />
			</Container>
		</>
	);
}

export default withRouter(BuisnessDetailsForm);
