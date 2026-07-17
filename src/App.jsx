import { Routes, Route } from 'react-router-dom';
import Home from './router/Home/Home';
import SingleProduct from './router/SingleRoute/SingleRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default App;
