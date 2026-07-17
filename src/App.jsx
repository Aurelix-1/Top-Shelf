import Home from "./router/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import SingleRoute from './router/SingleRoute/SingleRoute.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
