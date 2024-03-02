"use client";

import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { register } from "swiper/element/bundle";
import autoplay from "swiper/element/css/autoplay";
register();

const RunLogosString = ({ direction = "left" }) => {
	return (
		<Marquee direction={direction} autoFill>
			<div className="py-[22px] flex items-center md:py-3.5">
				{Array(2)
					.fill(1)
					.map((_, index) => (
						<img
							className={`h-9 px-10 md:px-5 md:h-6 ${index % 2 === 0 ? "invert-[1]" : "invert-[1] opacity-30"}`}
							src="/img/logo.svg"
							alt=""
						/>
					))}
			</div>
		</Marquee>
	);
};

export default function Lookbook() {
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
		<section className="bg-dark">
			<RunLogosString direction="right" />
			<div className="px-[45px] py-10 border-t-[3px] border-white lg:p-7">
				<img
					className="rounded-2xl border-[3px] border-white block w-full max-h-[800px] object-cover md:rounded-lg"
					src="/gifs/girl.gif"
					alt=""
				/>
			</div>
			<div className="text-white pb-10 border-b-[3px] border-white">
				<div className="px-[38px] py-2.5 font-gotham font-bold text-[32px] rounded-2xl bg-white text-dark ml-[45px] mb-10 inline-block md:px-8 md:mx-5 md:rounded-md md:text-[26px]">
					ЛУКБУК
				</div>
				<div className="relative">
					<div className="side-shadow-for-slider side-shadow-for-slider--left"></div>
					<swiper-container loop={true} autoplay={true} speed={1200} init={false} ref={sliderRef}>
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
			<RunLogosString />
		</section>
	);
}
