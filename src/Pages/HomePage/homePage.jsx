import React from "react";

import CustomButton from "../../components/Button/button.component";
function HomePage({ history }) {
	const handleClick = () => {
		history.push("/applicantDetailsForm");
	};
	return (
		<>
			<div className="home-btn-outer">
				<CustomButton
					className="mt-3"
					variant="primary"
					type="button"
					onClick={handleClick}
				>
					Apply For Loan!
				</CustomButton>
			</div>
		</>
	);
}

export default HomePage;
