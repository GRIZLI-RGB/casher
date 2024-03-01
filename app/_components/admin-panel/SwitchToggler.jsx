"use client";

import { useState } from "react";
import Switch from "react-switch";

export default function SwitchToggler() {
	const [checked, setChecked] = useState(false);

	return (
		<Switch
			activeBoxShadow=""
			width={50}
			height={22}
			checked={checked}
			onChange={state => setChecked(state)}
			offColor="#F8F8F8"
			onColor="#F8F8F8"
            offHandleColor="#ffffff"
            handleDiameter={26}
            onHandleColor="#232323"
			checkedIcon={false}
			uncheckedIcon={false}
		/>
	);
}
