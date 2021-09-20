import { Card, Button } from "react-bootstrap";

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
		// <Card style={{ width: "25rem", marginRight: "20px" }} className="mt-4">
		// 	<Card.Body>
		// 		<Card.Title>{`Name: ${fName} ${mName} ${lName} `}</Card.Title>
		// 		<Card.Subtitle className="mb-2 text-muted">
		// 			{`Address: ${address},${pincode}`}
		// 		</Card.Subtitle>
		// 		<Card.Text>{`Date of birth: ${dob}`}</Card.Text>
		// 		<Card.Text>{`Email: ${email}`}</Card.Text>
		// 		<Card.Text>{`Phone No: ${phoneNo}`}</Card.Text>
		// 		<Button
		// 			style={{ marginRight: "10px" }}
		// 			variant="primary"
		// 			onClick={buisnessDetails}
		// 		>
		// 			Go to Buisness Details
		// 		</Button>
		// 		<Button variant="danger" onClick={loanDetails}>
		// 			Go to Loan Details
		// 		</Button>
		// 	</Card.Body>
		// </Card>
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
						Go to Buisness Details
					</Button>
					<Button variant="warning" onClick={loanDetails}>
						Go to Loan Details
					</Button>
				</div>
			</section>
		</section>
	);
}

export default ApplicantCardComponent;
