import { Inter, Manrope, Montserrat } from "next/font/google";
import localFont from "next/font/local";

import "./_assets/styles/global.css";

export const metadata = {
	title: "Casher",
};

const gotham = localFont({
	src: [
		{
			path: "./_assets/fonts/Gotham/Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./_assets/fonts/Gotham/Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-gotham",
});

const halvar = localFont({
	src: [
		{
			path: "./_assets/fonts/Halvar/Medium.woff2",
			weight: "500",
			style: "normal",
		},
	],
	variable: "--font-halvar",
});

const inter = Inter({
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
	subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
});

const montserrat = Montserrat({
	weight: ["500", "700"],
	variable: "--font-montserrat",
	subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
});

const manrope = Manrope({
	weight: ["400", "600", "700", "800"],
	variable: "--font-manrope",
	subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body
				className={`${inter.variable} ${montserrat.variable} ${halvar.variable} ${gotham.variable} ${manrope.variable}`}>
				{children}
			</body>
		</html>
	);
}