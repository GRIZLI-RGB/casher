"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import History from "./History";

export default function Hystories() {
	const [domReady, setDomReady] = useState(false);

	const [historyOpen, setHistoryOpen] = useState(false);

	useEffect(() => {
		setDomReady(true);
	}, []);

	return (
		<>
			<section>
				<h2 className="text-dark font-gotham font-bold text-[32px] uppercase mb-5">Истории</h2>
				<div className="flex gap-5 xl:gap-3 overflow-auto custom-scrollbar-for-histories min-w-full pb-3">
					{[...new Array(6)].map((_, index) => (
						<div
							className="w-[165px] min-w-[165px] h-[290px] rounded-2xl overflow-hidden relative cursor-pointer group"
							key={index}
							onClick={() => setHistoryOpen(true)}>
							<img
								className="block group-hover:scale-105 transition-transform duration-300"
								src="/img/history.png"
								alt=""
							/>
							<div className="absolute bottom-7 left-0 right-0 flex-middle flex-col gap-2.5">
								<div className="rounded-full relative flex-middle">
									<img
										className="animate-spin_slow duration-500"
										src="/img/history-gradient.png"
										alt=""
									/>
									<img className="absolute" src="/img/history-casher.png" alt="" />
								</div>
								<h6 className="font-gotham font-bold text-[24px] text-white">STORY</h6>
							</div>
						</div>
					))}
				</div>
			</section>
			{domReady &&
				createPortal(
					<History open={historyOpen} setOpen={setHistoryOpen} />,
					document.getElementById("platform-layout-children"),
				)}
		</>
	);
}
