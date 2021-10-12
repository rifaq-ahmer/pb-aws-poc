import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Switch, Route, Redirect } from "react-router-dom";
import BuisnessDetailsForm from "./Pages/BuisnessDeatilsForm/buisnessDetailsForm";
import HomePage from "./Pages/HomePage/homePage";
import LoanDetailsForm from "./Pages/LoanDetailsForm/LoanDetailsForm";
import ApplicantDetailsForm from "./Pages/ApplicantForm/applicantForm";
import axios from "axios";
import AppliacantDetails from "./Pages/ViewApplicantsDetails/viewApplicantDetails";
import ViewBuisnessDetails from "./Pages/ViewBuisnessDetails/viewBuisnessDetails";
import ViewLoanDetails from "./Pages/ViewLoanDetails/viewLoanDetails";
import Amplify from "aws-amplify";
import { Amplifyconfig, config } from "./aws-config";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(Amplifyconfig);

function App() {
	const [applicantDetails, setApplicantDetails] = useState([]);
	const APP_CLIENT_ID = config.cognito.APP_CLIENT_ID;
	const userName = localStorage.getItem(
		`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.LastAuthUser`
	);

	const accessToken = localStorage.getItem(
		`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.${userName}.accessToken`
	);
	console.log(accessToken);

	axios.defaults.headers.common["Authorization"] = accessToken;
	// "eyJraWQiOiJDaXY3UGxuNnprT3VBQitOQ05WM0J1YjJrUjJjUnQ5ekdVVk1BTnVvNHQ0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MTE5NmExMi1jOGMwLTQxMjUtOGRhYS0yZWI2ZTI3OThmYzYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjM0MDExMTc5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1Q2RWFpNEQ3TSIsImV4cCI6MTYzNDA5NzU3OSwiaWF0IjoxNjM0MDExMTc5LCJ2ZXJzaW9uIjoyLCJqdGkiOiJkMmY5ZmEyZC0wNGYzLTRmMmEtYjRkMi1jM2E0MTMzYzUzYzgiLCJjbGllbnRfaWQiOiIyYnBoZ2R0OGtuYjh2dWE4cnIwbjdpcmhmbSIsInVzZXJuYW1lIjoicHJhdmluIn0.iBinChS-YlYHmLDZQKZH4g62wUVyuZ8tI3GNFmZgIadHRrt8F_d3SMoCEUrXLLnmy2pK4XfSrMuedHXEHvrpD2__OLCz59DqeQyHo-BCPd-kN8GDvR1xD_VFRey0ZRpVBLZ5AePNm8Rw67p9fOYpAY3m-96gENDdrQ1igv1gW5fsoxnz-uXiris4dPhcifmiRtJTvSQaQwuuj3YPkfAi7a0-6et40UnJj5PMSRhorUqN7RIqSs-IH-zgk-u63o56VoNyfreya0JktNBWu9CLmYNGjiufLTKct2ZvpUA-jY3cl9PTWCSP6NlHEkxmU4QEpr6HG8zjPHtvk899W_6vtA";

	const onSignOut = () => {
		localStorage.clear();
		console.log("Local Storage Clear");
		<Redirect to="/" />;
	};

	const userData = localStorage.getItem(
		`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.${userName}.userData`
	);
	const userDataJSON = JSON.parse(userData || {});
	let email;
	userDataJSON.UserAttributes.forEach((ele) => {
		email = ele.Name === "email" ? ele.Value : "";
	});
	useEffect(() => {
		if (email) {
			axios
				.get(
					`${config.apiGateway.URL}/applicationsubmission/applicant/${email}`
				)
				.then((respoense) => {
					if (typeof respoense.data !== "string") {
						setApplicantDetails(respoense.data);
						localStorage.setItem(
							"applicantResponse",
							JSON.stringify(respoense.data)
						);
					} else {
						console.log(respoense.data);
					}
				});
		}

		return () => {
			setApplicantDetails({});
		};
	}, [email]);

	return (
		<>
			<AmplifySignOut onClick={onSignOut} />
			<Switch>
				{Object.keys(applicantDetails).length === 0 && (
					<Route exact path="/" component={HomePage}></Route>
				)}
				<Route
					exact
					path="/applicantDetailsForm"
					component={ApplicantDetailsForm}
				></Route>
				<Route
					exact
					path="/viewApplicantsDetails"
					render={() => <AppliacantDetails data={applicantDetails} />}
				></Route>
				<Route
					exact
					path="/buisnessDetailsForm"
					component={BuisnessDetailsForm}
				></Route>
				<Route
					exact
					path="/LoanDetailsForm"
					component={LoanDetailsForm}
				></Route>

				<Route
					exact
					path="/viewBuisnessDetails"
					component={ViewBuisnessDetails}
				></Route>
				<Route
					exact
					path="/viewLoanDetails"
					component={ViewLoanDetails}
				></Route>
				<Redirect to="/viewApplicantsDetails" />
			</Switch>
		</>
	);
}

export default withAuthenticator(App);

// {
// 	Auth: {
// 		mandatorySignIn: true,
// 		region: config.cognito.REGION,
// 		userPoolId: config.cognito.USER_POOL_ID,
// 		userPoolWebClientId: config.cognito.APP_CLIENT_ID,
// 	},
// 	authenticationFlowType: "USER_SRP_AUTH",
// 	clientMetadata: { myCustomKey: "myCustomValue" },

// 	oauth: {
// 		domain: "applicants.auth.ap-south-1.amazoncognito.com",

// 		scope: ["email", "openid"],

// 		redirectSignIn: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",

// 		logoutUri: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",

// 		redirectUri: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",

// 		redirectSignOut: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",

// 		responseType: "token",
// 	},
// 	API: {
// 		endpoints: [
// 			{
// 				name: "Popular Bank",
// 				endpoint: config.apiGateway.URL,
// 				region: config.apiGateway.REGION,
// 			},
// 		],
// 	},
// }
