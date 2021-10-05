import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
	UserPoolId: "ap-south-1_T6Eai4D7M",
	ClientId: "5hesaar1ubosqmd96f6kucqjiu",
};

export default new CognitoUserPool(poolData);
