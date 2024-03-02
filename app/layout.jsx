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

const inter = Inter({
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
	subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body
				className={`${inter.variable} ${gotham.variable}`}>
				{children}
			</body>
		</html>
	);
}