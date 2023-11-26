import "./App.css";
import { Blogs } from "./components/blogs/Blogs";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/not-found/NotFound";
import { Homepage } from "./components/homepage/Homepage";
import { useEffect, useState } from "react";
import { getCurrentDimension } from "./utils";
import { Portfolio } from "./components/portfolio/Portfolio";
import { ContactMe } from "./components/contact-me/ContactMe";

function App() {
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
	
	return (
		<>
			<Header screenSize={screenSize} />
			<div className="pt-16"></div>
			<Routes>
				<Route path="/" element={<Homepage screenSize={screenSize} />} />
				<Route path="/portfolio" element={<Portfolio screenSize={screenSize} />} />
				<Route path="/blogs/" element={<Blogs />} />
				<Route path="/blog/:blogName" element={<Blogs />} />
				<Route path="/contact-me" element={<ContactMe />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
