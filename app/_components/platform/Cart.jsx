"use client";

export default function Cart({ open, setOpen }) {
	if (open) {
		return (
			<div className="absolute top-0 left-0 bottom-0 right-0 bg-dark/25 z-[999]">
				<div className="bg-white w-[692px] ml-auto h-full px-[45px] py-10 md:px-5 md:w-full">
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-[#121212] font-gotham font-medium text-[28px] leading-[29px] md:text-[24px]">Ваш заказ</h2>
						<img
							className="cursor-pointer hover:opacity-80 md:h-7"
							src="/icons/close.svg"
							onClick={() => setOpen(false)}
						/>
					</div>
					<div className="border-y border-[#121212]/20">
						{[...new Array(3)].map((_, index) => (
							<div
								className={`py-6 md:py-3 flex items-center justify-between text-[#121212] md:flex-col md:text-center md:gap-4 ${
									index !== 0 && "border-t border-[#121212]/20"
								}`}>
								<img
									className="w-[100px] h-[100px] border-dark/15 border-2 rounded-lg"
									src="/img/products/2.png"
								/>
								<div className="font-inter font-medium text-[14px] max-w-[235px]">
									<h6 className="text-[18px] leading-[120%]">ДЖЕРСИ “MONEY SPORT” RED</h6>
									<p className="mt-1 opacity-60">Размер: S</p>
									<p className="opacity-60">Джерси</p>
								</div>
								<div className="h-7 w-[83px] flex items-center justify-between rounded-full bg-[#121212] px-2.5">
									<img className="cursor-pointer hover:opacity-80" src="/icons/minus.svg" />
									<span className="font-gotham font-medium leading-[14px] text-white">1</span>
									<img className="cursor-pointer hover:opacity-80" src="/icons/plus.svg" />
								</div>
								<p className="font-inter font-medium text-[18px]">7 000 р.</p>
								<img className="cursor-pointer hover:opacity-80" src="/icons/clear.svg" />
							</div>
						))}
					</div>
					<p className="mt-6 mb-[72px] font-bold font-inter text-[18px] text-[#121212] text-right">
						Итого: 14 000 р.
					</p>
					<button className="py-4 font-gotham font-medium text-[24px] leading-[22px] uppercase bg-[#121212] text-center w-full rounded-[4px] text-white hover:opacity-90">
						Оформить заказ
					</button>
				</div>
			</div>
		);
	}
}
