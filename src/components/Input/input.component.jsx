import { Form } from "react-bootstrap";
import React from "react";

function Input({
	className,
	label,
	inputName,
	id,
	type,
	value,
	placeHolder,
	infoMessage,
	onChange,
	infoMessageClasses,
	maxLength,
	onBlur,
}) {
	return (
		<div>
			<Form.Group className={className} controlId={id}>
				<Form.Label>{label}</Form.Label>
				<Form.Control
					type={type}
					aria-label={label}
					maxLength={maxLength}
					name={inputName}
					placeholder={placeHolder}
					onChange={onChange}
					value={value || ""}
					onBlur={onBlur}
				/>
				<Form.Text className={infoMessageClasses}>{infoMessage}</Form.Text>
			</Form.Group>
		</div>
	);
}

export default Input;
