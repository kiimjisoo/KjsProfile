import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const AllBlock = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const LogoWrapper = styled.div`
  width: 330px;
  height: 101px;
  background: #EDCD1F;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .main {

    font-size: 25px;
    font-weight: 700;
    line-height: 1rem;
  }
  .sub {
    font-size: 23px;
    font-weight: 400;
  }
`;
const MenuWrapper = styled.div`
  flex-grow: 2;
  height: 101px;
  background: #212B39;
`;
const Menu = styled.div`

  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 60px; 
  /* margin-left: 400px; */
  .navWrapper {
    display: flex;
    flex-direction: row;
  }
  .nav-bar {
    color: white;
    margin: 0 35px;
    cursor: pointer;
    &:hover {
      color: #EDCD1F;
      transition: var(--trans,color .4s ease 0s);
    }
  }
`;

function Header(props) {

  return (
    <AllBlock>
      <HeaderWrapper>
        <LogoWrapper>
          <span className='logo'>
            <span className='main'>S-PACE</span>
            <span className='sub'>CONSTRUCTIONS</span>            
          </span>
        </LogoWrapper>

        <MenuWrapper>
          <Menu>
            <ul className='navWrapper'>
              <li>
                <Link to="1" spy={true} smooth={true} >
                  <a className='nav-bar'>소개</a>                  
                </Link>
              </li>
              <li>
                <Link to="2" spy={true} smooth={true} >
                  <a className='nav-bar'>경력</a>
                </Link>
              </li>
              <li>
                <Link to='3' spy={true} smooth={true} >
                  <a className='nav-bar'>스킬</a>                  
                </Link>
              </li>
              <li>
                <Link to='4' spy={true} smooth={true} >
                  <a className='nav-bar'>프로젝트</a>                  
                </Link>
              </li>
              <li>
                <Link to='5' spy={true} smooth={true} >
                  <a className='nav-bar'>문의</a>                  
                </Link>
              </li>
            </ul>
          </Menu>
        </MenuWrapper>
      </HeaderWrapper>
    </AllBlock>
    );
}

export default Header;