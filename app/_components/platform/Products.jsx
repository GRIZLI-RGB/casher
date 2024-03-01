"use client";

export default function Products({ items }) {
	return (
		<section className="flex flex-col justify-center">
			<div ref={parent} className="grid grid-cols-4 gap-x-2.5 gap-y-5">
				{items.map((item, index) => (
					<a
						key={index}
						className="hover:outline hover:outline-1 hover:outline-dark rounded-lg font-inter"
						href="/product/1">
						<img src={`/img/products/${item.image}.png`} />
						<h6 className="font-semibold mb-1.5 leading-[100%] text-[18px] pl-2.5">{item.title}</h6>
						<p className="pl-2.5 pb-2.5">
							<span>{item.new_price.toLocaleString()} р.</span>
							<span className="pl-2 line-through">{item.old_price.toLocaleString()} р.</span>
						</p>
					</a>
				))}
			</div>
			<button className="uppercase hover:bg-secondary_dark bg-dark text-white rounded-lg font-inter font-semibold text-[24px] mt-10 px-[50px] py-4 mx-auto leading-[125%]">Загрузить больше</button>
		</section>
	);
}
