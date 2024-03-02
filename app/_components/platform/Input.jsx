export default function Input({
	label,
	secondary_label,
	value,
	add_button,
	type = "text",
	placeholder = "",
	disabled = false,
}) {
	return (
		<div className="font-inter">
			{label && (
				<label className="text-secondary_dark/60 font-medium text-[18px] block mb-1.5 leading-[120%]">
					{label}
				</label>
			)}
			<div className="border border-black/25 rounded-lg h-[56px] p-4 leading-[100%] flex justify-between items-center gap-5">
				<input className="placeholder:text-dark/25 text-[20px] font-medium text-secondary_dark" type={type} placeholder={placeholder} value={value} disabled={disabled} />
				{add_button && <button className="text-[#174AFF] font-medium text-[20px] relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:bg-[#174AFF] after:h-px hover:opacity-70">{add_button === "track" && "Отследить"}</button>}
			</div>
			{secondary_label && (
				<label className="block leading-[100%] text-[18px] mt-1.5 text-secondary_dark/60">
					{secondary_label}
				</label>
			)}
		</div>
	);
}
