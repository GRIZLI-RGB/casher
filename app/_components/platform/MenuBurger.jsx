"use client";

export default function MenuBurger({ open, setOpen }) {
	if (open) {
		return (
			<div className="absolute top-0 left-0 bottom-0 right-0 bg-dark/25 z-[999]">
				<div className="bg-white w-[500px] mr-auto h-full px-[45px] py-10">
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-[#121212] font-halvar font-medium text-[28px] leading-[29px]">
							Навигация по сайту
						</h2>
						<img
							className="cursor-pointer hover:opacity-80"
							src="/icons/close.svg"
							onClick={() => setOpen(false)}
						/>
					</div>
					<nav className="border-y border-[#121212]/20">
						{[
							{
								text: "Каталог",
								link: "catalog",
							},
							{
								text: "Контакты",
								link: "#",
							},
						].map(({ text, link }, index) => (
							<a
								className={`p-6 block uppercase font-inter text-[18px] font-medium hover:bg-dark/5 ${
									index !== 0 && "border-t border-[#121212]/20"
								}`}
								href={`/${link}`}>
								{text}
							</a>
						))}
						<button className={`p-6 uppercase font-inter text-[18px] font-medium hover:bg-dark/5 block border-t border-[#121212]/20 w-full text-left`}>
							Вход/регистрация
						</button>
					</nav>
				</div>
			</div>
		);
	}
}
