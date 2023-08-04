import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 100px 0;
`;
const SkillWrapper = styled.div`
  /* background: #9B96CB; */
  background: rgba(155, 150, 203, 0.1);
  padding: 80px 0 100px;
`;

const Skills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  .maintitle {
    font-size: 60px;
    color: ${props => props.theme.title};
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
    /* align-items: center;
    border-left: 2px solid #fff; */
    padding: 0 70px;
  }
`;
function Skill(props) {
  return (
    <Wrapper id='3'>

    
    <SkillWrapper >
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
    </Wrapper>
  );
}

export default Skill;