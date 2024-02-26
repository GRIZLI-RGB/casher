import { Inter } from "next/font/google";

import "./_styles/global.css";



export const metadata = {
	title: "Casher",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
