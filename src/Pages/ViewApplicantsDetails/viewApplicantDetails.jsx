import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import ApplicantCardComponent from "../../components/card/applicantCard.component";
// import axios from "axios";
import { config } from "../../aws-config";

export const APP_CLIENT_ID = config.cognito.APP_CLIENT_ID;

function AppliacantDetails({ data }) {
	let history = useHistory();

	const showBuisnessDetails = () => {
		history.replace("/viewBuisnessDetails");
	};
	const addBuisness = () => {
		history.replace("/buisnessDetailsForm");
	};

	return (
		<>
			<div className="heading">
				<h1>Applicant Details</h1>
			</div>
			<Container>
				<ApplicantCardComponent
					id={data.Applicant_ID}
					fName={data.Applicant_fname}
					mName={data.Applicant_mname}
					lName={data.Applicant_lname}
					address={data.Applicant_address}
					pincode={data.pincode}
					email={data.Applicant_email}
					phoneNo={data.Applicant_mobno}
					buisnessDetails={showBuisnessDetails}
					addBuisness={addBuisness}
					dob={data.Applicant_dob}
				/>
			</Container>
		</>
	);
}

export default AppliacantDetails;
