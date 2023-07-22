import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductView from "./components/Product/ProductView";
import products from "./data/products";
import Layanan from "./pages/Layanan";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <MainLayout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/layanan' element={<Layanan />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route
                            path='/product/:id'
                            element={
                                <ProductView
                                    key={products.id}
                                    item={products}
                                />
                            }
                        />
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </MainLayout>
            </BrowserRouter>
        </>
    );
};

export default App;
