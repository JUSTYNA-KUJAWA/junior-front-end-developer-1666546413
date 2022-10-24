import { Routes, BrowserRouter, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
