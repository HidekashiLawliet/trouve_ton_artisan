import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";

export default function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/nav" element={<Nav />} />
			</Routes>
		</div>
	);
}