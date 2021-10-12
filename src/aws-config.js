export const Amplifyconfig = {
	API: {
		endpoints: [
			{
				name: "ApplicantSubmission",

				endpoint:
					"https://g9yh14f7ve.execute-api.ap-south-1.amazonaws.com/Authorizeddev",
			},
		],
	},

	Auth: {
		// REQUIRED - Amazon Cognito Region

		region: "ap-south-1",

		// OPTIONAL - Amazon Cognito Federated Identity Pool Region

		// Required only if it's different from Amazon Cognito Region

		identityPoolRegion: "ap-south-1",

		// OPTIONAL - Amazon Cognito User Pool ID

		userPoolId: "ap-south-1_T6Eai4D7M",

		// OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)

		userPoolWebClientId: "5hesaar1ubosqmd96f6kucqjiu",

		// OPTIONAL - Enforce user authentication prior to accessing AWS resources or not

		mandatorySignIn: false,

		// OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'

		authenticationFlowType: "USER_SRP_AUTH",

		// OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers

		clientMetadata: { myCustomKey: "myCustomValue" },

		// OPTIONAL - Hosted UI configuration

		oauth: {
			domain: "applicants.auth.ap-south-1.amazoncognito.com",

			scope: ["email", "openid"],

			redirectSignIn: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",

			logoutUri: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",

			redirectUri: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",

			redirectSignOut: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",

			responseType: "token", // or 'token', note that REFRESH token will only be generated when the responseType is code
		},
	},
};

export const config = {
	apiGateway: {
		REGION: "ap-south-1",
		URL: "https://g9yh14f7ve.execute-api.ap-south-1.amazonaws.com/Authorizeddev",
	},
	cognito: {
		REGION: "ap-south-1",
		USER_POOL_ID: "ap-south-1_T6Eai4D7M",
		APP_CLIENT_ID: "5hesaar1ubosqmd96f6kucqjiu",
		CALLBACK_URL: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",
	},
};
