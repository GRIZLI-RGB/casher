"use client";

import useOnclickOutside from "react-cool-onclickoutside";
import Checkbox from "./Checkbox";

export default function Auth({ open, setOpen }) {
	const authRef = useOnclickOutside(() => setOpen(false));

	if (open) {
		return (
			<div className="fixed top-0 left-0 bottom-0 right-0 bg-dark/15 z-[999] flex-middle backdrop-blur-[8px]">
				<div className="bg-white max-w-[318px] mx-auto rounded-lg px-6 py-8 shadow-2xl" ref={authRef}>
					<h6 className="font-inter text-[18px] text-dark leading-[18px] font-bold text-center">
						Создайте аккаунт
					</h6>
					<button className="flex items-center gap-1.5 font-inter font-semibold text-[13px] text-white bg-[#25B0FF] rounded-md px-6 py-2 w-full hover:opacity-80 justify-center mt-6 mb-8 whitespace-nowrap">
						<img src="/icons/tg.svg" alt="" />
						Продолжить через телеграмм
					</button>
					<div className="flex items-center gap-4 justify-between">
						<div className="h-px grow bg-dark/30" />
						<span className="font-inter font-bold text-[18px] leading-[18px]">ИЛИ</span>
						<div className="h-px grow bg-dark/30" />
					</div>
					<div className="flex flex-col gap-[9px] mt-8 mb-4">
						<input
							className="bg-[#F3F3F3] rounded-[6px] h-10 font-inter text-[13px] placeholder:text-dark text-dark text-center"
							type="text"
							placeholder="Введите Email"
						/>
						<input
							className="bg-[#F3F3F3] rounded-[6px] h-10 font-inter text-[13px] placeholder:text-dark text-dark text-center"
							type="text"
							placeholder="Пароль"
						/>
						<input
							className="bg-[#F3F3F3] rounded-[6px] h-10 font-inter text-[13px] placeholder:text-dark text-dark text-center"
							type="text"
							placeholder="Повторите пароль"
						/>
					</div>
					<div className="flex items-center justify-between gap-3">
						<Checkbox label={"Запомнить меня"} />
						<button className="hover:opacity-80 font-inter font-medium text-[14px] leading-[18px] text-dark">
							Забыли пароль?
						</button>
					</div>
					<button className="mt-4 mb-[18px] bg-dark rounded-[4px] text-center w-full px-5 uppercase font-gotham font-bold text-[14px] leading-[38px] text-white hover:bg-secondary_dark">
						Создать
					</button>
					<div className="text-center">
						<a className="opacity-70 font-inter font-medium text-[14px] hover:opacity-80" href="#">
							Уже есть аккаунт?
						</a>
					</div>
				</div>
			</div>
		);
	}
}
