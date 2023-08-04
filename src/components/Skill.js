import React from 'react';
import styled from 'styled-components';


const SkillWrapper = styled.div`
  background: #EDCD1F;
  padding: 100px 0;
`;

const Skills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  .maintitle {
    font-size: 60px;
    color: #1E2d3b;
    /* border-bottom: 10px solid #1E2d3b; */
  }
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .skilltitle1 {
    font-size: 30px;
    color: #3D5975;
    display: flex;
    align-items: center;
    border: none;
    padding: 0 70px;
  }
  .skilltitle {
    font-size: 30px;
    color: #3D5975;
    display: flex;
    align-items: center;
    border-left: 2px solid #fff;
    padding: 0 70px;
  }
`;
function Skill(props) {
  return (
    <SkillWrapper id='3'>
      <Skills>
        <h1 className='maintitle'>SKILLS</h1>
      </Skills>
      <SkillName>
        <h1 className='skilltitle1'>HTML</h1>
        <h1 className='skilltitle'>CSS</h1>
        <h1 className='skilltitle'>JavaScript</h1>
        <h1 className='skilltitle'>React</h1>
        <h1 className='skilltitle'>Language</h1>

      </SkillName>
    </SkillWrapper>
  );
}

export default Skill;