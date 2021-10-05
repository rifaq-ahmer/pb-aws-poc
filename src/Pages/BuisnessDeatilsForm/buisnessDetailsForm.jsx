import React from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import BuisnessFormComponent from "../../components/buisness-form/buisness-form.component";
import { BUISNESS_POST } from "../../api-constant";

function BuisnessDetailsForm(formData) {
	const history = useHistory();
	const handleSubmit = async (values) => {
		console.log(values);
		history.push("/loanDetailsForm");
		await axios
			.post(
				BUISNESS_POST,

				{
					Applicant_ID: values.applicantId,
					Business_Name: values.buisnessName,
					Business_ContactNo: values.buisnessContactNo,
					Business_Address: values.buisnessAddress,
					Business_Description: values.buisnessDescription,
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
