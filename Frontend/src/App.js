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
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<Home/>}/>
                    <Route path='/categories' element={<Home/>}/>
                    <Route path='/products' element={<Home/>}/>
                    <Route path='/category/:id' element={<Category />}/>
                    <Route path='/product/:id' element={<SingleProduct/>}/>
                </Routes>
                <NewsLetter />
                <Footer />
            </BrowserRouter>
        </AppContext>
    );
}

export default App;
