import React, { useState, useEffect } from "react";
import LoanCardComponent from "../../components/card/loanCard.component";
import axios from "axios";

function ViewLoanDetails({ history }) {
	// const DUMMY_LOAN_DETAILS = [
	// 	{
	// 		name: "Amit Prakash Patil",
	// 		address: "Pune",
	// 		description: "Loan For Food Buisness",
	// 		amount: 200000,
	// 	},
	// 	{
	// 		name: "Zayn Aamir Malik",
	// 		address: "Hyderabad",
	// 		description: "Loan For Shop",
	// 		amount: 700000,
	// 	},
	// 	{
	// 		name: "Andrew David Colt",
	// 		address: "Mumbai",
	// 		description: "Loan For Taxi",
	// 		amount: 50000,
	// 	},
	// 	{
	// 		name: "Suraj Anil Kulkarni",
	// 		address: "Banglore",
	// 		description: "Loan For Saloon Buisness",
	// 		amount: 300000,
	// 	},
	// ];
	const [loanDetails, setLoanDetails] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://dc1nrv6pua.execute-api.ap-south-1.amazonaws.com/dev/applicationsubmission/loan/1"
			)
			.then((respoense) => {
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
