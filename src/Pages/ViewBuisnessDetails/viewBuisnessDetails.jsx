import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import BuisnessCardComponent from "../../components/card/buisnessCard.component";
import axios from "axios";
import { config } from "../../aws-config";

function ViewBuisnessDetails({ history }) {
	const [buisnessDetails, setBuisnessDetails] = useState([]);

	useEffect(() => {
		axios
			.get(`${config.apiGateway.URL}/applicationsubmission/business/1`)
			.then((respoense) => {
				setBuisnessDetails(respoense.data);
				console.log(respoense.data);
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
