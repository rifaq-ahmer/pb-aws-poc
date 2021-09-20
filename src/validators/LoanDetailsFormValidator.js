import * as Yup from "yup";
export const LoanDetailsFormValidationSchema = Yup.object({
	applicantId: Yup.string().required("Required").min(1).max(20),
	buisnessId: Yup.string().required("Required").min(1).max(20),
	loanApplicationAmount: Yup.string().required("Required").min(3).max(20),
	loanApplicationDescription: Yup.string().required("Required").min(3).max(10),
	loanApplicationStatus: Yup.string().required("Required").min(1).max(200),
	loanApplicationBankersComment: Yup.string()
		.required("Required")
		.min(3)
		.max(10),
});
