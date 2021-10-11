import { Button } from "react-bootstrap";
// const appId = JSON.parse(localStorage.getItem("applicantResponse"));

function ApplicantCardComponent({
	fName,
	mName,
	lName,
	buisnessName,
	address,
	pincode,
	dob,
	email,
	phoneNo,
	buisnessDetails,
	addBuisness,
}) {
	return (
		<section className="user-card-details-outer">
			<section className="user-card-details">
				<div className="user-title">{`${fName} ${mName} ${lName} `}</div>
				<div>
					<strong>Address:</strong>
					{`${address}`}
				</div>
				<div>
					<strong>Date of birth:</strong>
					{`${dob}`}
				</div>
				<div>
					<strong>Email:</strong>
					{`${email}`}
				</div>
				<div>
					<strong>Phone No:</strong>
					{`${phoneNo}`}
				</div>
				<div className="btn-otuer">
					<Button variant="primary" onClick={buisnessDetails}>
						Buisness Details
					</Button>
					<Button variant="warning" onClick={addBuisness}>
						Add Buisness
					</Button>
				</div>
			</section>
		</section>
	);
}

export default ApplicantCardComponent;
