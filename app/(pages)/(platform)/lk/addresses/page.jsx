import Input from "/app/_components/platform/Input";

export default function LkAddressesPage() {
	return (
		<section className="max-w-[735px] xl:max-w-none">
			<p className="mb-3 text-[20px] uppercase leading-[100%] font-gotham font-medium">Ваш адрес доставки</p>
			<div className="my-3 bg-[#121212]/10 h-0.5" />
			<Input label={"Город"} secondary_label="Россия, Иркутская область, г. Иркутск" value={"Иркутск"} />
			<div className="flex flex-col gap-2.5 my-6">
				<Input label={"Пункт получения"} value={"Александров"} />
				<Input label={"ФИО"} value={"Александр"} />
				<Input label={"Комментарий"} value={"Александр"} />
				<Input label={"Промокод"} value={"Александр"} />
			</div>
            <button className="text-white bg-dark hover:bg-secondary_dark font-gotham font-medium text-[20px] leading-[24px] px-[45px] py-[7px] rounded-[4px]">
                Изменить
            </button>
		</section>
	);
}
