import "./App.css";
import { Blogs } from "./components/blogs/Blogs";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/not-found/NotFound";

function App() {
	return (
		<>
			<Header />
			<div className="pt-16"></div>
			<Routes>
				<Route path="/" element={<h1>Homepage</h1>} />
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
