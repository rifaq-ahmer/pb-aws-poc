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

function App() {
	const [applicantDetails, setApplicantDetails] = useState([]);
	const APP_CLIENT_ID = config.cognito.APP_CLIENT_ID;
	const userName = localStorage.getItem(
		`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.LastAuthUser`
	);

	// const accessToken = localStorage.getItem(
	// 	`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.${userName}.accessToken`
	// );
	// console.log(accessToken);

	axios.defaults.headers.common["Authorization"] =
		"eyJraWQiOiJDaXY3UGxuNnprT3VBQitOQ05WM0J1YjJrUjJjUnQ5ekdVVk1BTnVvNHQ0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmNGQ0ZWQxMy04MjQwLTQyNWItOTM0My00ZjlmZjRmNzYzMWIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTYzMzkyNjc0NCwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9UNkVhaTREN00iLCJleHAiOjE2MzQwMTMxNDQsImlhdCI6MTYzMzkyNjc0NCwidmVyc2lvbiI6MiwianRpIjoiNGE3OTNjZDctYTE1OS00ZjM0LTkxMjYtNzlmNTYxN2VhYzQ4IiwiY2xpZW50X2lkIjoiNWhlc2FhcjF1Ym9zcW1kOTZmNmt1Y3FqaXUiLCJ1c2VybmFtZSI6InJpZmFxLmFobWVyQGdtYWlsLmNvbSJ9.CaHHlSdpq4KE3drj1EZRHZOYaDqSUpMp62ZnQ9Vd-AF_gXm8AHG1Yv6zc2psUcmDyl_FHbULSOxTCoYNVXHAPT8oows1UYembgk6kz8-Id-uMAU22nKWaxAhZBMiNn9y5BkHAtCX8A0trLO8gUj0ft_LVrhC4Pf-bmZk0oXWSx-7krj58PkCSRVJcPxeuJ3pMoWdWR2Rks54GaQYH0Fns7HkbvXKEkPpljL2GoQwgxQE7NUdmLWsE-ukamYwk4QWtS77x0hSDCZXxPyPwoj795JObN6UoDIkna2f_hWiNw4WyY1uN7gPApBCBiZ82VK_vR2MgkdRaNpcuZbMUxDakg";

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
		console.log(applicantDetails);

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
