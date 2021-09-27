import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import BuisnessCardComponent from "../../components/card/buisnessCard.component";
import axios from "axios";

function ViewBuisnessDetails({ history }) {
	// const DUMMY_BUISNESS_DETAILS = [
	// 	{
	// 		buisnessName: "Zomato Food",
	// 		buisnessAddress: "Pune",
	// 		buisnessContactNo: "9876543210",
	// 		buisnessDescription: "Online Food Delivery Service",
	// 	},
	// 	{
	// 		buisnessName: "Urban Clap",
	// 		buisnessAddress: "Pune",
	// 		buisnessContactNo: "9768312243",
	// 		buisnessDescription: "Home Saloon Service",
	// 	},
	// 	{
	// 		buisnessName: "Uber Eats",
	// 		buisnessAddress: "Mumbai",
	// 		buisnessContactNo: "9867412267",
	// 		buisnessDescription: "Online Food Delivery Service",
	// 	},
	// 	{
	// 		buisnessName: "Ola",
	// 		buisnessAddress: "Banglore",
	// 		buisnessContactNo: "9876273710",
	// 		buisnessDescription: "Online Cab Service",
	// 	},
	// ];
	const [buisnessDetails, setBuisnessDetails] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://dc1nrv6pua.execute-api.ap-south-1.amazonaws.com/dev/applicationsubmission/business/1"
			)
			.then((respoense) => {
				setBuisnessDetails(respoense.data);
				// console.log(respoense.data);
			});
	}, []);

	const showApplicantDetails = () => {
		history.push("/viewApplicantsDetails");
	};
	const showLoanDetails = () => {
		history.push("/viewLoanDetails");
	};
	const applyForLoan = () => {
		history.push("/loanDetailsForm");
	};

	return (
		<>
			<div className="heading">
				<h1>All Buisness Details</h1>
			</div>
			<Container>
				<BuisnessCardComponent
					buisnessName={buisnessDetails.Business_Name}
					buisnessAddress={buisnessDetails.Business_Address}
					buisnessContactNo={buisnessDetails.Business_ContactNo}
					buisnessDescription={buisnessDetails.Business_Description}
					applicantDetails={showApplicantDetails}
					loanDetails={showLoanDetails}
					applyForLoan={applyForLoan}
				/>
			</Container>
		</>
	);
}

export default ViewBuisnessDetails;
