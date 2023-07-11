import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from  './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import SingleProduct from './components/SingleProduct/SingleProduct';
import NewsLetter from './components/Footer/Newsletter/Newsletter';

import AppContext from './utils/context';

function App() {
    return (
        <AppContext>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/AudioAscend/' element={<Home />} />
                    <Route path='/AudioAscend/about' element={<Home/>}/>
                    <Route path='/AudioAscend/categories' element={<Home/>}/>
                    <Route path='/AudioAscend/products' element={<Home/>}/>
                    <Route path='/AudioAscend/category/:id' element={<Category />}/>
                    <Route path='/AudioAscend/product/:id' element={<SingleProduct/>}/>
                </Routes>
                <NewsLetter />
                <Footer />
            </BrowserRouter>
        </AppContext>
    );
}

export default App;
