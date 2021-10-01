import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { cognito } from "./aws-exports";
import Amplify from "aws-amplify";

Amplify.configure({
	Auth: {
		mandatorySignIn: true,
		region: cognito.cognito.REGION,
		userPoolId: cognito.cognito.USER_POOL_ID,
		userPoolWebClientId: cognito.cognito.APP_CLIENT_ID,
	},
	API: {
		endpoints: [
			{
				name: "Popular Bank",
				endpoint: cognito.apiGateway.URL,
				region: cognito.apiGateway.REGION,
			},
		],
	},
});

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
