"use client";

import { useState } from "react";

export default function Checkbox() {
	const [checked, setChecked] = useState(false);

	return (
		<div
			className={`w-[18px] h-[18px] border-2 ${
				checked ? "border-secondary_dark" : "border-secondary_dark/60"
			} rounded-[3px] cursor-pointer hover:border-secondary_dark flex-middle transition-all duration-100`}
			onClick={() => setChecked(!checked)}>
			<div
				className={`w-2.5 h-2.5 bg-secondary_dark transition-all duration-100 rounded-sm ${
					checked ? "scale-100" : "scale-0"
				}`}
			/>
		</div>
	);
}
