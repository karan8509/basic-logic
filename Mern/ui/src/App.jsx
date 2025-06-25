import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/homePages";
import Navbar from "./component/Navbar";
import AdminPages from "./pages/AdminPages";
function App() {
  return (
    <>
      <Navbar />
       <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/admin" element={<AdminPages />} />
      </Routes>
    </>
  );
}

export default App;
