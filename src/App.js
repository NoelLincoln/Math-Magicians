import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
