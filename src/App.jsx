import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductView from "./components/Product/ProductView";
import products from "./data/products";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product" element={<Product />} />
					<Route path="/contact" element={<Contact />} />
					{/* produk */}
					<Route
						path="/product/:id"
						element={<ProductView key={products.id} products={products} />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
