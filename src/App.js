import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Switch, Route, Redirect } from "react-router-dom";
import BuisnessDetailsForm from "./Pages/BuisnessDeatilsForm/buisnessDetailsForm";
import HomePage from "./Pages/HomePage/homePage";
import LoanDetailsForm from "./Pages/LoanDetailsForm/LoanDetailsForm";
import ApplicantDetailsForm from "./Pages/ApplicantForm/applicantForm";
import AppliacantDetails from "./Pages/ViewApplicantsDetails/viewApplicantDetails";
import ViewBuisnessDetails from "./Pages/ViewBuisnessDetails/viewBuisnessDetails";
import ViewLoanDetails from "./Pages/ViewLoanDetails/viewLoanDetails";
import Amplify, { Auth } from "aws-amplify";
import { Amplifyconfig } from "./aws-config";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(Amplifyconfig);

function App() {
	const [applicantDetails, setApplicantDetails] = useState([]);

	const onSignOut = () => {
		localStorage.clear();

		<Redirect to="/" />;
	};
	useEffect(() => {
		Auth.currentAuthenticatedUser().then((res) => {
			const token = res.signInUserSession.accessToken.jwtToken;
			localStorage.setItem("accessToken", token);

			const email = res.attributes.email;

			const request = {
				headers: {
					Authorization: token,
				},
			};
			if (email) {
				Amplify.API.get(
					"ApplicantSubmission",
					`/applicationsubmission/applicant/${email}`,
					request
				).then((respoense) => {
					if (typeof respoense !== "string") {
						setApplicantDetails(respoense);
						localStorage.setItem(
							"applicantResponse",
							JSON.stringify(respoense)
						);
					} else {
						console.log(respoense);
					}
				});
			}
		});

		return () => {
			setApplicantDetails({});
		};
	}, []);

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
