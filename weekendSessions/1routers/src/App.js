import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";

export default function App() {
  return (
    <>
      {/* Switch in versions <6 */}
      <Routes>
        {/* in version <6 <Rute path="/" components={Dasbhoard}/> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="about/:user" element={<About />} />
        <Route path="login" element={<Login user="samuel" />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
