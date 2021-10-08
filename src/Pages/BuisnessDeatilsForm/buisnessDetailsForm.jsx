import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import BuisnessFormComponent from "../../components/buisness-form/buisness-form.component";
import { config } from "../../aws-config";

function BuisnessDetailsForm(formData) {
	const [buisnessResponse, setBuisnessResponse] = useState({});
	const history = useHistory();
	const location = useLocation();
	const applicantId = location.state;
	console.log(applicantId.ID);
	const handleSubmit = async (values) => {
		console.log(values);
		await axios
			.post(
				`${config.apiGateway.URL}/applicationsubmission/business`,

				{
					Applicant_ID: applicantId.ID,
					Business_Name: values.buisnessName,
					Business_ContactNo: values.buisnessContactNo,
					Business_Address: values.buisnessAddress,
					Business_Description: values.buisnessDescription,
				}
			)
			.then((res) => {
				console.log(res.data);
				setBuisnessResponse(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		if (Object.keys(buisnessResponse).length > 0) {
			history.push({
				pathname: "/loanDetailsForm",
				state: { applicantId: applicantId.ID, businessData: buisnessResponse },
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
