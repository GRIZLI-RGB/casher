"use client";

import { useState } from "react";
import ReactPaginate from "react-paginate";

const ITEMS = [...new Array(80)].map((_, index) => ({
	id: index + 1,
	event: `Удален товар с номером ${index * 2 + 1}`,
	iniziator: index % 2 === 0 ? "Пользователь" : "Владелец",
	generated_at: new Date(),
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

export default function AdminPanelLogsPage() {
	// [REACT PAGINATE]
	const [itemOffset, setItemOffset] = useState(0);

	const endOffset = itemOffset + 10;
	const currentItems = ITEMS.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(ITEMS.length / 10);

	const handlePageClick = event => {
		setItemOffset((event.selected * 10) % ITEMS.length);
	};

	return (
		<section className="font-inter">
			<div className="lg:w-0 lg:overflow-x-auto lg:min-w-full lg:whitespace-nowrap custom-scrollbar">
				<table className="mt-6 mb-2.5 w-full lg:min-w-[800px]">
					<thead>
						<tr>
							<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">ID</th>
							<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">
								Событие
							</th>
							<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">
								Инициатор
							</th>
							<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">
								Дата генерации
							</th>
							<th className="font-gotham font-medium text-[14px] text-secondary_dark/60 py-[14px]">
								Действия
							</th>
						</tr>
					</thead>
					<tbody>
						{currentItems.map(item => (
							<tr className="border-t border-[#E5E5E5]">
								<td className="py-3 text-center font-semibold text-[14px]">{item.id}</td>
								<td className="py-3 text-center font-semibold text-[14px]">{item.event}</td>
								<td className={`py-3 text-center font-semibold text-[14px]`}>
									<div
										className={`bg-secondary_dark inline-block text-white text-[12px] px-5 py-1 rounded-full ${
											item.iniziator === "Владелец" ? "" : ""
										}`}>
										{item.iniziator}
									</div>
								</td>
								<td className="py-3 text-center font-semibold text-[14px]">
									{item.generated_at.toLocaleDateString()}
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
			<div className="flex-middle lg:mt-3.5">
				<ReactPaginate
					breakClassName="react-paginate-page"
					breakLinkClassName="react-paginate-link"
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
}
