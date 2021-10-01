import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ApplicantCardComponent from "../../components/card/applicantCard.component";
import axios from "axios";

function AppliacantDetails({ history }) {
	const [applicantDetails, setApplicantDetails] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://g9yh14f7ve.execute-api.ap-south-1.amazonaws.com/Authorizeddev/applicationsubmission/applicant/1"
			)
			.then((respoense) => {
				setApplicantDetails(respoense.data);
				console.log(respoense.data);
			});
	}, []);

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
