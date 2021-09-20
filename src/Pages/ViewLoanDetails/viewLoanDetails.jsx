import React from "react";
import LoanCardComponent from "../../components/card/loanCard.component";

function ViewLoanDetails({ history }) {
	const showApplicantDetails = () => {
		history.push("/viewApplicantsDetails");
	};
	return (
		<div className="heading">
			<h1>All Loan Details</h1>
			<LoanCardComponent applicantDetails={showApplicantDetails} />
		</div>
	);
}

export default ViewLoanDetails;
