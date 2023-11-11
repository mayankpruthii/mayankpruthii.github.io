import React, { useEffect, useState } from "react";

export const Header = () => {
	const [screenSize, setScreenSize] = useState(getCurrentDimension());

	useEffect(() => {
		const updateDimension = () => {
			setScreenSize(getCurrentDimension());
		};
		window.addEventListener("resize", updateDimension);
		return () => {
			window.removeEventListener("resize", updateDimension);
		};
	}, [screenSize]);

	function getCurrentDimension() {
		console.log(window.innerWidth);
		return {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	}

	return (
		<div className="bg-slate-900">
			<div className="px-6 flex justify-between align-bottom">
				<div className="text-2xl py-4 text-gray-300 font-mono">
					<a href="./">~/mayankpruthi</a>
				</div>
				{screenSize.width > 600 ? WideScreenHeaderNavigationTabs() : null}
			</div>
		</div>
	);
};

const WideScreenHeaderNavigationTabs = () => {
    const navigationItemsCss = "py-4 px-4 bg-grey text-gray-300 hover:bg-slate-800 hover:cursor-pointer hover:text-white";
	return (
		<div className="list-none self-center">
			<ul className="flex">
				<div className={navigationItemsCss}>
					Blogs
				</div>
				<div className={navigationItemsCss}>Portfolio</div>
				<div className={navigationItemsCss}>Contact Me</div>
			</ul>
		</div>
	);
};
