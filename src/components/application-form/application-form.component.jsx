import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import Input from "../Input/input.component";
import { formFields } from "../../utils/formField";
import TextArea from "../textarea/textarea.component";
import CustomButton from "../Button/button.component";

function ApplicantFormComponent({ onSubmit, formData }) {
	return (
		<Formik
			initialValues={formData}
			enableReinitialize
			validateOnChange
			onSubmit={onSubmit}
		>
			{({
				handleSubmit,
				handleChange,
				values,
				errors,
				touched,
				handleBlur,
				isValid,
				isSubmitting,
			}) => (
				<Form onSubmit={handleSubmit} className="custom-forms">
					{formFields.map(({ type, id, label, className, maxLength }) => (
						<Fragment key={id}>
							{(type === "text" || type === "email") && (
								<>
									<Input
										inputName={id}
										type={type}
										className={className}
										id={id}
										label={label}
										value={values[id] || " "}
										onChange={handleChange}
										onBlur={handleBlur}
										maxLength={maxLength}
									/>
									{touched[id] && errors[id] && (
										<p className="text-danger">{errors[id]}</p>
									)}
								</>
							)}
							{type === "date" && (
								<>
									<Input
										inputName={id}
										type={type}
										className={className}
										id={id}
										label={label}
										value={values[id] || ""}
										onChange={handleChange}
										onBlur={handleBlur}
										maxLength={maxLength}
									/>
									{touched[id] && errors[id] && (
										<p className="text-danger">{errors[id]}</p>
									)}
								</>
							)}
							{type === "textarea" && (
								<>
									<TextArea
										inputName={id}
										rows={3}
										className={className}
										id={id}
										label={label}
										value={values[id]}
										onBlur={handleBlur}
										onChange={handleChange}
									/>
									{touched[id] && errors[id] && (
										<p className="text-danger">{errors[id]}</p>
									)}
								</>
							)}
						</Fragment>
					))}
					<div>
						<CustomButton
							className="mt-3"
							variant="primary"
							type="submit"
							disabled={!isValid || isSubmitting}
						>
							Save & Next
						</CustomButton>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default ApplicantFormComponent;
