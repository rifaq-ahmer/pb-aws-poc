import React, { useState, useEffect } from "react";
import LoanCardComponent from "../../components/card/loanCard.component";
import axios from "axios";
import { config } from "../../aws-config";
import { useLocation } from "react-router-dom";
import { Auth, API } from "aws-amplify";
function ViewLoanDetails({ history }) {
	const [loanDetails, setLoanDetails] = useState([]);
	const buisnessResponse = JSON.parse(localStorage.getItem("buisnessResponse"));

	const location = useLocation();
	const { buisnessId } = location.state;

	useEffect(() => {
		Auth.currentAuthenticatedUser().then(() => {
			const token = localStorage.getItem("accessToken");
			console.log(token);
			const request = {
				headers: {
					Authorization: token,
				},
			};
			API.get(
				"ApplicantSubmission",
				`/applicationsubmission/loan?bid=${buisnessId || buisnessResponse.ID}`,
				request
			).then((res) => {
				if (typeof res !== "string") {
					setLoanDetails(res);
				}
			});
		});
		axios
			.get(
				`${config.apiGateway.URL}/applicationsubmission/loan?bid=${
					buisnessId || buisnessResponse.ID
				}`
			)
			.then((res) => {
				if (typeof res !== "string") {
					setLoanDetails(res);
				}
			});
	}, []);
	const showApplicantDetails = () => {
		history.push("/viewApplicantsDetails");
	};

	return (
		<div className="heading">
			<h1>All Loan Details</h1>

			{loanDetails &&
				loanDetails?.map((loan) => (
					<LoanCardComponent
						loanApplicantId={loan.LoanApplication_ID}
						businessId={loan.Business_ID}
						date={loan.LoanApplication_Date}
						description={loan.LoanApplication_Description}
						amount={loan.LoanApplication_Amount}
						status={loan.LoanApplication_Status}
						comment={loan.LoanApplication_BankerComment}
						applicantDetails={showApplicantDetails}
					/>
				))}
		</div>
	);
}

export default ViewLoanDetails;
