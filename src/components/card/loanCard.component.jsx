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
	date,
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
					<strong>Loan Application Date :</strong>
					{`${date}`}
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
