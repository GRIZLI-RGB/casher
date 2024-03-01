const UserRole = () => {
	return (
		<div className="rounded-lg border border-[#E4E7EC] py-3 px-[14px] w-[180px]">
			<h6 className="font-medium text-[14px] leading-[24px]">nick</h6>
			<p className="mt-0.5 mb-2.5 font-medium text-[14px] leading-[24px] opacity-60">ID: 123456789</p>
			<button className="bg-[#FDF5F5] text-negative font-medium text-[12px] leading-[18px] py-0.5 w-full hover:outline-negative hover:outline hover:outline-1 rounded-[4px]">
				Удалить
			</button>
		</div>
	);
};

export default function AdminPanelEmployeePage() {
	return (
		<section className="border border-[#E4E7EC] rounded-lg font-inter py-[18px] px-6 flex flex-col gap-[18px]">
			<div className="flex items-start justify-between">
				<div className="border border-[#E4E7EC] p-3 rounded-lg font-medium leading-[24px] w-[265px]">
					<div className="flex items-stretch justify-between">
						<h6>VAIPLI</h6>
						<div className="bg-[#F2F4F7] rounded-full py-0.5 pl-1.5 pr-2 flex-middle gap-1.5">
							<div className="bg-[#344054] w-2 h-2 rounded-full" />
							<span className="text-[12px] leading-[18px] text-[#344054]">Вы</span>
						</div>
					</div>
					<p className="my-0.5">Владелец</p>
					<p className="text-[14px] opacity-60">ID: 123456789</p>
				</div>
				<div className="flex flex-col gap-2.5">
					<button className="hover:opacity-80 w-[255px] py-[7px] leading-[24px] text-medium font-inter text-white bg-secondary_dark rounded-lg">
						Добавить редактора
					</button>
					<button className="hover:opacity-80 w-[255px] py-[7px] leading-[24px] text-medium font-inter text-white bg-secondary_dark rounded-lg">
						Добавить администратора
					</button>
				</div>
			</div>
			<div>
				<h6 className="font-medium text-[#1570EF] mb-3">Администраторы</h6>
				<div className="gap-2 flex items-stretch">
					{Array(2)
						.fill(1)
						.map((_, index) => (
							<UserRole key={index} />
						))}
				</div>
			</div>
			<div>
				<h6 className="font-medium text-[#1570EF] mb-3">Редакторы</h6>
				<div className="gap-2 flex items-stretch">
					{Array(6)
						.fill(1)
						.map((_, index) => (
							<UserRole key={index} />
						))}
				</div>
			</div>
		</section>
	);
}
