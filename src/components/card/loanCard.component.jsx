import { Button } from "react-bootstrap";
function LoanCardComponent({
	businessId,
	applicantId,
	loanApplicationAmount,
	loanApplicationDate,
	loanApplicationDescription,
	loanApplicationStatus,
	loanApplicationBankerComment,
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
					<div className="user-title">User 1</div>
					<div>
						<strong>Address:</strong>Pune
					</div>
					<div>
						<strong>Amount:</strong>7,00,000
					</div>
					<div>
						<strong>Discription:</strong>lorem ipsum dolor sit amet, lorem ipsum
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
