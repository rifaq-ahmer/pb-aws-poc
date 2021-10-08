import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import ApplicantCardComponent from "../../components/card/applicantCard.component";
// import axios from "axios";
import { config } from "../../aws-config";

export const APP_CLIENT_ID = config.cognito.APP_CLIENT_ID;

function AppliacantDetails({ data }) {
	let history = useHistory();
	console.log(history);
	// const [applicantDetails, setApplicantDetails] = useState([]);

	// const userName = localStorage.getItem(
	// 	`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.LastAuthUser`
	// );
	// const userData = localStorage.getItem(
	// 	`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.${userName}.userData`
	// );
	// const userDataJSON = JSON.parse(userData);
	// // console.log(userDataJSON);
	// let email;
	// userDataJSON.UserAttributes.forEach((ele) => {
	// 	email = ele.Name === "email" ? ele.Value : "";
	// });

	// console.log(email);

	// useEffect(() => {
	// 	axios
	// 		.get(`${config.apiGateway.URL}/applicationsubmission/applicant/${email}`)
	// 		.then((respoense) => {
	// 			setApplicantDetails(respoense.data);
	// 			console.log(respoense.data);
	// 		});
	// }, [email]);

	const showBuisnessDetails = () => {
		history.replace("/viewBuisnessDetails");
	};
	const showLoanDetails = () => {
		history.replace("/viewLoanDetails");
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
					loanDetails={showLoanDetails}
					dob={data.Applicant_dob}
				/>
			</Container>
		</>
	);
}

export default AppliacantDetails;
