import React from "react";
import LoanCardComponent from "../../components/card/loanCard.component";

function ViewLoanDetails({ history }) {
	const DUMMY_LOAN_DETAILS = [
		{
			name: "Amit Prakash Patil",
			address: "Pune",
			description: "Loan For Food Buisness",
			amount: 200000,
		},
		{
			name: "Zayn Aamir Malik",
			address: "Hyderabad",
			description: "Loan For Shop",
			amount: 700000,
		},
		{
			name: "Andrew David Colt",
			address: "Mumbai",
			description: "Loan For Taxi",
			amount: 50000,
		},
		{
			name: "Suraj Anil Kulkarni",
			address: "Banglore",
			description: "Loan For Saloon Buisness",
			amount: 300000,
		},
	];
	const showApplicantDetails = () => {
		history.push("/viewApplicantsDetails");
	};
	return (
		<div className="heading">
			<h1>All Loan Details</h1>
			{DUMMY_LOAN_DETAILS.map((loan) => (
				<LoanCardComponent
					name={loan.name}
					address={loan.address}
					description={loan.description}
					amount={loan.amount}
					applicantDetails={showApplicantDetails}
				/>
			))}
		</div>
	);
}

export default ViewLoanDetails;
