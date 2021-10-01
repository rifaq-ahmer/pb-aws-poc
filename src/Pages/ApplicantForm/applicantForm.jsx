import React from "react";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import ApplicantFormComponent from "../../components/application-form/application-form.component";

function ApplicantDetailsForm(formData) {
	const history = useHistory();
	const handleSubmit = async (values) => {
		console.log(values);
		history.push("/buisnessDetailsForm");

		await axios
			.post(
				"https://g9yh14f7ve.execute-api.ap-south-1.amazonaws.com/Authorizeddev/applicationsubmission/applicant",

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
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
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
