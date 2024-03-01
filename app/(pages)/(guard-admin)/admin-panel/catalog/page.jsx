"use client";

import { useState } from "react";

import Search from "/app/_components/admin-panel/Search";
import Checkbox from "/app/_components/admin-panel/Checkbox";
import SwitchToggler from "/app/_components/admin-panel/SwitchToggler";

import useOnclickOutside from "react-cool-onclickoutside";
import dynamic from "next/dynamic";
import ReactPaginate from "react-paginate";

const SORT_METHODS = ["Все", "Названию", "Цене", "Скидке"];

const ITEMS = [...new Array(80)].map((_, index) => ({
	id: index + 1,
	image_url: "/img/products/jersy.png",
	title: `Jersy CAMO #${index + 1}`,
	price: 2500 + 30 * (index + 1),
	discount: 2300,
	quantity: index < 6 ? 3 * index : 0,
}));

const PrevButton = () => {
	return (
		<button className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity md:hidden">
			<img src="/icons/arrow-left.svg" alt="" />
			Назад
		</button>
	);
};

const NextButton = () => {
	return (
		<button className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity md:hidden">
			Вперед
			<img className="-rotate-180" src="/icons/arrow-left.svg" alt="" />
		</button>
	);
};

export default dynamic(
	() =>
		Promise.resolve(function AdminPanelCatalogPage() {
			const [sortedOpen, setSortedOpen] = useState(false);
			const [sortedMode, setSortedMode] = useState("Все");
			const sortRef = useOnclickOutside(() => setSortedOpen(false));

			// [REACT PAGINATE]
			const [itemOffset, setItemOffset] = useState(0);

			const endOffset = itemOffset + 10;
			const currentItems = ITEMS.slice(itemOffset, endOffset);
			const pageCount = Math.ceil(ITEMS.length / 10);

			const handlePageClick = event => {
				setItemOffset((event.selected * 10) % ITEMS.length);
			};

			return (
				<section className="font-inter pb-10">
					<div className="flex items-center justify-between lg:flex-col-reverse lg:gap-5">
						<div className="items-center flex gap-3">
							<span className="text-[14px] font-medium opacity-60">Сортировать по:</span>
							<div className="relative" ref={sortRef}>
								<div
									className={`inline-flex gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity`}
									onClick={() => setSortedOpen(!sortedOpen)}>
									<span className="font-bold text-[14px] text-secondary_dark">{sortedMode}</span>
									<img
										className={!sortedOpen ? "rotate-0" : "rotate-180"}
										src="/icons/arrow-down.svg"
										alt=""
									/>
								</div>
								{sortedOpen && (
									<ul className="absolute bottom-0 translate-y-[102%] bg-white shadow-lg text-[12px] text-secondary_dark rounded-lg overflow-hidden -translate-x-[10%] min-w-[90px]">
										{SORT_METHODS.filter(sort_method => sort_method !== sortedMode).map(
											(sort_method, index) => (
												<li
													className={`py-0.5 cursor-pointer hover:bg-black/5 px-2.5  ${
														index === 0
															? "pt-1"
															: index === SORT_METHODS.length - 1
															? "pb-1"
															: ""
													}`}
													key={sort_method}
													onClick={() => {
														setSortedMode(sort_method);
														setSortedOpen(false);
													}}>
													{sort_method}
												</li>
											),
										)}
									</ul>
								)}
							</div>
						</div>
						<div className="items-stretch flex gap-3 sm:flex-col sm:w-full">
							<div className="w-[220px] sm:w-full">
								<Search />
							</div>
							<button className="bg-secondary_dark rounded-full text-white text-[14px] font-medium px-6 leading-[100%] hover:opacity-70 sm:h-10 sm:w-full">
								Добавить товар
							</button>
						</div>
					</div>
					<div className="xl:w-0 xl:overflow-x-auto xl:min-w-full xl:whitespace-nowrap custom-scrollbar">
						<table className="mt-6 mb-2.5 w-full xl:min-w-[1200px]">
							<thead>
								<tr>
									<th />
									<th>
										<div className="flex-middle">
											{" "}
											<Checkbox />
										</div>
									</th>
									<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">
										Фото
									</th>
									<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px] text-left">
										Название
									</th>
									<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">
										Описание
									</th>
									<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">
										Цена
									</th>
									<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">
										Скидка
									</th>
									<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">
										Кол-во
									</th>
									<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">
										Дубл.
									</th>
									<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">
										Предзаказ
									</th>
									<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">
										Видимость
									</th>
									<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">
										Удалить
									</th>
								</tr>
							</thead>
							<tbody>
								{currentItems.map(item => (
									<tr className="border-t border-[#E5E5E5]">
										<td>
											<img
												className="cursor-pointer hover:brightness-50 transition-all"
												src="/icons/drag.svg"
												alt=""
											/>
										</td>
										<td>
											<div className="flex-middle px-1.5">
												<Checkbox />
											</div>
										</td>
										<td className="py-3 px-8">
											<img
												className="w-[50px] h-[50px] border-2 border-dark/15 rounded-lg block object-contain mx-auto"
												src={item.image_url}
												alt=""
											/>
										</td>
										<td>
											<div>
												<p className="mb-0.5 text-[14px] font-medium">{item.title}</p>
												<p className="font-medium text-[12px] leading-[20px] text-secondary_dark/60">
													<span className="underline underline-offset-2">4 варианта</span> +
												</p>
											</div>
										</td>
										<td>
											<div className="text-center">
												<button className="text-white px-5 py-1.5 bg-secondary_dark font-semibold text-[12px] leading-[20px] hover:opacity-80 rounded-full xl:px-3.5">
													Открыть описание
												</button>
											</div>
										</td>
										<td
											className={`text-center text-[14px] ${
												item.price > 0
													? "text-secondary_dark/60 font-medium"
													: "text-secondary_dark font-semibold"
											}`}>
											{item.price}
										</td>
										<td
											className={`text-center text-[14px] ${
												item.discount > 0
													? "text-secondary_dark/60 font-medium"
													: "text-secondary_dark font-semibold"
											}`}>
											{item.discount}
										</td>
										<td className="text-center font-semibold text-[14px]">{item.quantity}</td>
										<td>
											<img
												className="block mx-auto hover:opacity-80 transition-opacity cursor-pointer"
												src="/icons/duplicate.svg"
												alt=""
											/>
										</td>
										<td className="text-center">
											<SwitchToggler />
										</td>
										<td className="text-center">
											<SwitchToggler />
										</td>
										<td>
											<img
												className="block mx-auto hover:opacity-80 transition-opacity cursor-pointer invert-[1]"
												src="/icons/delete.svg"
												alt=""
											/>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="flex-middle xl:mt-3.5">
						<ReactPaginate
							pageLinkClassName="react-paginate-link"
							className="react-paginate"
							pageClassName="react-paginate-page"
							activeClassName="react-paginate-page--active"
							breakLabel="..."
							onPageChange={handlePageClick}
							pageCount={pageCount}
							pageRangeDisplayed={2}
							nextLabel={<NextButton />}
							previousLabel={<PrevButton />}
							renderOnZeroPageCount={null}
						/>
					</div>
				</section>
			);
		}),
	{
		ssr: false,
	},
);