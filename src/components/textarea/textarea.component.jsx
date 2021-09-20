import { Form } from "react-bootstrap";
import React from "react";

function TextArea({
	className,
	label,
	id,
	placeHolder,
	infoMessage,
	onChange,
	rows,
	value,
	inputName,
	onBlur,
}) {
	return (
		<Form.Group className={className} controlId={id}>
			<Form.Label>{label}</Form.Label>
			<Form.Control
				name={inputName}
				as="textarea"
				rows={rows}
				placeholder={placeHolder}
				onChange={onChange}
				value={value}
				onBlur={onBlur}
			/>
			<Form.Text className="text-muted">{infoMessage}</Form.Text>
		</Form.Group>
	);
}

export default TextArea;
