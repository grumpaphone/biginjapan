import './style.scss';
import Home from './pages/home/home';
import About from './pages/about/about';
import Work from './pages/work/work';
import Contact from './pages/contact/contact';
import Store from './pages/store/store';
import NoPage from './pages/nopage/nopage';

import Nav from './components/nav/nav';
import Giftshop from './components/footer/giftshop/giftshop';

import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<body>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/work' element={<Work />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/store' element={<Store />} />
					<Route path='*' element={<NoPage />} />
				</Routes>
				<Giftshop />
				<Footer />
			</BrowserRouter>
		</body>
	);
}

export default App;
