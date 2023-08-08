import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Header from './components/Header';
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
      <Career />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}

export default App;
