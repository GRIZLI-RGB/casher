const ORDERS_DATA = Array(8).fill({
	title: "ДЖЕРСИ “MONEY SPORT” RED",
	price: 7000,
	buy_date: new Date(),
	image: "jersy",
});

export default function LkOrdersPage() {
	return (
		<section className="grid grid-cols-4 gap-x-5 gap-y-6 font-inter  xl:grid-cols-3 md:!grid-cols-2 sm:gap-2.5">
			{ORDERS_DATA.map((order, index) => (
				<a href="/lk/order/1" className="rounded-lg border border-black/25 flex-middle flex-col gap-3 p-6 text-center cursor-pointer hover:border-dark sm:p-3" key={index}>
					<img src={`/img/products/${order.image}.png`} />
					<div>
						<h6 className="mb-1.5 font-semibold text-dark sm:text-[14px]">{order.title}</h6>
						<p className="text-[#121212] leading-[100%] font-medium text-[18px] sm:text-[15px]">{order.price.toLocaleString()} р.</p>
					</div>
					<p className="font-gotham font-medium text-dark/60 leading-[100%] sm:text-[13px]">ЗАКАЗ ОФОРМЛЕН:</p>
					<p className="text-dark font-gotham font-medium sm:text-[13px]">{order.buy_date.toLocaleDateString()}</p>
				</a>
			))}
		</section>
	);
}
