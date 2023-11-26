import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isWideWidthScreen } from "../../utils";

export const Header = (props) => {
	const { screenSize } = props;

	const [showNarrowWidthScreenMenu, setShowNarrowWidthScreenMenu] =
		useState(false);

	const handleHamburgerMenuClick = () => {
		setShowNarrowWidthScreenMenu(!showNarrowWidthScreenMenu);
	};

	const headerNavigationItems = [
		{
			navigationItem: "Blogs",
			navigationLink: "/blogs",
		},
		{
			navigationItem: "Portfolio",
			navigationLink: "/portfolio",
		},
		{
			navigationItem: "Contact Me",
			navigationLink: "/contact-me",
		},
	];

	return (
		<div className="h-auto fixed z-50 block">
			<div className="bg-slate-900 w-screen px-6 flex justify-between align-bottom">
				<div className="text-2xl py-4 text-gray-300 font-mono">
					<Link to="/">~/mayankpruthi</Link>
				</div>
				{isWideWidthScreen(screenSize) ? (
					<div className="list-none self-center">
						<ul className="flex">
							{headerNavigationItems.map((item) => (
								<Link to={item.navigationLink}>
									<div className="py-4 px-4 bg-grey text-gray-300 hover:bg-slate-800 hover:cursor-pointer hover:text-white">
										{item.navigationItem}
									</div>
								</Link>
							))}
						</ul>
					</div>
				) : (
					// Hamburger Menu Icon
					<div
						onClick={handleHamburgerMenuClick}
						className="flex flex-col justify-center items-center hover:cursor-pointer"
					>
						<span
							className={`bg-white block transition-all duration-300 ease-out h-1 w-8 
						${showNarrowWidthScreenMenu ? "rotate-45 translate-y-2" : "-translate-y-1"}`}
						></span>
						<span
							className={`bg-white block transition-all duration-300 ease-out h-1 w-8 my-1 
						${showNarrowWidthScreenMenu ? "opacity-0" : "opacity-100"}`}
						></span>
						<span
							className={`bg-white block transition-all duration-300 ease-out h-1 w-8 
						${showNarrowWidthScreenMenu ? "-rotate-45 -translate-y-2" : "translate-y-1"}`}
						></span>
					</div>
				)}
			</div>
			{/* Narrow Screen Menu */}
			<div
				className={`bg-slate-900 w-screen transition-all duration-500 ease-out flex flex-col overflow-y-auto ${
					showNarrowWidthScreenMenu ? "h-screen" : "h-0"
				}`}
			>
				{showNarrowWidthScreenMenu
					? headerNavigationItems.map((item) => (
							<div className="justify-center align-center text-center text-gray-300 py-3 hover:text-white hover:cursor-pointer text-2xl">
								<Link
									to={item.navigationLink}
									onClick={() => setShowNarrowWidthScreenMenu(false)}
								>
									{item.navigationItem}
								</Link>
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};
