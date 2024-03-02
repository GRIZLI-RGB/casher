import Header from "/app/_components/platform/Header";
import Footer from "/app/_components/platform/Footer";

export default function PlatformLayout({ children }) {
	return (
		<div className="flex flex-col min-h-full">
			<Header />
			<div id="platform-layout-children" className="grow relative">{children}</div>
			<div className="shrink">
				<Footer />
			</div>
		</div>
	);
}

// ЛК готов полностью
// Админка готова всё, кроме модальных окон
// Магазин готово всё, кроме адаптива каталога и допов в фигме