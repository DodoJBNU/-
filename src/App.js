import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*공통 레이아웃: GNB , Footer*/}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />}></Route>
          </Route>
          {/*단독 레이아웃 */}
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
