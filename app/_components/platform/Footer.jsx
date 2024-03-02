const NAVIGATION_DATA = [
	{
		title: "Навигация",
		items: [
			{
				text: "Главная",
				link: "#",
			},
			{
				text: "Каталог",
				link: "#",
			},
			{
				text: "Контакты",
				link: "#",
			},
			{
				text: "Creators",
				link: "#",
			},
		],
	},
	{
		title: "Помощь",
		items: [
			{
				text: "Доставка и оплата",
				link: "#",
			},
			{
				text: "Возврат и обмен",
				link: "#",
			},
			{
				text: "Поддержка",
				link: "#",
			},
		],
	},
	{
		title: "Документация",
		items: [
			{
				text: "Публичная оферта",
				link: "#",
			},
			{
				text: "Политика конфиденциальности",
				link: "#",
			},
		],
	},
];

export default function Footer() {
	return (
		<footer className="bg-dark text-white font-inter p-[45px] flex justify-between gap-x-6 gap-y-12 xl:flex-col-reverse xl:p-10">
			<nav className="flex gap-[54px] xxl:gap-x-10 xl:items-center xl:justify-center md:flex-col">
				{NAVIGATION_DATA.map(nav_item => (
					<ul key={nav_item.title} className="flex flex-col gap-2.5">
						<li className="uppercase font-bold text-[24px] mb-2.5 xl:text-center">{nav_item.title}</li>
						{nav_item.items.map(item => (
							<li key={item.text} className="text-white/50 hover:text-white xl:text-center">
								<a href={item.link}>{item.text}</a>
							</li>
						))}
					</ul>
				))}
			</nav>
			<div className="flex flex-col gap-8 xl:items-center">
				<div className="flex items-center gap-8 md:grid md:grid-cols-2 md:gap-5">
					{["mir", "visa", "sbp", "mastercard"].map(item => (
						<img className="md:block md:mx-auto" key={item} src={`/img/payments/${item}.png`} alt={item} />
					))}
				</div>
				<div className="flex items-center gap-[35px] justify-end md:flex-col-reverse">
					<nav className="flex item-center gap-[35px]">
						{["telegram", "instagram", "vk", "whatsapp"].map(item => (
							<a key={item} href="#" className="opacity-60 hover:opacity-100">
								<img src={`/icons/${item}.svg`} alt={item} />
							</a>
						))}
					</nav>
					<div className="bg-white rounded-[4px] px-[47px] py-[11px]">
						<img src="/img/logo.svg" alt="Логотип" />
					</div>
				</div>
				<div className="text-right xl:text-center">
					<h6 className="font-semibold">CASHER COLLECTION</h6>
					<p className="text-white/60">"You have become richer" - поймёшь, когда прикоснешься!</p>
				</div>
			</div>
		</footer>
	);
}
