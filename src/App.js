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
	const [applicantDetails, setApplicantDetails] = useState({});
	const APP_CLIENT_ID = config.cognito.APP_CLIENT_ID;
	const userName = localStorage.getItem(
		`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.LastAuthUser`
	);

	// const accessToken = localStorage.getItem(
	// 	`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.${userName}.accessToken`
	// );
	// console.log(accessToken);

	axios.defaults.headers.common["Authorization"] =
		"eyJraWQiOiJDaXY3UGxuNnprT3VBQitOQ05WM0J1YjJrUjJjUnQ5ekdVVk1BTnVvNHQ0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MTE5NmExMi1jOGMwLTQxMjUtOGRhYS0yZWI2ZTI3OThmYzYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjMzNjY3MTAxLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1Q2RWFpNEQ3TSIsImV4cCI6MTYzMzc1MzUwMSwiaWF0IjoxNjMzNjY3MTAxLCJ2ZXJzaW9uIjoyLCJqdGkiOiJhODk2MjMwOC1hOWViLTRmODktOWYwNy0xNmVhNGJmYTk0MzQiLCJjbGllbnRfaWQiOiIyYnBoZ2R0OGtuYjh2dWE4cnIwbjdpcmhmbSIsInVzZXJuYW1lIjoicHJhdmluIn0.GxyTBss9psPf3YUVQ71Wo2fCjZeuAvzFtB6pd7sua1r3Qcna8Zm8bO8k-VnG2Hf5_IUIXXQz6T6De1ENO-36Q-fwx8pLpO1TZxMu3fdLbwx0VYMpoLKEKw9ioJCYUrwiS_jrqeHL9T_SZaUrVPZDKydTxi8WpKqOI-mbtPNMbZl6fzeo5P6foCRRIPQKHEEoatUPAypP3yTZHP_z_-i7C8bBgZLhQ6GrCC1davM1purgUVrydYso_us7VaDo_JtTOssT8eOrmyN7sFGm088D_m1IV2x1v3jZgX6QGU8uU8P5Z2uTyQsJYmMeZhc1o6JI-p-RE_6p4789fjvr6Cs3Xg";
	const onSignOut = () => {
		localStorage.clear();
		console.log("Local Storage Clear");
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
