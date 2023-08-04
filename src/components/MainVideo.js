import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { IoIosArrowDown } from "react-icons/io";

const VideopWrapper = styled.div``;
const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Contetnt = styled.div`
  position: absolute;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
  .container {
    color: #FEF6EC;
    font-size: 50px;
    font-weight: 400;
  }
  .icon {
    font-size: 50px;
    color: #FEF6EC;
    margin-top: 20px;
  }
`;
 
const VideoCover = styled.div``;
const Video = styled.div``;

function MainVideo(props) {
  return (
    <VideopWrapper>
      <TextWrapper>
        <Contetnt>
          <h1 className='container'>웃음 가득한 세상!</h1>
          <h1 className='container'>S-PACE 마인드로</h1>
          <h1 className='container'>만들어 갑니다!</h1>
          <span className='icon'>
            <IoIosArrowDown/>                
          </span>

      </Contetnt>   
      </TextWrapper>  
      <VideoCover>
        <Video loop autoplay muted>
          <YouTube id='1'
            videoId='V3GJCYABam0'
            opts={{
              width: "100%",
              height: "900px",
              playerVars: {
                autoplay: 1,
                loop: true,
              },
            }}
            onReady={ (e) => {
                e.target.mute();
            }} />
        </Video>
      </VideoCover>
    </VideopWrapper>
  );
}

export default MainVideo;