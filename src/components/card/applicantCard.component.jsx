import { Button } from "react-bootstrap";

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
	loanDetails,
}) {
	return (
		<section className="user-card-details-outer">
			<section className="user-card-details">
				<div className="user-title">{`${fName} ${mName} ${lName} `}</div>
				<div>
					<strong>Address:</strong>
					{`${address},${pincode}`}
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
					<Button variant="warning" onClick={loanDetails}>
						Loan Details
					</Button>
				</div>
			</section>
		</section>
	);
}

export default ApplicantCardComponent;
