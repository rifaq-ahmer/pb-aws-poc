export const Amplifyconfig = {
	API: {
		endpoints: [
			{
				name: "ApplicantSubmission",

				endpoint: "https://ywrooavneh.execute-api.us-east-2.amazonaws.com/v1",
			},
		],
	},

	Auth: {
		region: "us-east-2",

		identityPoolRegion: "us-east-2",

		userPoolId: "us-east-2_hAVQtCRwv",

		userPoolWebClientId: "6um15ct2i0ah9nudbq6u7b7oph",

		mandatorySignIn: false,

		authenticationFlowType: "USER_SRP_AUTH",

		clientMetadata: { myCustomKey: "myCustomValue" },
	},
};

export const config = {
	apiGateway: {
		REGION: "us-east-2",
		URL: "https://ywrooavneh.execute-api.us-east-2.amazonaws.com/v1",
	},
	cognito: {
		REGION: "us-east-2",
		USER_POOL_ID: "us-east-2_hAVQtCRwv",
		APP_CLIENT_ID: "6um15ct2i0ah9nudbq6u7b7oph",
		CALLBACK_URL: "https://master.d3n4gc65xuvvqw.amplifyapp.com/",
	},
};

// const awsmobile = {
// 	aws_project_region: "ap-south-1",
// 	aws_cognito_identity_pool_id:
// 		"ap-south-1:f06d6b8d-8490-40d9-922d-0417a9f3eb7c",
// 	aws_cognito_region: "ap-south-1",
// 	aws_user_pools_id: "ap-south-1_hEjaz8gqs",
// 	aws_user_pools_web_client_id: "5e1rauvsded6cepsrl3f56tmfr",
// 	oauth: {},
// 	aws_cognito_login_mechanisms: ["EMAIL"],
// 	aws_cognito_signup_attributes: ["EMAIL"],
// 	aws_cognito_mfa_configuration: "OFF",
// 	aws_cognito_mfa_types: ["SMS"],
// 	aws_cognito_password_protection_settings: {
// 		passwordPolicyMinLength: 8,
// 		passwordPolicyCharacters: [],
// 	},
// };

// export default awsmobile
