import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import LoanFormComponent from "../../components/loan-form/loan-form.component";
import { Auth, API } from "aws-amplify";

function LoanDetailsForm(formData) {
	const location = useLocation();

	const appId = location.state.appId;
	const buisnessId = location.state.buisnessId;

	const initialBuisnessId = JSON.parse(
		localStorage.getItem("buisnessResponse")
	);
	console.log(initialBuisnessId.ID);

	const initialApplicantId = JSON.parse(
		localStorage.getItem("applicantResponse")
	);
	console.log(initialApplicantId.Applicant_ID);

	const handleSubmit = async (values) => {
		console.log(values);
		await Auth.currentAuthenticatedUser().then((response) => {
			const token = localStorage.getItem("accessToken");
			const request = {
				headers: {
					Authorization: token,
				},
			};
			API.post("ApplicantSubmission", "//applicationsubmission/loan", request, {
				business_ID: initialBuisnessId.ID || buisnessId,
				applicant_ID: initialApplicantId.Applicant_ID || appId,
				loanApplication_Amount: values.loanApplicationAmount,
				loanApplication_Description: values.loanApplicationDescription,
				loanApplication_Status: values.loanApplicationStatus,
				loanApplication_BankerComment: values.loanApplicationBankersComment,
			})
				.then((res) => {
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
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
// business_ID: values.buisnessId,
// applicant_ID: values.applicantId,
// loanApplication_Amount: values.loanApplicationAmount,
// loanApplication_Date: values.loanApplicationDate,
// loanApplication_Description: values.loanApplicationDescription,
// loanApplication_Status: values.loanApplicationStatus,
// loanApplication_BankerComment: values.loanApplicationBankersComment,
// }
// await axios
// 	.post(
// 		`${config.apiGateway.URL}/applicationsubmission/loan`,

// 		{
// business_ID: initialBuisnessId.ID || buisnessId,
// applicant_ID: initialApplicantId.Applicant_ID || appId,
// loanApplication_Amount: values.loanApplicationAmount,
// loanApplication_Description: values.loanApplicationDescription,
// loanApplication_Status: values.loanApplicationStatus,
// loanApplication_BankerComment: values.loanApplicationBankersComment,
// 		}
// 	)
// .then((res) => {
// 	console.log(res.data);
// })
// .catch((err) => {
// 	console.log(err);
// })
