import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Layout1 from "./components/Layout1/Layout1";
import Layout2 from "./components/Layout2/Layout2";
import Layout3 from "./components/Layout3/Layout3";
import Button from "./components/shared/Button/Button";
import { useState } from "react";
function App() {
  const currentUrl = window.location.href;
  const [active, setActive] = useState(currentUrl[currentUrl.length-1]);
  const [navigate, setnavigate] = useState("/");
  const defaultCSS = { backgroundColor: "#E0E0E0", color: "#606060" };
  const activeCSS = { backgroundColor: "#606060", color: "#E0E0E0" };

  return (
    <>
      <Router>
        <header className="container my-5 text-center text-lg-start text-md-start">
          <Link to="/Layout1">
            <Button
              state={1}
              active={active === "1" ? activeCSS : defaultCSS}
              setActive={setActive}
              setnavigate={setnavigate}
            />
          </Link>
          <Link to="/Layout2">
            <Button
              state={2}
              active={active === "2" ? activeCSS : defaultCSS}
              setActive={setActive}
              setnavigate={setnavigate}
            />
          </Link>
          <Link to="/Layout3">
            <Button
              state={3}
              active={active === "3" ? activeCSS : defaultCSS}
              setActive={setActive}
              setnavigate={setnavigate}
            />
          </Link>
        </header>
        <Routes>
          <Route path="/Layout1" element={<Layout1 />} />
          <Route path="/Layout2" element={<Layout2 />} />
          <Route path="/Layout3" element={<Layout3 />} />
          <Route path="*" element={<Navigate to="/Layout1" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
