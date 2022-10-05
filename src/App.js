import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Modals from "./components/Modals";
import NoPage from "./components/NoPage";
import { ContextProvider } from "./Context/UserContext";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="modals" element={<Modals />} />
            <Route exact path="thankyou" element={<ThankYou />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
