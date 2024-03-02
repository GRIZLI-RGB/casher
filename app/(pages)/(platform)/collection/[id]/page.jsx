"use client";

import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

import Products from "/app/_components/platform/Products";

export default function Collection({ params }) {
	const sliderRef = useRef();

	useEffect(() => {
		Object.assign(sliderRef.current, {
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				568: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				1368: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1768: {
					slidesPerView: 5,
					spaceBetween: 26,
				},
			},
		});
		sliderRef.current.initialize();
	}, []);

	return (
		<section>
			<div className="p-[45px] md:p-5">
				<div className="relative">
					<img className="block rounded-2xl mb-10 lg:rounded-lg" src="/img/banners/1.png" alt="" />
					<div className="flex gap-6 flex-col absolute top-[65px] left-[65px] text-white font-gotham font-bold xxl:top-10 xxl:left-10 lg:!top-6 lg:!left-5 lg:gap-2">
						<h2 className="text-[72px] uppercase leading-[100%] xxl:text-[50px] lg:!text-[18px]">Коллекция такая-то такая</h2>
						<p className="text-[42px] uppercase xxl:text-[26px] lg:!text-[14px]">Доп инфа/описание</p>
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
			</div>
			<div className="mt-20 text-white pb-10 border-b-[3px] border-white md:mt-12">
				<div className="px-[38px] py-2.5 font-gotham font-bold text-[32px] rounded-2xl  text-white bg-dark ml-[45px] mb-10 inline-block uppercase md:px-6 md:mx-5 md:rounded-md md:text-[20px]">
					Лукбук коллекции
				</div>
				<div className="relative">
					<div className="side-shadow-for-slider side-shadow-for-slider--left"></div>
					<swiper-container
						ref={sliderRef}
						// slides-per-view="5"
						// space-between="27"
						loop={true}
						autoplay={true}
						speed={1200}
						init={false}>
						{Array(16)
							.fill(1)
							.map((_, index) => (
								<swiper-slide key={index}>
									<img className="block rounded-2xl w-full" src="/img/lookbook/1.png" alt="" />
								</swiper-slide>
							))}
					</swiper-container>
					<div className="side-shadow-for-slider side-shadow-for-slider--right"></div>
				</div>
			</div>
		</section>
	);
}
