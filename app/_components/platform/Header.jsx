export default function Header() {
	return (
		<header className="bg-dark h-[70px] flex items-center justify-between px-[42px] sm:h-[60px] sm:px-[15px]">
			<div>
				<button className="flex flex-col gap-[5px] hover:opacity-70">
					{[...new Array(3)].map((_, index) => (
						<div key={index} className="bg-white w-7 h-[3px]" />
					))}
				</button>
			</div>
			<div className="sm:pl-10">
				<img className="invert-[1] h-[34px] sm:h-[26px]" src="/img/logo.svg" alt="Логотип" />
			</div>
			<div className="flex gap-6 sm:gap-3">
				<img
					className="hover:opacity-70 cursor-pointer transition-opacity sm:h-7"
					src="/icons/account.svg"
					alt="Личный кабинет"
				/>
				<img
					className="hover:opacity-70 cursor-pointer transition-opacity sm:h-7"
					src="/icons/cart.svg"
					alt="Корзина"
				/>
			</div>
		</header>
	);
}
