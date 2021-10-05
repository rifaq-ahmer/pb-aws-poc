import React, { useState, useEffect } from "react";
import LoanCardComponent from "../../components/card/loanCard.component";
import axios from "axios";
import { LOAN_GET } from "../../api-constant";
function ViewLoanDetails({ history }) {
	const [loanDetails, setLoanDetails] = useState([]);

	useEffect(() => {
		axios.get(LOAN_GET).then((respoense) => {
			setLoanDetails(respoense.data);
			console.log(respoense.data);
		});
	}, []);
	const showApplicantDetails = () => {
		history.push("/viewApplicantsDetails");
	};

	return (
		<div className="heading">
			<h1>All Loan Details</h1>

			<LoanCardComponent
				loanApplicantId={loanDetails.LoanApplication_ID}
				businessId={loanDetails.Business_ID}
				date={loanDetails.LoanApplication_Date}
				description={loanDetails.LoanApplication_Description}
				amount={loanDetails.LoanApplication_Amount}
				status={loanDetails.LoanApplication_Status}
				comment={loanDetails.LoanApplication_BankerComment}
				applicantDetails={showApplicantDetails}
			/>
		</div>
	);
}

export default ViewLoanDetails;
