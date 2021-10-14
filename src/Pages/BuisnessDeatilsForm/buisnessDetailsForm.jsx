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
			// const token = localStorage.getItem("accessToken");
			const token =
				"eyJraWQiOiJDaXY3UGxuNnprT3VBQitOQ05WM0J1YjJrUjJjUnQ5ekdVVk1BTnVvNHQ0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MTE5NmExMi1jOGMwLTQxMjUtOGRhYS0yZWI2ZTI3OThmYzYiLCJldmVudF9pZCI6ImY5NTkzODViLWFmZmQtNGRmMi1iZWY4LTIyYzA3ZWRhMTc3ZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gcGhvbmUgb3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhdXRoX3RpbWUiOjE2MzQwOTc4NzcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfVDZFYWk0RDdNIiwiZXhwIjoxNjM0MTg0Mjc3LCJpYXQiOjE2MzQwOTc4NzcsInZlcnNpb24iOjIsImp0aSI6IjQ3MzViM2E3LWUwNTQtNDQxOC1hMzE1LTdiZTFmZTcyYjc2MSIsImNsaWVudF9pZCI6IjJicGhnZHQ4a25iOHZ1YThycjBuN2lyaGZtIiwidXNlcm5hbWUiOiJwcmF2aW4ifQ.uOeFFhp8tzt5oEUfPVraJvRv5SyQCDOanQrPFw_P_ruZZ5hLJ8uj1sLGVP8KS4Z3OGLQQQmWGzYWptvzCtWQ4AE9Go-ycKw1Fisj7UfDa_-95HflxXd8wRB-qQ-___aVe7gumOyszFOY8wBK1b5Srb-qWxcZv_2MsKcGpPRHG5_WgCa9wdqfep8ph2YCw_b6CFoqqnSaLMrg6c8RYLnS4lpAZbSAhh3OB4yYgSpM1oJtirxBQAo1iXaXJw4bR6r8aHtiZ2oeca01bFLeE4kCvVI3nonVV-uojqehCv4xoy4UNSdzVzKAQrQV8j_LA2aCzhSY4noqK693BXb0mnnKSA";
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
