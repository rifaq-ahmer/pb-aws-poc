import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { Auth, API } from "aws-amplify";
import { Container } from "react-bootstrap";
import ApplicantFormComponent from "../../components/application-form/application-form.component";

function ApplicantDetailsForm(formData) {
	const [applicantResponse, setApplicantResponse] = useState({});

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
			};
			API.post(
				"ApplicantSubmission",
				"/applicationsubmission/applicant",
				request,
				{
					applicant_fname: values.firstName,
					applicant_mname: values.middleName,
					applicant_lname: values.lastName,
					applicant_address: values.address,
					applicant_pincode: values.pinCode,
					applicant_dob: values.dob,
					applicant_email: values.email,
					applicant_mobno: values.phoneNo,
				}
			)
				.then((res) => {
					if (res.ID) {
						console.log(res);
						setApplicantResponse(res);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		});
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

// await axios
// 	.post(
// 		`${config.apiGateway.URL}/applicationsubmission/applicant`,

// 		{
// 			applicant_fname: values.firstName,
// 			applicant_mname: values.middleName,
// 			applicant_lname: values.lastName,
// 			applicant_address: values.address,
// 			applicant_pincode: values.pinCode,
// 			applicant_dob: values.dob,
// 			applicant_email: values.email,
// 			applicant_mobno: values.phoneNo,
// 		}
// 	)
// 	.then((res) => {
// 		if (res.data.ID) {
// 			console.log(res.data);
// 			setApplicantResponse(res.data);
// 		}
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
