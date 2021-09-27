import React from "react";
import { Container } from "react-bootstrap";
import LoanFormComponent from "../../components/loan-form/loan-form.component";
import axios from "axios";

function LoanDetailsForm(formData) {
	const handleSubmit = async (values) => {
		console.log(values);
		await axios
			.post(
				"https://dc1nrv6pua.execute-api.ap-south-1.amazonaws.com/dev/applicationsubmission/loan",

				{
					business_ID: values.buisnessId,
					applicant_ID: values.applicantId,
					loanApplication_Amount: values.loanApplicationAmount,
					loanApplication_Description: values.loanApplicationDescription,
					loanApplication_Status: values.loanApplicationStatus,
					loanApplication_BankerComment: values.loanApplicationBankersComment,
				}
			)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
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

// {
// 	business_ID: values.buisnessId,
// 	applicant_ID: values.applicantId,
// 	loanApplication_Amount: values.loanApplicationAmount,
// 	loanApplication_Date: values.loanApplicationDate,
// 	loanApplication_Description: values.loanApplicationDescription,
// 	loanApplication_Status: values.loanApplicationStatus,
// 	loanApplication_BankerComment: values.loanApplicationBankersComment,
// }
