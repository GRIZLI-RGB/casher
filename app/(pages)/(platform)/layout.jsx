import Header from "/app/_components/platform/Header";
import Footer from "/app/_components/platform/Footer";

export default function PlatformLayout({ children }) {
	return (
		<div className="flex flex-col min-h-full">
			<Header />
			<div className="grow">{children}</div>
			<div className="shrink">
				<Footer />
			</div>
		</div>
	);
}
