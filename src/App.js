import { Routes, BrowserRouter, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./components/Home/Home";
import New from "./components/New/New";
import Active from "./components/Active/Active";
import Completed from "./components/Completed/Completed";
import Blocked from "./components/Blocked/Blocked";
import ActiveItem from "./components/ActiveItem/ActiveItem";
import CompletedItem from "./components/CompletedItem/CompletedItem";
import NewItem from "./components/NewItem/NewItem";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/New" element={<New />} />
          <Route path="/Active" element={<Active />} />
          <Route path="/Completed" element={<Completed />} />
          <Route path="/Blocked" element={<Blocked />} />
          <Route path="/new/:id" element={<NewItem />} />
          <Route path="/active/:id" element={<ActiveItem />} />
          <Route path="/completed/:id" element={<CompletedItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
