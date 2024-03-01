export default function LkDashboardPage() {
	return (
		<section className="font-inter">
			<p className="text-[20px]">
				Добро пожаловать, <span className="font-bold">nickname</span> (не{" "}
				<span className="font-bold">nickname</span>?{" "}
				<button className="text-[#9C9C9C] after:left-0 after:right-0 after:bg-[#9C9C9C] after:h-px after:bottom-0.5 after:absolute relative hover:opacity-70">
					Выйти
				</button>
				)
			</p>
			<p className="max-w-[830px] text-[18px] font-medium leading-[24px] text-black/60 mt-7 mb-8">
				Из главной страницы аккаунта вы можете посмотреть ваши недавние заказы, настроить платежный адрес и
				адрес доставки, а также изменить пароль и основную информацию
			</p>
			<nav className="grid grid-cols-3 gap-x-6 gap-y-5">
				{[
					{ text: "Заказы", link: "orders" },
					{ text: "Адреса", link: "addresses" },
					{ text: "Выйти", link: "catalog" },
				].map(({ text, link }) => (
					<a href={`/lk/${link}`} className="flex-middle flex-col gap-5 rounded-2xl border-2 border-dark/25 h-40  hover:border-dark transition-none" key={text}>
						<img className="opacity-25 h-[52px]" src={`/icons/${link !== "catalog" ? link : "quit"}.svg`} alt="" />
						<span className="uppercase text-[24px] font-medium">{text}</span>
					</a>
				))}
			</nav>
		</section>
	);
}
