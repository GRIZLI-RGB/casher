"use client";

import { usePathname } from "next/navigation";

export default function AdminPanelLayout({ children }) {
	const pathname = usePathname();

	return (
		<div className="flex h-full">
			<div className="px-5 py-14 border-r border-secondary_dark/15 flex flex-col fixed bottom-0 top-0 xxl:px-2.5 md:items-center md:!px-1">
				<nav className="mt-8 flex flex-col gap-3 w-[312px] xxl:w-[200px] grow md:!w-[78px]">
					{[
						{ text: "Каталог", link: "catalog", icon: "orders" },
						{ text: "Контент страниц", link: "content-for-pages", icon: "orders" },
						{ text: "Сотрудники", link: "employee", icon: "orders" },
						{ text: "Логи", link: "logs", icon: "orders" },
					].map(({ text, link, icon }) => (
						<a
                        key={text}
							className={`font-inter font-medium text-[#232323] px-3 py-2 flex gap-3 items-center rounded-lg md:flex-col md:gap-0.5 md:text-[12px] md:font-semibold md:text-center ${
								pathname.split("/")[2] === link
									? "bg-secondary_dark"
									: "hover:outline hover:outline-1 hover:outline-secondary_dark"
							}`}
							href={`/admin-panel/${link}`}>
							<img
								className={pathname.split("/")[2] === link ? "invert-[1]" : "opacity-25"}
								src={`/icons/${icon}.svg`}
								alt=""
							/>
							<span className={pathname.split("/")[2] === link && "text-white font-bold"}>{text}</span>
						</a>
					))}
				</nav>
				<div className="flex items-center justify-between border-t border-secondary_dark/25 pt-6 px-2 md:flex-col">
					<div className="flex items-center gap-[14px] md:flex-col">
						<img src="/icons/avatar.svg" alt="Аватар" />
						<div className="font-inter text-secondary_dark text-[14px] flex flex-col md:text-[12px]">
							<span className="font-medium leading-[125%]">Мой аккаунт</span>
							<span className="opacity-60">Александр А.</span>
						</div>
					</div>
					<img className="cursor-pointer hover:opacity-70" src="/icons/exit.svg" alt="Выход из аккаунта" />
				</div>
			</div>
			<div className="pl-[410px] pr-40 py-14 grow xxxl:pr-10 xxl:pl-[260px] md:!pl-[130px] md:!pr-5">{children}</div>
		</div>
	);
}
