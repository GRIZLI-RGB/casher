import Input from "/app/_components/platform/Input";

export default function LkOrderPage({ params }) {
	return (
		<section className="flex items-start gap-16">
			<div className="w-[435px]">
				<div className="p-3 font-gotham font-medium text-secondary_dark">
					<p className="mb-3 text-[20px] uppercase leading-[100%]">Ваш заказ</p>
					<p>
						<span className="opacity-60 uppercase">Заказ оформлен:</span>{" "}
						<span className="pl-3">22.02.2004</span>
					</p>
				</div>
				<div className="rounded-lg border border-black/25 mt-6 text-center font-inter font-medium">
					<img className="block w-full max-h-[433px] mb-4" src="/img/products/jersy.png" alt="" />
					<h6 className="text-[#121212] text-[26px]">Jersey AEV2 // AW2023</h6>
					<p className="my-2 text-[20px] opacity-60">Размер: S</p>
					<p className="text-[20px] opacity-60">Джерси</p>
					<p className="my-6 font-bold text-[24px] leading-[100%]">7 000 р.</p>
				</div>
			</div>
			<div className="pt-3 grow">
				<p className="mb-3 text-[20px] uppercase leading-[100%] font-gotham font-medium">Ваши контакты</p>
				<div className="my-6 bg-[#121212]/10 h-0.5" />
				<div className="flex flex-col gap-2.5 mb-10">
					<Input label={"Ваш Email"} value={"Александр"} disabled/>
					<Input label={"Ваш мобильный телефон"} value={"Александров"} disabled/>
				</div>
				<p className="mb-3 text-[20px] uppercase leading-[100%] font-gotham font-medium">Ваш адрес доставки</p>
				<div className="my-6 bg-[#121212]/10 h-0.5" />
				<Input label={"Город"} secondary_label="Россия, Иркутская область, г. Иркутск" value={"Иркутск"} disabled />
				<div className="flex flex-col gap-2.5 my-6">
					<Input label={"Код доставки"} value={"6192076071026693"} disabled/>
					<Input label={"Агрегатор доставки"} value={"CDEK"} add_button="track" disabled/>
				</div>
				<div className="flex flex-col gap-2.5">
					<Input label={"Пункт получения"} value={"Александров"} disabled/>
					<Input label={"ФИО"} value={"Александр"} disabled/>
					<Input label={"Комментарий"} value={"Александр"} disabled/>
					<Input label={"Промокод"} value={"Александр"} disabled/>
				</div>
			</div>
		</section>
	);
}