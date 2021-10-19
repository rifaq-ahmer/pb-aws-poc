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
		region: "ap-south-1",

		identityPoolRegion: "ap-south-1",

		userPoolId: "ap-south-1_T6Eai4D7M",

		userPoolWebClientId: "5hesaar1ubosqmd96f6kucqjiu",

		mandatorySignIn: false,

		authenticationFlowType: "USER_SRP_AUTH",

		clientMetadata: { myCustomKey: "myCustomValue" },

		// oauth: {
		// 	domain: "applicants.auth.ap-south-1.amazoncognito.com",

		// 	scope: ["email", "openid"],

		// 	redirectSignIn: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",

		// 	logoutUri: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",

		// 	redirectUri: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",

		// 	redirectSignOut: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",

		// 	responseType: "token", // or 'token', note that REFRESH token will only be generated when the responseType is code
		// },
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
