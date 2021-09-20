import * as Yup from "yup";
const phoneRegex =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const onlyCharacter = /^[A-Za-z]+$/;

export const BuisnessDetailsFormValidationSchema = Yup.object({
	applicantId: Yup.string().required("Required").min(1).max(20),
	buisnessName: Yup.string()
		.matches(onlyCharacter, "Only Character are allowed")
		.required("Required")
		.min(3)
		.max(20),
	buisnessDescription: Yup.string()
		.matches(onlyCharacter, "Only Character are allowed")
		.required("Required")
		.min(3)
		.max(20),
	buisnessContactNo: Yup.string()
		.matches(phoneRegex, "Phone number is not valid")
		.required("Required")
		.min(10)
		.max(10, "Phone Number must be of 10 characters"),

	buisnessAddress: Yup.string().required("Required").min(3).max(200),
});
