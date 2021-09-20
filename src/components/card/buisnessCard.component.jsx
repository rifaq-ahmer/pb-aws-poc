import { Card, Button } from "react-bootstrap";
function BuisnessCardComponent({
	buisnessId,
	applicantId,
	buisnessName,
	buisnessAddress,
	buisnessContactNo,
	buisnessDescription,
	applicantDetails,
	loanDetails,
}) {
	return (
		//<Card style={{ width: "18rem", marginRight: "20px" }} className="mt-4">
		//<Card.Body>
		//<Card.Title>{`Buisness: ${buisnessName}`}</Card.Title>
		//<Card.Subtitle className="mb-2 text-muted">
		//{`Address: ${buisnessAddress}`}
		//</Card.Subtitle>
		//<Card.Text>{`Phone No: ${buisnessContactNo}`}</Card.Text>
		//<Card.Text>{` Description ${buisnessDescription}`}</Card.Text>
		//<Button variant="primary" onClick={applicantDetails}>
		//Go to Applicant Details
		//</Button>
		//</Card.Body>
		//</Card>
		<section className="user-card-details-outer">
			<section className="user-card-details">
				<div className="user-title">{`${buisnessName}`}</div>
				<div>
					<strong>Address:</strong>
					{`${buisnessAddress}`}
				</div>
				<div>
					<strong>Phone No:</strong>
					{`${buisnessContactNo}`}
				</div>
				<div>
					<strong>Description:</strong>
					{`${buisnessDescription}`}
				</div>
				<div className="btn-otuer">
					<Button variant="primary" onClick={applicantDetails}>
						Go to Applicant Details
					</Button>
					<Button variant="warning" onClick={loanDetails}>
						Go to Loan Details
					</Button>
				</div>
			</section>
		</section>
	);
}

export default BuisnessCardComponent;
