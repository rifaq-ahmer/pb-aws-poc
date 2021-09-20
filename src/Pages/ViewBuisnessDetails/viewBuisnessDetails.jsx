import React from "react";
import { Container } from "react-bootstrap";
import BuisnessCardComponent from "../../components/card/buisnessCard.component";

function ViewBuisnessDetails({ history }) {
	const showApplicantDetails = () => {
		history.push("/viewApplicantsDetails");
	};

	return (
		<>
			<div className="heading">
				<h1>All Buisness Details</h1>
			</div>
			<Container>
				<BuisnessCardComponent
					buisnessName={"Zomato Food"}
					buisnessAddress={"Pune"}
					buisnessContactNo={"9876543210"}
					buisnessDescription={"Online Food Delivery Service"}
					applicantDetails={showApplicantDetails}
				/>
			</Container>
		</>
	);
}

export default ViewBuisnessDetails;
