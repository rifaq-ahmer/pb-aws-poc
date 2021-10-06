import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { config } from "./aws-config";
import Amplify from "aws-amplify";

Amplify.configure({
	Auth: {
		mandatorySignIn: true,
		region: config.cognito.REGION,
		userPoolId: config.cognito.USER_POOL_ID,
		userPoolWebClientId: config.cognito.APP_CLIENT_ID,
	},
	// authenticationFlowType: "USER_PASSWORD_AUTH",
	oauth: {
		domain: "https://applicants.auth.ap-south-1.amazoncognito.com",
		scope: [
			"phone",
			"email",
			"profile",
			"openid",
			"aws.cognito.signin.user.admin",
		],
		redirectSignIn: "https://master.d2vtrd5zj8n3em.amplifyapp.com/",
		redirectSignOut: "https://example.com/signout",
		responseType: "token", // or 'token', note that REFRESH token will only be generated when the responseType is code
	},
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

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
