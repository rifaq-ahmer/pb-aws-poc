import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
	UserPoolId: "ap-south-1_T6Eai4D7M",
	ClientId: "v4t4gin13ftnpmb2h96oei79c",
};

export default new CognitoUserPool(poolData);
