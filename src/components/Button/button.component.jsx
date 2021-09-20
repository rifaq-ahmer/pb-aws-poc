import React from "react";
import { Button } from "react-bootstrap";

function CustomButton({
	children,
	onClick,
	variant,
	type,
	className,
	disabled,
}) {
	return (
		<Button
			className={className}
			type={type}
			variant={variant || "primary"}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</Button>
	);
}

export default CustomButton;
