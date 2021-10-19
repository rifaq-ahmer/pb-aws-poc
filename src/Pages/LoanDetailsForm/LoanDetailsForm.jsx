import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import LoanFormComponent from "../../components/loan-form/loan-form.component";
import { Auth, API } from "aws-amplify";

import AppliacantDetails from "../ViewApplicantsDetails/viewApplicantDetails";

function LoanDetailsForm(formData) {
	const location = useLocation();
	const history = useHistory();
	const appId = localStorage.getItem("applicantId");
	const buisnessId = location.state.buisnessId;

	const initialBuisnessId = JSON.parse(
		localStorage.getItem("buisnessResponse")
	);

	const initialApplicantId = JSON.parse(
		localStorage.getItem("applicantResponse")
	);

	const handleSubmit = async (values) => {
		console.log(values);
		// const files = JSON.parse(localStorage.getItem("loanDocuments"));
		// console.log(files);
		await Auth.currentAuthenticatedUser().then((response) => {
			const token = localStorage.getItem("accessToken");
			const request = {
				headers: {
					Authorization: token,
				},
				body: {
					business_ID: initialBuisnessId.ID || buisnessId,
					applicant_ID: appId || initialApplicantId.Applicant_ID,
					loanApplication_Amount: values.loanApplicationAmount,
					loanApplication_Description: values.loanApplicationDescription,
					loanApplication_Status: values.loanApplicationStatus,
					loanApplication_BankerComment: values.loanApplicationBankersComment,
				},
			};
			API.post("ApplicantSubmission", "//applicationsubmission/loan", request)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
		});
		// localStorage.removeItem("loanDocuments");
		history.push("viewApplicantsDetails");
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
