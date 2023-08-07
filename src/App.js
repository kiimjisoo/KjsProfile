import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import MainVideo from './components/MainVideo';
import Info from './components/Info';
import Skill from './components/Skill';
import Project from './components/Project';
import Career from './components/Career';
import Contact from './components/Contact';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    box-sizing: border-box;
    background: #F0F0F2;
  }
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
          
      <Header />
      <Info />  
      {/* <MainVideo /> */}
      <Career />
      <Skill />
      <Project />
      <Contact />

      {/* <Routes>
        <Route path='/' element={<Header />}>
        <Route element={<MainVideo />}/>
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
