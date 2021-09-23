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
	status,
	comment,
	amount,
	description,
	applicantDetails,
}) {
	return (
		<section className="user-card-details-outer">
			<section className="user-card-details">
				<div>
					<strong>Amount:</strong>
					{`${amount}`}
				</div>
				<div>
					<strong>Description:</strong>
					{`${description}`}
				</div>
				<div>
					<strong>Loan Status:</strong>
					{`${status}`}
				</div>
				<div>
					<strong>Bankers Comment:</strong>
					{`${comment}`}
				</div>
				<div className="btn-otuer">
					<Button variant="primary" onClick={applicantDetails}>
						Applicant Details
					</Button>
				</div>
			</section>
		</section>
	);
}

export default LoanCardComponent;
