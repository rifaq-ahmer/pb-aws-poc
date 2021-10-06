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
const APP_CLIENT_ID = config.cognito.APP_CLIENT_ID;
const userName = localStorage.getItem(
	`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.LastAuthUser`
);
console.log(userName);
const accessToken = localStorage.getItem(
	`CognitoIdentityServiceProvider.${APP_CLIENT_ID}.${userName}.accessToken`
);
console.log(accessToken);

axios.defaults.headers.common["Authorization"] = accessToken;
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
