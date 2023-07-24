import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductView from "./components/Product/ProductView";
import products from "./data/products";
import Layanan from "./pages/Layanan";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import SearchLayout from "./layouts/SearchLayout";

const App = () => {
	const [valueSearch, setValueSearch] = useState("");

	const handleSearch = (resetValue) => {
		setValueSearch(resetValue);
	};
	return (
		<>
			<BrowserRouter>
				<MainLayout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/layanan" element={<Layanan />} />
						<Route
							path="/product"
							element={<Product searchProduct={valueSearch} />}
						/>
						<Route path="/contact" element={<Contact />} />
						<Route
							path="/product/:id"
							element={
								<SearchLayout onSearch={handleSearch} valueSearch={valueSearch}>
									<ProductView key={products.id} item={products} />
								</SearchLayout>
							}
						/>
						<Route path="/about" element={<About />} />
					</Routes>
				</MainLayout>
			</BrowserRouter>
		</>
	);
};

export default App;
