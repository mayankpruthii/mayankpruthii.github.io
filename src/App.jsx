import "./App.css";
import { Blogs } from "./components/blogs/Blogs";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/not-found/NotFound";
import { Homepage } from "./components/homepage/Homepage";
import { useEffect, useState } from "react";
import { getCurrentDimension } from "./utils";


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
				<Route path="/portfolio" element={<h1>Portfolio</h1>} />
				<Route path="/blogs/" element={<Blogs />} />
				<Route path="/blog/:blogName" element={<Blogs />} />
				<Route path="/contact-me" element={<h1>Contact Me</h1>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
