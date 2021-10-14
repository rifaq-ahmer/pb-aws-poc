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
	const appId = localStorage.getItem("applicantId");
	const handleSubmit = async (values) => {
		console.log(values);
		await Auth.currentAuthenticatedUser().then((response) => {
			const token = localStorage.getItem("accessToken");

			const request = {
				headers: {
					Authorization: token,
				},
				body: {
					Applicant_ID: applicantId.Applicant_ID || appId,
					Business_Name: values.buisnessName,
					Business_ContactNo: values.buisnessContactNo,
					Business_Address: values.buisnessAddress,
					Business_Description: values.buisnessDescription,
				},
			};
			API.post(
				"ApplicantSubmission",
				"/applicationsubmission/business",
				request
			)
				.then((res) => {
					console.log(res);
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
