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
import { cognito } from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(cognito);
const userName = localStorage.getItem(
	"CognitoIdentityServiceProvider.v4t4gin13ftnpmb2h96oei79c.LastAuthUser"
);
console.log(userName);
const accessToken = localStorage.getItem(
	`CognitoIdentityServiceProvider.v4t4gin13ftnpmb2h96oei79c.${userName}.accessToken`
);
console.log(accessToken);
axios.defaults.headers.common["Authorization"] =
	"eyJraWQiOiJDaXY3UGxuNnprT3VBQitOQ05WM0J1YjJrUjJjUnQ5ekdVVk1BTnVvNHQ0PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiZTRmY2ViZTItMzY0ZS00YTg3LWIzM2ItMjUxMjU4ZmQ0ZWUzIiwic3ViIjoiMDgyMDc5ZGItNjI5Zi00ZDI4LWI0ZjMtZjRmNTBkNWVlMTBjIiwiZXZlbnRfaWQiOiJlZjRiMGVmNi0wYjcwLTRlMmEtOTkzMC01MjIxM2QwNDFlYTYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjMzMDY2MDg0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1Q2RWFpNEQ3TSIsImV4cCI6MTYzMzA2OTY4NCwiaWF0IjoxNjMzMDY2MDg0LCJqdGkiOiJlNTFmNjAzOC04YzBmLTRhM2UtOWY5Yi1iMmQ0YjZjYmFhOWMiLCJjbGllbnRfaWQiOiJ2NHQ0Z2luMTNmdG5wbWIyaDk2b2VpNzljIiwidXNlcm5hbWUiOiJyaWZhcS5haG1lckBnbWFpbC5jb20ifQ.C_MNig9u0-JG9cFEeJ3q_k0820dwnmCRVNpolw-LbxJ21a1OL0uqGNA5Jnn619i0xmqM6NxEcsr2oFdj_66QbI_hB0Ic1wOhFzb-5U1y0ulMunabXrb256uECX1YqeUL6aPstQiwfdS42YYScH0JDmCr7z4l5AY5HmXuB72eJv2WQHb6-s-TRMPYCilvSRoV9JzFbJTETyspVst_6WpuZVQXcGhNz6W1okXupt967tpsEg-oybXwdrEz4VwKM5FPK04FLV_LZZsrjPnW8TiVSCMIT_Tml01ddh8UGdifVZ3W9rVqQTpJNput66EEzcRoU5yPHrb6S9nHobpiwgGCyw";
axios.defaults.headers.common["content-type"] =
	"application/json; charset=UTF-8";

const onSignOut = () => {
	localStorage.clear();
	console.log("Local Storage Clear");
};

// hello
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
