import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./Components/Includes/NavBar";
import Header from "./Components/Includes/Header";
import Demo from "./Components/Screens/Demo";


function App() {
  return (
    <Router>
      <Header />
      <Conatiner>
        <NavBar />
        <Routes>
          <Route path="/" element={<Demo />} />
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
