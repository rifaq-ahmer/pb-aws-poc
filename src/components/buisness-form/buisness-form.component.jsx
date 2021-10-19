import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import Input from "../Input/input.component";
import { BuisnessFormFields } from "../../utils/buisnessFormFields";
import TextArea from "../textarea/textarea.component";
import CustomButton from "../Button/button.component";
// import Files from "react-files";

function BuisnessFormComponent({ onSubmit, formData }) {
	// const onFilesChange = (files) => {
	// 	console.log(files);
	// 	localStorage.setItem("businessDocuments", files);
	// };
	// const onFilesError = (error) => {
	// 	console.log("error code " + error.code + ": " + error.message);
	// };
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
					{BuisnessFormFields.map(
						({ type, id, label, className, maxLength }) => (
							<Fragment key={id}>
								{type === "text" && (
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
											value={values[id] || ""}
											onBlur={handleBlur}
											onChange={handleChange}
										/>
										{touched[id] && errors[id] && (
											<p className="text-danger">{errors[id]}</p>
										)}
									</>
								)}
							</Fragment>
						)
					)}
					{/* <div className="files">
						<Files
							className="files-dropzone"
							onChange={onFilesChange}
							onError={onFilesError}
							accepts={["image/png", ".pdf", "audio/*"]}
							multiple
							maxFiles={3}
							maxFileSize={10000000}
							minFileSize={0}
							clickable
						>
							<h6>Upload Business Documents</h6>
							Drop files here or click to upload
						</Files>
					</div> */}
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

export default BuisnessFormComponent;
