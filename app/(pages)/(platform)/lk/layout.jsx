"use client";

import { usePathname } from "next/navigation";

export default function LkLayout({ children }) {
	const pathname = usePathname();

	return (
		<div className="flex items-start gap-10 py-20 px-[30px] max-w-[1740px] mx-auto lg:flex-col lg:p-5">
			<div className="w-[405px]">
				<div className="border-2 border-dark rounded-[4px] flex gap-4 p-2">
					<img className="block w-20 h-20 rounded-[4px]" src="/img/avatar.png" alt="Аватар пользователя" />
					<div className="font-inter">
						<h6 className="font-semibold text-[18px]">NICKNAME</h6>
						<button className="hover:opacity-60 font-medium text-[14px] text-black/60">LOGOUT</button>
					</div>
				</div>
				<nav className="mt-8 flex flex-col gap-3">
					{[
						{ text: "Панель управления", link: "dashboard" },
						{ text: "Заказы", link: "orders" },
						{ text: "Адреса", link: "addresses" },
						{ text: "Выйти", link: "catalog" },
					].map(({ text, link }) => (
						<a
                        key={text}
							className={`uppercase font-inter font-medium text-[#232323] px-3 py-2 flex gap-3 items-center rounded-lg ${
								pathname.split("/")[2] === link ? "bg-dark" : "hover:outline hover:outline-1"
							}`}
							href={`/lk/${link}`}>
							<img
								className={pathname.split("/")[2] === link ? "invert-[1]" : "opacity-25"}
								src={`/icons/${link !== "catalog" ? link : "quit"}.svg`}
								alt=""
							/>
							<span className={pathname.split("/")[2] === link && "text-white"}>{text}</span>
						</a>
					))}
				</nav>
				<a
					className="mt-8 uppercase font-inter font-medium text-[#232323] px-3 py-2 flex gap-3 items-center rounded-lg bg-[#EFEFEF] hover:bg-dark/15"
					href="https://web.telegram.org"
					target="_blank">
					<img src={`/icons/support.svg`} alt="" />
					<span>Поддержка</span>
				</a>
			</div>
			<div className="grow lg:pb-5">{children}</div>
		</div>
	);
}
