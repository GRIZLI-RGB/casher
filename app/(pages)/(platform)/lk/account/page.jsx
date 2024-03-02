import Input from "/app/_components/platform/Input";

export default function LkAccountPage() {
	return (
		<section>
			<div className="flex flex-col gap-2.5">
				<Input label="Введите ваше имя" value={"Александр"} />
				<Input label="Введите вашу фамилию" value={"Александр"} />
				<Input label="Отображаемое имя" value={"VAIPLL"} />
				<Input label="Email" value={"sobaka@mail.ru"} />
			</div>
			<div className="mt-6 flex flex-col gap-1.5">
				<Input label="Пароль" placeholder="Старый пароль" />
				<Input placeholder="Новый пароль" />
				<Input placeholder="Повтор пароль" />
			</div>
            <div className="my-6 flex items-center gap-[30px]">
                <p className="font-inter font-bold text-[18px] leading-[22px]">TELEGRAM</p>
                <button className="text-white rounded-[4px] px-[45px] font-gotham font-bold text-[14px] leading-[38px] bg-[#1983FF] hover:opacity-80">ПРИВЯЗАТЬ АККАУНТ</button>
            </div>
            <button className="uppercase text-white cursor-default px-[45px] leading-[38px] font-bold font-gotham text-[14px] bg-dark/20 rounded-[4px]">Сохранить изменения</button>
		</section>
	);
}
