"use client";

import { useEffect, useRef } from "react";
import SwiperThumbsProduct from "/app/_components/platform/SwiperThumbsProduct";

import { register } from "swiper/element/bundle";
register();

const ExtraBlock = ({ children, title }) => {
	return (
		<div className="mt-[42px]">
			<h2 className="mb-4 font-gotham font-bold text-[32px] text-dark uppercase md:text-[24px]">{title}</h2>
			<div className="rounded-[4px] border-2 border-dark/25 p-4 text-dark font-inter relative">
				{children}
				<img src="/img/logo.svg" alt="" className="absolute opacity-30 right-4 top-4 md:h-5" />
			</div>
		</div>
	);
};

export default function ProductPage({ params }) {
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
		<section className="pt-[45px] pb-20 md:pt-8 md:pb-8">
			<div className="px-5 max-w-[1680px] mx-auto">
				<div className="mb-[45px] md:mb-6">
					<a
						className="font-inter font-semibold text-[18px] inline-flex gap-2.5 items-center hover:opacity-80"
						href="/catalog">
						<img src="/icons/arrow-left.svg" alt="" />
						<span>ВЕРНУТЬСЯ</span>
					</a>
				</div>
				<div className="flex items-start justify-between xxxl:flex-col xxxl:items-center xxxl:gap-8">
					<SwiperThumbsProduct />
					<div className="max-w-[710px] font-inter text-dark xxxl:max-w-none">
						<div className="xxxl:text-center">
							<h1 className="font-gotham text-[32px] font-bold leading-[27px] md:leading-[120%]">
								ДЖЕРСИ “MONEY SPORT” RED
							</h1>
							<p className="my-6 font-medium text-[32px] text-dark/60 md:text-[26px] md:my-4">
								Коллекция: NAME#1
							</p>
							<p className="font-manrope">
								<span className="font-bold text-[38px]">2 800</span>
								<span className="pl-2 pr-1 font-bold text-[28px]">р.</span>
								<span className="text-[#585858] line-through text-[21px]">3 500р.</span>
							</p>
							<div className="max-w-[413px] xxxl:mx-auto md:max-w-none">
								<div className="flex items-stretch gap-[22px] font-montserrat font-medium text-[24px] mt-10 md:gap-2 md:justify-center">
									<div className="text-dark/30 w-[65px] h-[65px] rounded-[4px] bg-dark/15 border-2 border-white/15 flex-middle md:w-14 md:h-14">
										S
									</div>
									<div className="w-[65px] h-[65px] rounded-[4px] cursor-pointer bg-white text-dark border-2 border-dark flex-middle md:w-14 md:h-14">
										M
									</div>
									<div className="w-[65px] h-[65px] rounded-[4px] cursor-pointer bg-white text-dark border-2 border-dark flex-middle md:w-14 md:h-14">
										L
									</div>
									<div className="w-[65px] h-[65px] rounded-[4px] cursor-pointer bg-white text-dark border-2 border-dark flex-middle md:w-14 md:h-14">
										XL
									</div>
									<div className="w-[65px] h-[65px] rounded-[4px] cursor-pointer bg-white text-dark border-2 border-dark flex-middle md:w-14 md:h-14">
										XXL
									</div>
								</div>
								<button className="my-6 text-[24px] text-white font-gotham font-bold leading-[22px] p-4 rounded-[4px] bg-dark w-full hover:bg-secondary_dark uppercase">
									Купить
								</button>
							</div>
							<p className="p-4 bg-dark/5 rounded-[4px] text-[20px] font-manrope font-semibold md:text-[16px]">
								Новый предзаказ открыт до 10 января. Отправка будет осуществляться в течение 7-10
								рабочих дней после закрытия предзаказа.
							</p>
						</div>
						<div>
							<ExtraBlock title="Описание изделия:">
								<p className="max-w-[520px] mb-3 text-[20px] font-medium md:text-[16px] md:max-w-none">
									Картельные сговоры не допускают ситуации, при которой элементы политического
									процесса набирают популярность среди определенных слоев населения, а значит, должны
									быть подвергнуты целой серии независимых исследований.
								</p>
								<p>
									<span className="font-bold text-[20px] mr-3 md:text-[16px] md:mr-1">
										Created by:
									</span>
									<a
										className="font-medium text-[20px] md:text-[16px] text-[#174AFF] underline underline-offset-2 hover:opacity-80"
										href="#">
										nickname
									</a>
								</p>
							</ExtraBlock>
							<ExtraBlock title="Характеристики:">
								<ul className="text-[20px] md:text-[16px]">
									{[
										{ label: "Состав", value: "90% полиэстр, 10% спандекс" },
										{ label: "Ткань", value: "Джерси" },
										{ label: "Плотность", value: "210 гр/м²" },
										{ label: "Крой", value: "OVERSIZE" },
										{ label: "Принт", value: "Сублимация" },
										{ label: "Производство", value: "Россия" },
									].map(({ label, value }) => (
										<li className="leading-[150%]">
											<span className="font-bold">{label}: </span>
											<span className="font-medium">{value}</span>
										</li>
									))}
								</ul>
								<p className="opacity-60 font-medium text-[20px] mt-3 leading-[22px] md:text-[14px] md:leading-[120%]">
									В комплекте с изделием идёт специальный код, по которому вы можете убедиться в
									оригинальности изделия
								</p>
							</ExtraBlock>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-20 text-white pb-10 border-b-[3px] border-white md:mt-12">
				<div className="px-[38px] py-2.5 font-gotham font-bold text-[32px] rounded-2xl  text-white bg-dark ml-[45px] mb-10 inline-block uppercase md:px-6 md:mx-5 md:rounded-md md:text-[20px]">
					Как это выглядит ИРЛ
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
