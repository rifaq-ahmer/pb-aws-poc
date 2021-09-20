import { Button } from "react-bootstrap";
function LoanCardComponent({
	businessId,
	applicantId,
	loanApplicationAmount,
	loanApplicationDate,
	loanApplicationDescription,
	loanApplicationStatus,
	loanApplicationBankerComment,
	name,
	address,
	amount,
	description,
	applicantDetails,
}) {
	return (
		// <Card style={{ width: "18rem", marginRight: "20px" }} className="mt-4">
		// 	<Card.Body>
		// 		<Card.Title>{buisnessName}</Card.Title>
		// 		<Card.Subtitle className="mb-2 text-muted">
		// 			{buisnessAddress}
		// 		</Card.Subtitle>
		// 		<Card.Text>{buisnessContactNo}</Card.Text>
		// 		<Card.Text>{buisnessDescription}</Card.Text>
		// 		<Button variant="primary" onClick={applicantDetails}>
		// 			Go to Applicant Details
		// 		</Button>
		// 	</Card.Body>
		// </Card>

		<section className="user-card-details-outer">
			<section className="user-card-details">
				<div className="user-title">{`${name}`}</div>
				<div>
					<strong>Address:</strong>
					{`${address}`}
				</div>
				<div>
					<strong>Amount:</strong>
					{`${amount}`}
				</div>
				<div>
					<strong>Discription:</strong>
					{`${description}`}
				</div>
				<div className="btn-otuer">
					<Button variant="primary" onClick={applicantDetails}>
						Go to Applicant Details
					</Button>
				</div>
			</section>
		</section>
	);
}

export default LoanCardComponent;
