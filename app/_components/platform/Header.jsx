"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import Cart from "./Cart";
import MenuBurger from "./MenuBurger";
import Auth from "./Auth";

export default function Header() {
	const [domReady, setDomReady] = useState(false);

	const [cartOpen, setCartOpen] = useState(false);
	const [authOpen, setAuthOpen] = useState(false);
	const [menuBurgerOpen, setMenuBurgerOpen] = useState(false);

	useEffect(() => {
		setDomReady(true);
	}, []);

	return (
		<>
			<header className="bg-dark h-[70px] flex items-center justify-between px-[42px] sm:h-[60px] sm:px-[15px]">
				<div>
					<button
						className="flex flex-col gap-[5px] hover:opacity-70"
						onClick={() => {
							setMenuBurgerOpen(true);
							setCartOpen(false);
							setAuthOpen(false);
						}}>
						{[...new Array(3)].map((_, index) => (
							<div key={index} className="bg-white w-7 h-[3px]" />
						))}
					</button>
				</div>
				<div className="sm:pl-10">
					<img className="invert-[1] h-[34px] sm:h-[26px]" src="/img/logo.svg" alt="Логотип" />
				</div>
				<div className="flex gap-6 sm:gap-3">
					<img
						className="hover:opacity-70 cursor-pointer transition-opacity sm:h-7"
						src="/icons/account-in-header.svg"
						alt="Личный кабинет"
						onClick={() => {
							setAuthOpen(true);
							setCartOpen(false);
							setMenuBurgerOpen(false);
						}}
					/>
					<img
						className="hover:opacity-70 cursor-pointer transition-opacity sm:h-7"
						src="/icons/cart.svg"
						alt="Корзина"
						onClick={() => {
							setCartOpen(true);
							setMenuBurgerOpen(false);
							setAuthOpen(false);
						}}
					/>
				</div>
			</header>
			{domReady &&
				createPortal(
					<Cart open={cartOpen} setOpen={setCartOpen} />,
					document.getElementById("platform-layout-children"),
				)}
			{domReady &&
				createPortal(
					<Auth open={authOpen} setOpen={setAuthOpen} />,
					document.getElementById("platform-layout-children"),
				)}
			{domReady &&
				createPortal(
					<MenuBurger open={menuBurgerOpen} setOpen={setMenuBurgerOpen} />,
					document.getElementById("platform-layout-children"),
				)}
		</>
	);
}
