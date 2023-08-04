import React from 'react';
import styled from 'styled-components';
import photo from "../images/image01.png";


const Wrapper = styled.div`

`;

const InfoWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 30px 0;
  top: 80px;
`;

const RightContent = styled.div`

  .title {
    font-size: 55px;
    color: #1E2d3b;
    font-weight: 400;
    margin-bottom: 15px;
  }
`;

const Box = styled.div`
  width: 115px;
  height: 10px;
  background: #EDCD1F;
  margin-bottom: 15px;
`;

const Container = styled.div`

  .infotext {
    margin-top: 10px;
    font-size: 17px;
    line-height: 1.1rem;
  }
  .link {
    text-decoration: none;
    color: #000;
    &:hover {
      color: #EDCD1F;
      text-decoration: underline;
    }
  }
`;

const LeftContent = styled.div`

  .photo {
    width: 250px;
    height: 330px;
    margin: 30px 40px;
  }
`;


function Info(props) {
  return (
    <Wrapper id='1'>

    
    <InfoWrapper id='1'>
      <RightContent >
        <h1 className='title'>소개</h1>
        <Box>  </Box>
        <Container>
          <p className='infotext'>
            ☎️ CONTACT <br/>
            TEL : 010-4136-5150<br/>
            E-MAIL : jasoo22@naver.com<br/>
            GITHUB : <a className='link' href='https://github.com/kiimjisoo'>https://github.com/kiimjisoo</a>
          </p>
          <p className='infotext'>
            회사가 원하는 스타일을 위한 나만의 홈페이지를<br/>
            단순한 아이디어 구상부터 블로그 제작,<br/> 작품 시연, 쇼핑몰 운영, 비즈니스 홍보까지 온라인<br/>
            세상에 펼쳐진 가능성은 여전히 무궁무진합니다.<br/>
          </p>
          <p className='infotext'>
            Wix는 사용자의 선호 및 필요에 따라 최고 수준의<br/>
            홈페이지를 제작할수 있는 모든 솔루션을 갖추고<br/>
            있습니다. 홈페이지 템플릿 컬렉션에서 마음에 드는<br/>
            디자인을 선택한후, 원하는대로 편집해 나만의<br/>
            홈페이지를 완성해 보세요!<br/>
          </p>
        </Container>

      </RightContent>  
      <LeftContent>
        <img className='photo' src={photo}/>
      </LeftContent>
    </InfoWrapper>
    </Wrapper>
  );
}

export default Info;