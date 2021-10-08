import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import LoanFormComponent from "../../components/loan-form/loan-form.component";
import axios from "axios";
import { config } from "../../aws-config";

function LoanDetailsForm(formData) {
	const location = useLocation();
	const buisnessData = location.state;
	console.log(buisnessData.applicantId);
	const handleSubmit = async (values) => {
		console.log(values);
		await axios
			.post(
				`${config.apiGateway.URL}/applicationsubmission/loan`,

				{
					business_ID: buisnessData.businessData.ID,
					applicant_ID: buisnessData.applicantId,
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
