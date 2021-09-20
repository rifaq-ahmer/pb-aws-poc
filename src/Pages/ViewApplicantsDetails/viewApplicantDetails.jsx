import React from "react";
import { Container } from "react-bootstrap";
import CustomButton from "../../components/Button/button.component";
import ApplicantCardComponent from "../../components/card/applicantCard.component";

// import axios from "axios";

function AppliacantDetails({ history }) {
	// const [applicants, setApplicants] = useState([]);
	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			"https://dc1nrv6pua.execute-api.ap-south-1.amazonaws.com/dev/api/applicant/1"
	// 		)
	// 		.then((respoense) => {
	// 			console.log(respoense);
	// 		});
	// });

	const showBuisnessDetails = () => {
		history.push("/viewBuisnessDetails");
	};
	const showLoanDetails = () => {
		history.push("/viewLoanDetails");
	};

	// const handleClick = () => {
	// 	history.push("/buisnessDetailsForm");
	// };

	return (
		<>
			<div className="heading">
				<h1>Applicant Details</h1>
			</div>
			<Container>
				<ApplicantCardComponent
					id={"1"}
					fName={"Amit"}
					mName={"Prakash"}
					lName={"Patil"}
					address={"Kalyani Nagar, Pune"}
					pincode={"416002"}
					email={"amitpatil@gmail.com"}
					phoneNo={"9876543210"}
					buisnessDetails={showBuisnessDetails}
					loanDetails={showLoanDetails}
					dob={"01/02/1990"}
				></ApplicantCardComponent>
				{/* <CustomButton
					className="mt-3"
					variant="primary"
					type="button"
					onClick={handleClick}
				>
					Save & Next
				</CustomButton> */}
			</Container>
		</>
	);
}

export default AppliacantDetails;
