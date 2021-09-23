import React from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import BuisnessFormComponent from "../../components/buisness-form/buisness-form.component";

function BuisnessDetailsForm(formData) {
	const URL =
		"https://dc1nrv6pua.execute-api.ap-south-1.amazonaws.com/dev/applicationsubmission/business";
	const VALUES = {
		applicant_ID: 8,
		business_Name: "ZOMATO",
		business_ContactNo: 1234567890,
		business_Address: "KALYAN",
		business_Description: 421301,
	};
	const other_params = {
		headers: { "content-type": "application/json; charset=UTF-8" },
		body: VALUES,
		method: "POST",
		mode: "cors",
	};
	// async function postData(url = "", data = {}) {
	// 	const response = await fetch(url, {
	// 		method: "POST",
	// 		mode: "no-cors",
	// 		headers: {
	// 			"Access-Control-Allow-Origin": "*",
	// 		},
	// 	});
	// }
	const history = useHistory();
	const handleSubmit = async (values) => {
		// console.log(values);
		// postData(URL, other_params)
		// 	.then((data) => {
		// 		console.log("IN THEN BLOCK");
		// 		console.log(data);
		// 	})
		// 	.catch((err) => {
		// 		console.log("IN THEN ERROR");
		// 		console.log(err);
		// 	});
		fetch(URL, other_params)
			.then(function (response) {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Could not reach the API: " + response.statusText);
				}
			})
			.then(function (data) {
				console.log(data);
			})
			.catch(function (error) {
				console.log(error);
			});
		history.push("/LoanDetailsForm");
		return true;
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

// await axios
// 			.post(
// 				"https://dc1nrv6pua.execute-api.ap-south-1.amazonaws.com/dev/applicationsubmission/business",

// 				{
// 					applicant_ID: values.id,
// 					business_Name: values.name,
// 					business_ContactNo: values.phoneNo,
// 					business_Address: values.address,
// 					business_Description: values.pincode,
// 				}
// 			)
// 			.then((res) => {
// 				console.log(res.data);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
