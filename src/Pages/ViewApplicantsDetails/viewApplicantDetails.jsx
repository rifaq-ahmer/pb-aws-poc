import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ApplicantCardComponent from "../../components/card/applicantCard.component";
import axios from "axios";
import { config } from "../../aws-config";
import { APP_CLIENT_ID } from "../../App";

function AppliacantDetails({ history }) {
	const [applicantDetails, setApplicantDetails] = useState([]);
	const userName = localStorage.getItem(
		`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.LastAuthUser`
	);
	const userData = localStorage.getItem(
		`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.${userName}.userData`
	);
	const userDataJSON = JSON.parse(userData);
	// console.log(userDataJSON);
	let email;
	userDataJSON.UserAttributes.forEach((ele) => {
		email = ele.Name === "email" ? ele.Value : "";
	});

	console.log(email);

	useEffect(() => {
		axios
			.get(`${config.apiGateway.URL}/applicationsubmission/applicant/${email}`)
			.then((respoense) => {
				setApplicantDetails(respoense.data);
				console.log(respoense.data);
			});
	}, [email]);

	const showBuisnessDetails = () => {
		history.push("/viewBuisnessDetails");
	};
	const showLoanDetails = () => {
		history.push("/viewLoanDetails");
	};

	return (
		<>
			<div className="heading">
				<h1>Applicant Details</h1>
			</div>
			<Container>
				<ApplicantCardComponent
					id={applicantDetails.Applicant_ID}
					fName={applicantDetails.Applicant_fname}
					mName={applicantDetails.Applicant_mname}
					lName={applicantDetails.Applicant_lname}
					address={applicantDetails.Applicant_address}
					pincode={applicantDetails.pincode}
					email={applicantDetails.Applicant_email}
					phoneNo={applicantDetails.Applicant_mobno}
					buisnessDetails={showBuisnessDetails}
					loanDetails={showLoanDetails}
					dob={applicantDetails.Applicant_dob}
				/>
			</Container>
		</>
	);
}

export default AppliacantDetails;
