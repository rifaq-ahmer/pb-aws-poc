import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { Auth, API } from "aws-amplify";
import { Container } from "react-bootstrap";
import ApplicantFormComponent from "../../components/application-form/application-form.component";

function ApplicantDetailsForm(formData) {
	const [applicantResponse, setApplicantResponse] = useState({});
	const applicantId = applicantResponse.ID;
	localStorage.setItem("applicantId", applicantId);

	const history = useHistory();
	const handleSubmit = async (values) => {
		console.log(values);

		await Auth.currentAuthenticatedUser().then((response) => {
			const token = response.signInUserSession.accessToken.jwtToken;
			localStorage.setItem("accessToken", token);
			const request = {
				headers: {
					Authorization: token,
				},
				body: {
					applicant_fname: values.firstName,
					applicant_mname: values.middleName,
					applicant_lname: values.lastName,
					applicant_address: values.address,
					applicant_pincode: values.pinCode,
					applicant_dob: values.dob,
					applicant_email: values.email,
					applicant_mobno: values.phoneNo,
					Applicant_Document: "Test.txt",
				},
			};
			API.post(
				"ApplicantSubmission",
				"/applicationsubmission/applicant",
				request
			)
				.then((res) => {
					console.log(res);
					setApplicantResponse(res);
				})
				.catch((err) => {
					console.log(err);
				});
		});
		// localStorage.removeItem("applicantDocuments");
	};

	useEffect(() => {
		if (Object.keys(applicantResponse).length > 0) {
			history.push({
				pathname: "/buisnessDetailsForm",
				state: applicantResponse,
			});
			return () => setApplicantResponse({});
		}
	}, [applicantResponse]);

	return (
		<>
			<Container>
				<div className="heading">
					<h1>Applicant Details Form</h1>
				</div>

				<ApplicantFormComponent formData={formData} onSubmit={handleSubmit} />
			</Container>
		</>
	);
}

export default withRouter(ApplicantDetailsForm);

// const files = JSON.parse(localStorage.getItem("applicantDocuments"));
// const file = files[0];
// console.log(file);

// if (res.ID) {
// 	const ID = res.ID;

// 	Auth.currentAuthenticatedUser().then(() => {
// 		const request = {
// 			headers: {
// 				Authorization: token,
// 				"Content-Type": "text/html,multipart/form-data",
// 			},
// 			body: {
// 				myfile: file,
// 			},
// 		};
// 		API.post(
// 			"ApplicantSubmission",
// 			`/applicationsubmission/document/${ID}`,
// 			request
// 		)
// 			.then((res) => {
// 				console.log(res);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	});
// 	}
