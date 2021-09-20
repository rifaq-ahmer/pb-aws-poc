import React from "react";
import { Container } from "react-bootstrap";
import BuisnessCardComponent from "../../components/card/buisnessCard.component";

function ViewBuisnessDetails({ history }) {
	const DUMMY_BUISNESS_DETAILS = [
		{
			buisnessName: "Zomato Food",
			buisnessAddress: "Pune",
			buisnessContactNo: "9876543210",
			buisnessDescription: "Online Food Delivery Service",
		},
		{
			buisnessName: "Urban Clap",
			buisnessAddress: "Pune",
			buisnessContactNo: "9768312243",
			buisnessDescription: "Home Saloon Service",
		},
		{
			buisnessName: "Uber Eats",
			buisnessAddress: "Mumbai",
			buisnessContactNo: "9867412267",
			buisnessDescription: "Online Food Delivery Service",
		},
		{
			buisnessName: "Ola",
			buisnessAddress: "Banglore",
			buisnessContactNo: "9876273710",
			buisnessDescription: "Online Cab Service",
		},
	];
	const showApplicantDetails = () => {
		history.push("/viewApplicantsDetails");
	};
	const showLoanDetails = () => {
		history.push("/viewLoanDetails");
	};

	return (
		<>
			<div className="heading">
				<h1>All Buisness Details</h1>
			</div>
			<Container>
				{DUMMY_BUISNESS_DETAILS.map((buisness) => (
					<BuisnessCardComponent
						buisnessName={buisness.buisnessName}
						buisnessAddress={buisness.buisnessAddress}
						buisnessContactNo={buisness.buisnessContactNo}
						buisnessDescription={buisness.buisnessDescription}
						applicantDetails={showApplicantDetails}
						loanDetails={showLoanDetails}
					/>
				))}
			</Container>
		</>
	);
}

export default ViewBuisnessDetails;
