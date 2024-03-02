"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";
import { register } from "swiper/element/bundle";
register();

export default function SwiperThumbsProduct() {
	const sliderMain = useRef();
	const [slideIndex, setSlideIndex] = useState(0);

	useEffect(() => {
		Object.assign(sliderMain.current, {
			injectStyles: [
				`
                .swiper-pagination {
                    margin-bottom: 20px;
                }
            .swiper-pagination-bullet {
              width: 18px;
              height: 18px;
              opacity: 40%;
              background: white;
              border: 2px solid #030303;
            }
      
            .swiper-pagination-bullet-active {
              background: #030303;
              opacity: 1;
            }
            @media(max-width:768px) {
                .swiper-pagination {
                    margin-bottom: 4px;
                }
                .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    border: 1px solid #030303;
                  }
            }
            `,
			],
			pagination: {
				clickable: true,
			},
		});

		sliderMain.current.addEventListener("swiperslidechange", () => {
			setSlideIndex(sliderMain?.current?.swiper?.realIndex || 0);
		});

		sliderMain.current.initialize();
	}, []);

	return (
		<div className="flex items-start gap-5 sticky top-10 xxxl:top-0 xxxl:relative">
			<div className="lg:hidden">
				{Array(4)
					.fill(1)
					.map((_, index) => (
						<img
							className={`block w-[156px] h-[156px] rounded-lg  ${
								slideIndex === index ? "opacity-100 border border-dark/15" : "opacity-40 cursor-pointer hover:opacity-100 transition-opacity"
							}`}
                            onClick={() => sliderMain.current.swiper.slideToLoop(index)}
							src="/img/products/2.png"
							alt=""
						/>
					))}
			</div>
			<swiper-container
				ref={sliderMain}
				init={false}
				loop={true}
				space-between={"0"}
				slides-per-view="1"
				class="w-[690px] md:w-[90vw] rounded-lg border-2 border-dark/15"
				pagination={true}>
				{Array(4)
					.fill(1)
					.map((_, index) => (
						<swiper-slide key={index}>
							<img className="block md:w-full" src="/img/products/2.png" alt="" />
						</swiper-slide>
					))}
			</swiper-container>
		</div>
	);
}
