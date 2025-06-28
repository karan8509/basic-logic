import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/homePages";
import Navbar from "./component/Navbar";
import AdminPages from "./pages/AdminPages";
import CategoryPages from "./pages/categoryPages";
function App() {
  return (
    <>
      <Navbar />
       <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/admin" element={<AdminPages />} />
        <Route path="/category/:category" element={<CategoryPages />} />
      </Routes>
    </>
  );
}

export default App;
