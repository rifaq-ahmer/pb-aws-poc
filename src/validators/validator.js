import * as Yup from "yup";

const phoneRegex =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const emailRegex = /\S+@\S+\.\S+/;

const onlyCharacter = /^[A-Za-z]+$/;

export const validationSchema = Yup.object({
	firstName: Yup.string()
		.matches(onlyCharacter, "Only Character are allowed")
		.required("Required")
		.min(3)
		.max(20),
	middleName: Yup.string().required("Required").min(3).max(20),
	lastName: Yup.string()
		.matches(onlyCharacter, "Only Character are allowed")
		.required("Required")
		.min(3)
		.max(20),
	phoneNo: Yup.string()
		.matches(phoneRegex, "Phone number is not valid")
		.required("Required")
		.min(10)
		.max(10, "Phone Number must be of 10 characters"),
	email: Yup.string()
		.matches(emailRegex, "Email is not valid")
		.required("Required"),
	address: Yup.string().required("Required").min(3).max(200),
});
