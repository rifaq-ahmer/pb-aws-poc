import React from "react";
import { Container } from "react-bootstrap";
import LoanFormComponent from "../../components/loan-form/loan-form.component";

function LoanDetailsForm(formData) {
	const handleSubmit = (values) => {
		console.log(values);
	};
	return (
		<>
			<Container>
			<div className="heading">
				<h1>Loan Details Form</h1>
			</div>
				<LoanFormComponent formData={formData} onSubmit={handleSubmit} />
			</Container>
		</>
	);
}

export default LoanDetailsForm;
