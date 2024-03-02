"use client";

import { useState } from "react";

export default function Checkbox({ label }) {
	const [checked, setChecked] = useState(false);

	return (
		<div className="flex items-center gap-1.5">
			<div
				className={`w-4 h-4 rounded-[2px] cursor-pointer hover:opacity-80 ${
					checked ? "bg-dark" : "border border-dark/60"
				}`}
				onClick={() => setChecked(!checked)}>
				{checked && (
					<div className="pl-[3px] pt-[1px]">
						<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="path-1-inside-1_61_5443" fill="white">
								<path d="M6.91016 0.549805L10.4457 4.08534L4.08173 10.4493L0.546191 6.91377L6.91016 0.549805Z" />
							</mask>
							<path
								d="M4.08173 10.4493L2.66752 11.8635L4.08173 13.2777L5.49594 11.8635L4.08173 10.4493ZM9.03148 2.67113L2.66752 9.0351L5.49594 11.8635L11.8599 5.49956L9.03148 2.67113ZM5.49594 9.0351L1.9604 5.49956L-0.868023 8.32798L2.66752 11.8635L5.49594 9.0351Z"
								fill="white"
								mask="url(#path-1-inside-1_61_5443)"
							/>
						</svg>
					</div>
				)}
			</div>
			{label && <p className="font-inter text-[14px] leading-[18px] text-dark/60">{label}</p>}
		</div>
	);
}
