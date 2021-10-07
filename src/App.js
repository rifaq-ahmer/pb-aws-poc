import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Switch, Route } from "react-router-dom";
import BuisnessDetailsForm from "./Pages/BuisnessDeatilsForm/buisnessDetailsForm";
import HomePage from "./Pages/HomePage/homePage";
import LoanDetailsForm from "./Pages/LoanDetailsForm/LoanDetailsForm";
import ApplicantDetailsForm from "./Pages/ApplicantForm/applicantForm";
import axios from "axios";
import AppliacantDetails from "./Pages/ViewApplicantsDetails/viewApplicantDetails";
import ViewBuisnessDetails from "./Pages/ViewBuisnessDetails/viewBuisnessDetails";
import ViewLoanDetails from "./Pages/ViewLoanDetails/viewLoanDetails";

import Amplify from "aws-amplify";
import { config } from "./aws-config";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure({
	Auth: {
		mandatorySignIn: true,
		region: config.cognito.REGION,
		userPoolId: config.cognito.USER_POOL_ID,
		userPoolWebClientId: config.cognito.APP_CLIENT_ID,
	},
	authenticationFlowType: "USER_SRP_AUTH",
	// oauth: {
	// 	domain: "applicants.auth.ap-south-1.amazoncognito.com",
	// 	scope: [
	// 		"phone",
	// 		"email",
	// 		"profile",
	// 		"openid",
	// 		"aws.cognito.signin.user.admin",
	// 	],
	// 	redirectSignIn: "https://master.d2vtrd5zj8n3em.amplifyapp.com",
	// 	redirectSignOut: "https://master.d2vtrd5zj8n3em.amplifyapp.com",
	// 	responseType: "token", // or 'token', note that REFRESH token will only be generated when the responseType is code
	// },
	API: {
		endpoints: [
			{
				name: "Popular Bank",
				endpoint: config.apiGateway.URL,
				region: config.apiGateway.REGION,
			},
		],
	},
});
export const APP_CLIENT_ID = config.cognito.APP_CLIENT_ID;
const userName = localStorage.getItem(
	`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.LastAuthUser`
);
console.log(userName);
const accessToken = localStorage.getItem(
	`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.${userName}.accessToken`
);
console.log(accessToken);

axios.defaults.headers.common["Authorization"] =
	"eyJraWQiOiJDaXY3UGxuNnprT3VBQitOQ05WM0J1YjJrUjJjUnQ5ekdVVk1BTnVvNHQ0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MTE5NmExMi1jOGMwLTQxMjUtOGRhYS0yZWI2ZTI3OThmYzYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjMzNTgyMTc4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1Q2RWFpNEQ3TSIsImV4cCI6MTYzMzY2ODU3OCwiaWF0IjoxNjMzNTgyMTc4LCJ2ZXJzaW9uIjoyLCJqdGkiOiIyZDZmMDEwOC02NjZkLTQ0NTUtOTE5Zi0yMWI2NjJlMWQxMGEiLCJjbGllbnRfaWQiOiIyYnBoZ2R0OGtuYjh2dWE4cnIwbjdpcmhmbSIsInVzZXJuYW1lIjoicHJhdmluIn0.i9pZbSjmLInQbfGu-urHsJerQxBglN9vFNaDdjXZDay46vQBJq_Gjyjd6ys8qTG9xnvoGahFjv1EyiGzs7wHpUdwNArpYqOoZsQIbPKItjChglGHZ88CGB11T7SmPfBp45D-LBSjAA_JdFz63MXSBUhx1juvUxf1QFqchNkv-HVScL8yJHmAlWvlC9nRLpkOuANFtleZydkqpb4k-aoGXNUHmNab9FEz87A6X5QpPHqZJWTdHkSXxDkfRCMGA6mbO5fW4K-VV3gCoD8l21dGmz3Vb2Eq3T4X6Y6bomJQjV2vn1hCskFwohg313Y_I_hFS5CYTzzVIOr_OTZruABOKw";
const onSignOut = () => {
	localStorage.clear();
	console.log("Local Storage Clear");
};

function App() {
	return (
		<>
			<AmplifySignOut onClick={onSignOut} />
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route
					exact
					path="/applicantDetailsForm"
					component={ApplicantDetailsForm}
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
					path="/viewApplicantsDetails"
					component={AppliacantDetails}
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
			</Switch>
		</>
	);
}

export default withAuthenticator(App);
