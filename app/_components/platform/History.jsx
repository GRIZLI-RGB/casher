"use client";

import { AnimatePresence, motion } from "framer-motion";
import useOnclickOutside from "react-cool-onclickoutside";

const variants = {
	visible: { opacity: 1, scale: 1 },
	hidden: { opacity: 0, scale: 1.2 },
};

export default function History({ open, setOpen }) {
	const historyRef = useOnclickOutside(() => setOpen(false));

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					className="fixed top-0 left-0 bottom-0 right-0 bg-dark/15 z-[999] flex-middle backdrop-blur-[8px]"
					initial={"hidden"}
					animate={"visible"}
					exit={"hidden"}
					variants={variants}
					transition={{
						duration: 0.2,
					}}>
					<div
						className="bg-white w-[590px] mx-auto rounded-[32px] overflow-hidden p-1 h-[86vh] relative"
						ref={historyRef}>
						<img
							className="block w-full object-cover h-full rounded-[30px]"
							src="/img/history-2.png"
							alt=""
						/>
						<div className="absolute bottom-[8%] left-[10%] height-[10%] bg-white/60 rounded-full right-[10%] h-2">
							<div className="h-full rounded-full bg-white w-1/3" />
						</div>
						<div className="absolute top-[6%] left-[10%] flex gap-6 items-center">
							<div className="rounded-full relative flex-middle h-[72px] w-[72px]">
								<img
									className="animate-spin_slow duration-500 w-full h-full"
									src="/img/history-gradient.png"
									alt=""
								/>
								<img className="absolute w-[87%] h-[87%]" src="/img/history-casher.png" alt="" />
							</div>
							<img src="/img/logo.svg" className="h-[34px] invert-[1]" />
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
