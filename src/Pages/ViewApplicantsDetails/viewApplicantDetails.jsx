import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ApplicantCardComponent from "../../components/card/applicantCard.component";

import axios from "axios";

function AppliacantDetails({ history }) {
	// const DUMMY_APPLICANTS_DATA = [
	// 	{
	// 		id: "1",
	// 		fName: "Amit",
	// 		mName: "Prakash",
	// 		lName: "Patil",
	// 		address: "Kalyan Nagar, Pune",
	// 		pincode: "400062",
	// 		email: "amit.prakash@gmail.com",
	// 		phoneNo: "9891227654",
	// 		dob: "01/02/1996",
	// 	},
	// 	{
	// 		id: "2",
	// 		fName: "Suraj",
	// 		mName: "Anil",
	// 		lName: "Kulkarni",
	// 		address: "Mumbai Central, Mumbai",
	// 		pincode: "400002",
	// 		email: "suraj.kulkarni@gmail.com",
	// 		phoneNo: "9820875642",
	// 		dob: "23/12/1992",
	// 	},
	// 	{
	// 		id: "3",
	// 		fName: "Zayn",
	// 		mName: "Aamir",
	// 		lName: "Malik",
	// 		address: "Chaar Minar, Hyderabad",
	// 		pincode: "430782",
	// 		email: "zayn.malik@gmail.com",
	// 		phoneNo: "8268471487",
	// 		dob: "11/01/1993",
	// 	},
	// 	{
	// 		id: "4",
	// 		fName: "Andrew",
	// 		mName: "David",
	// 		lName: "Colt",
	// 		address: "Khadki, Pune",
	// 		pincode: "400062",
	// 		email: "colt.andrew@gmail.com",
	// 		phoneNo: "8692945286",
	// 		dob: "22/10/1997",
	// 	},
	// ];

	const [applicantDetails, setApplicantDetails] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://dc1nrv6pua.execute-api.ap-south-1.amazonaws.com/dev/applicationsubmission/applicant/8"
			)
			.then((respoense) => {
				setApplicantDetails(respoense.data);
				// console.log(respoense.data);
			});
	});

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
					phoneNo={applicantDetails.phoneNo}
					buisnessDetails={showBuisnessDetails}
					loanDetails={showLoanDetails}
					dob={applicantDetails.Applicant_dob}
				/>
			</Container>
		</>
	);
}

export default AppliacantDetails;
