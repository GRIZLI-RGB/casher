"use client";

import { useState } from "react";

export default function LegitCheckerPage() {
	const [status, setStatus] = useState("waiting"); // waiting || success || error

	return (
		<section className="py-[110px] px-6 flex-middle flex-col font-gotham max-w-[1115px] mx-auto md:px-4">
			<h1 className="px-[38px] py-2.5 font-bold text-[32px] text-white bg-dark rounded-[9px] sm:text-[28px] sm:px-7">
				LEGIT CHECKER
			</h1>
			<div className="mt-11 mb-6 gap-10 grid grid-cols-2 h-[60px] w-full md:grid-cols-1 md:h-full md:gap-3">
				<input
					className={`rounded-[9px] border-2 font-bold text-[24px] text-center uppercase placeholder:text-dark md:h-[60px] ${
						status === "error"
							? "text-negative border-negative/25 bg-[#FFF6F6]"
							: status === "success"
							? "text-positive border-positive/25 bg-[#F8FFF6]"
							: "text-dark border-dark/25 bg-white"
					}`}
					type="text"
					placeholder="Введите код"
				/>
				<button
					className="rounded-[9px] bg-dark uppercase font-bold text-[24px] text-white hover:bg-secondary_dark md:h-[60px]"
					onClick={() => setStatus("error")}>
					Проверить
				</button>
			</div>
			<div className="uppercase font-bold text-[18px] text-center text-[#808080] leading-[125%] sm:text-[15px]">
				<p className="mb-2.5">
					на данной странице Вы можете проверить подлинность вашего изделия. введите уникальный код{" "}
					<span className="text-dark after:absolute relative after:left-0 after:right-0 after:h-px after:bg-dark after:bottom-0">
						указанный
					</span>
					на вашем изделии и дождитесь проверки
				</p>
				<p>
					Если у вас возникли проблемы или другие вопросы, то обратитесь в нашу{" "}
					<span className="text-dark after:absolute relative after:left-0 after:right-0 after:h-px after:bg-dark after:bottom-0">
						службу поддержки
					</span>
				</p>
			</div>
		</section>
	);
}
