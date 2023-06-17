import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./Components/Includes/NavBar";
import Header from "./Components/Includes/Header";
import Demo from "./Components/Screens/Demo";
import Echart from "./Components/Screens/Echart";
import MailBox from "./Components/Screens/MailBox";
import Setting from "./Components/Screens/Setting";
import Pages from "./Components/Screens/Pages";


function App() {
  return (
    <Router>
      <Header />
      <Conatiner>
        <NavBar />
        <Routes>
          <Route path="/" element={<Demo />} />
          <Route path="/echart" element={<Echart />} />
          <Route path="/mailbox" element={<MailBox />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/pages" element={<Pages />} />
        </Routes>
      </Conatiner>
    </Router>
  );
}

export default App;

const Conatiner = styled.div`
  display: flex;
  /* justify-content: space-between; */
  background: #13181e;
`;
