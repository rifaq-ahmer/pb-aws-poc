import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import BuisnessFormComponent from "../../components/buisness-form/buisness-form.component";
import { API, Auth } from "aws-amplify";

function BuisnessDetailsForm(formData) {
	const [buisnessResponse, setBuisnessResponse] = useState({});
	const history = useHistory();
	const applicantId = JSON.parse(localStorage.getItem("applicantResponse"));

	const handleSubmit = async (values) => {
		console.log(values);
		await Auth.currentAuthenticatedUser().then((response) => {
			const token = localStorage.getItem("accessToken");

			const request = {
				headers: {
					Authorization: token,
				},
			};
			API.post(
				"ApplicantSubmission",
				"/applicationsubmission/business",
				request,
				{
					Applicant_ID: applicantId.Applicant_ID,
					Business_Name: values.buisnessName,
					Business_ContactNo: values.buisnessContactNo,
					Business_Address: values.buisnessAddress,
					Business_Description: values.buisnessDescription,
				}
			)
				.then((res) => {
					setBuisnessResponse(res);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	};

	useEffect(() => {
		if (Object.keys(buisnessResponse).length > 0) {
			localStorage.setItem(
				"buisnessResponse",
				JSON.stringify(buisnessResponse)
			);
			history.push({
				pathname: "/loanDetailsForm",
				state: {
					applicantId: applicantId.Applicant_ID,
					businessData: buisnessResponse,
				},
			});
			return () => setBuisnessResponse({});
		}
	}, [buisnessResponse]);

	return (
		<>
			<Container>
				<div className="heading">
					<h1>Buisness Details Form</h1>
				</div>
				<BuisnessFormComponent formData={formData} onSubmit={handleSubmit} />
			</Container>
		</>
	);
}

export default withRouter(BuisnessDetailsForm);

// applicant_ID: values.applicantId,
// business_Name: values.buisnessName,
// business_ContactNo: values.buisnessContactNo,
// business_Address: values.buisnessAddress,
// business_Description: values.buisnessDescription,

// axios
// 	.post(
// 		`${config.apiGateway.URL}/applicationsubmission/business`,

// {
// 	Applicant_ID: applicantId.Applicant_ID,
// 	Business_Name: values.buisnessName,
// 	Business_ContactNo: values.buisnessContactNo,
// 	Business_Address: values.buisnessAddress,
// 	Business_Description: values.buisnessDescription,
// }
// 	)
// .then((res) => {
// 	console.log(res);
// 	setBuisnessResponse(res.data);
// })
// .catch((err) => {
// 	console.log(err);
// });
