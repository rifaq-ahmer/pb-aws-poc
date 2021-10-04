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

Amplify.configure(config);
const userName = localStorage.getItem(
	"CognitoIdentityServiceProvider.v4t4gin13ftnpmb2h96oei79c.LastAuthUser"
);
console.log(userName);
const accessToken = localStorage.getItem(
	`CognitoIdentityServiceProvider.v4t4gin13ftnpmb2h96oei79c.${userName}.accessToken`
);
console.log(accessToken);
axios.defaults.headers.common["Authorization"] =
	"eyJraWQiOiJDaXY3UGxuNnprT3VBQitOQ05WM0J1YjJrUjJjUnQ5ekdVVk1BTnVvNHQ0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MTE5NmExMi1jOGMwLTQxMjUtOGRhYS0yZWI2ZTI3OThmYzYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjMzMzI1MDA3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1Q2RWFpNEQ3TSIsImV4cCI6MTYzMzQxMTQwNywiaWF0IjoxNjMzMzI1MDA3LCJ2ZXJzaW9uIjoyLCJqdGkiOiIyZGQzOWY5Yy0yZTY1LTRkMjgtYTQ1ZC0xMGM0NzhkMDU3MTciLCJjbGllbnRfaWQiOiIyYnBoZ2R0OGtuYjh2dWE4cnIwbjdpcmhmbSIsInVzZXJuYW1lIjoicHJhdmluIn0.etlwhoNdeZnpA7eUEG23_1uh7P1DrOystdplwIAotDmCUfU9U2wR1yC9svYhNdIoUQvrfleJcHMZ2Mz1-cJn00ypqBfZjGhtdrZpT1jLFcExEt51lAlMJG7xU1NUxxAFzDIUb__w9X0dKteUys3vWHe_CwTJc_r0ydzWd01LU0hDe8hjMbvNXgLCJmGSwyYFAn2w4Zn2xyEfE545Rp25B-cu5yJ3Fmd1O8f56wKK0EtF1OyznCS31V-Rn8ECB5O7XNeQnooeBoan4czgJ4bQfHUG73ZeQkOSmojqloHGoGQVFAO9wI3xZNekT3CUruOED0q-k5XzbPF00oqjvZahdw";

axios.defaults.headers.common["content-type"] =
	"application/json; charset=UTF-8";

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
