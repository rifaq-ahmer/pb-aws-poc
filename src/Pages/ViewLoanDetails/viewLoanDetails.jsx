import React, { useState, useEffect } from "react";
import LoanCardComponent from "../../components/card/loanCard.component";
import axios from "axios";
import { config } from "../../aws-config";
import { useLocation } from "react-router-dom";
function ViewLoanDetails({ history }) {
	const [loanDetails, setLoanDetails] = useState([]);
	const buisnessResponse = JSON.parse(localStorage.getItem("buisnessResponse"));
	console.log(buisnessResponse);
	const location = useLocation();
	const { buisnessId } = location.state;

	useEffect(() => {
		axios
			.get(
				`${config.apiGateway.URL}/applicationsubmission/loan?bid=${
					buisnessId || buisnessResponse.ID
				}`
			)
			.then((respoense) => {
				if (typeof respoense.data !== "string") {
					setLoanDetails(respoense.data);
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
