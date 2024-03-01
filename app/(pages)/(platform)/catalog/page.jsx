import Histories from "/app/_components/platform/Histories";
import Products from "/app/_components/platform/Products";
import Lookbook from "/app/_components/platform/Lookbook";

export default function CatalogPage() {
	return (
		<section>
			<div className="px-[45px] mt-[45px]">
				<Histories />
				<img className="block rounded-2xl mt-[45px] mb-10" src="/img/banners/1.png" alt="" />
				<div className="flex items-stretch justify-between mb-10">
					<div className="rounded-l-lg rounded-r-[4px] overflow-hidden flex border-[3px] border-dark">
						<input
							className="px-5 placeholder:text-dark text-dark font-inter text-[18px] font-bold w-[605px] uppercase"
							placeholder="Поиск"
							type="text"
						/>
						<div className="bg-dark flex-middle px-[25px]">
							<img className="invert-[1] h-[18px]" src="/img/logo.svg" alt="" />
						</div>
					</div>
					<div className="py-[15px] bg-dark px-[70px] font-gotham font-bold text-[20px] text-white border-2 border-white/5 rounded-[8px] flex-middle leading-[125%]">
						JERSEY
					</div>
				</div>
				<Products
					items={Array(12).fill({
						title: "ДЖЕРСИ “MONEY SPORT” RED",
						new_price: 2800,
						old_price: 3500,
						image: "jersy",
					})}
				/>
				<div className="py-[90px] flex gap-5 ">
					<div className="relative">
						<img className="block rounded-[16px]" src="/img/banners/2.png" alt="" />
						<div className="absolute top-8 left-8 text-white font-gotham">
							<h3 className="uppercase font-bold text-[58px]">Заголовок</h3>
							<p className="uppercase font-medium text-[32px] mt-1.5 leading-[100%]">Доп текст</p>
						</div>
						<button className="py-4 px-[60px] font-gotham font-medium text-[32px] rounded-lg uppercase bg-white absolute bottom-8 left-8 hover:opacity-85">
							Кнопка
						</button>
					</div>
					<div className="relative">
						<img className="block rounded-[16px]" src="/img/banners/3.png" alt="" />
						<div className="absolute top-8 left-8 text-white font-gotham">
							<h3 className="uppercase font-bold text-[58px]">Заголовок</h3>
							<p className="uppercase font-medium text-[32px] mt-1.5 leading-[100%]">Доп текст</p>
						</div>
						<button className="py-4 px-[60px] font-gotham font-medium text-[32px] rounded-lg uppercase bg-white absolute bottom-8 left-8 hover:opacity-85">
							Кнопка
						</button>
					</div>
				</div>
			</div>
			<Lookbook />
		</section>
	);
}
