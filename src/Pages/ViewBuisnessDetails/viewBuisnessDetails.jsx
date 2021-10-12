import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import BuisnessCardComponent from "../../components/card/buisnessCard.component";
import { Auth, API } from "aws-amplify";

function ViewBuisnessDetails({ history }) {
	const [buisnessDetails, setBuisnessDetails] = useState([]);
	const applicantId = JSON.parse(localStorage.getItem("applicantResponse"));

	useEffect(() => {
		Auth.currentAuthenticatedUser().then(() => {
			const token = localStorage.getItem("accessToken");
			const request = {
				headers: {
					Authorization: token,
				},
			};
			API.get(
				"ApplicantSubmission",
				`/applicationsubmission/business?aid=${applicantId.Applicant_ID}`,
				request
			).then((respoense) => {
				setBuisnessDetails(respoense.data);
				console.log(respoense.data);
			});
		});
	}, []);

	const showApplicantDetails = () => {
		history.push("/viewApplicantsDetails");
	};
	const showLoanDetails = (buisnessId) => {
		history.push({
			pathname: "/viewLoanDetails",
			state: { buisnessId },
		});
	};
	const applyForLoan = (buisnessId) => {
		history.push({
			pathname: "/loanDetailsForm",
			state: { buisnessId, appId: applicantId.Applicant_ID },
		});
	};
	console.log(buisnessDetails);
	return (
		<>
			<div className="heading">
				<h1>All Buisness Details</h1>
			</div>
			{buisnessDetails.map((buisness) => (
				<Container>
					<BuisnessCardComponent
						buisnessName={buisness.Business_Name}
						buisnessAddress={buisness.Business_Address}
						buisnessContactNo={buisness.Business_ContactNo}
						buisnessDescription={buisness.Business_Description}
						applicantDetails={showApplicantDetails}
						loanDetails={showLoanDetails}
						applyForLoan={applyForLoan}
						buisnessId={buisness.Business_ID}
					/>
				</Container>
			))}
		</>
	);
}

export default ViewBuisnessDetails;

// axios
// 	.get(
// 		`${config.apiGateway.URL}/applicationsubmission/business?aid=${applicantId.Applicant_ID}`
// 	)
// 	.then((respoense) => {
// 		setBuisnessDetails(respoense.data);
// 		console.log(respoense.data);
// 	});
