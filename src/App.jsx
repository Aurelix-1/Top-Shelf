import Home from "./router/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import SingleRoute from "./router/SingleRoute/SingleRoute.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<SingleRoute />} />
      </Routes>
    </div>
  );
};

export default App;
