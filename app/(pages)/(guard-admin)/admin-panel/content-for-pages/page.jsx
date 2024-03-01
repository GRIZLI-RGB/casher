const Title = ({ title, resolution }) => {
	return (
		<h4 className="font-medium flex items-center gap-3 uppercase text-[24px] leading-[24px] text-secondary_dark">
			<span>{title}</span>
			{resolution && <span className="opacity-60">{resolution}</span>}
		</h4>
	);
};

const Banner = () => {
	return (
		<div className="relative h-[210px] w-[480px]">
			<img src="/img/banners/1.png" alt="" />
			<div className="absolute right-5 top-5 flex items-center gap-2">
				<img className="hover:opacity-80 transition-opacity cursor-pointer" src="/icons/edit.svg" alt="Редактировать баннер" />
				<img className="hover:opacity-80 transition-opacity cursor-pointer" src="/icons/delete.svg" alt="Удалить баннер" />
			</div>
		</div>
	);
};

export default function AdminPanelContentForPagesPage() {
	return (
		<section className="flex flex-col gap-14 font-inter">
			<div className="flex flex-col gap-[30px]">
				<Title title="Главный слайдер" resolution={"1830x800"} />
				<div className="grid grid-cols-2 gap-4 max-w-[980px]">
					<Banner />
					<Banner />
					<Banner />
					<Banner />
				</div>
			</div>
			<div className="flex flex-col gap-[30px]">
				<Title title="Баннер футер" resolution={"1830x800"} />
				<div className="grid grid-cols-2 gap-4 max-w-[980px]">
					<Banner />
				</div>
			</div>
			<div className="flex flex-col gap-[30px]">
				<Title title="Мини-баннеры" />
				<div className="grid grid-cols-2 gap-4 max-w-[980px]">
					<Banner />
					<Banner />
				</div>
			</div>
			<div className="flex flex-col gap-[30px]">
				<Title title="Баннер коллекции #1" />
				<div className="grid grid-cols-2 gap-4 max-w-[980px]">
					<Banner />
				</div>
			</div>
			<div className="flex flex-col gap-[30px]">
				<Title title="Баннер коллекции #2" />
				<div className="grid grid-cols-2 gap-4 max-w-[980px]">
					<Banner />
				</div>
			</div>
		</section>
	);
}
