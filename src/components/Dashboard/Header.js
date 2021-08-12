import React, { useState } from 'react'
import styled from 'styled-components';
import { Button } from '../../styles/style';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: rgb(75, 73, 73);
  cursor:pointer;

  @media (max-width: 480px) {
    text-align: left;
margin-left:10px;
    font-size: 28px;                                                                                                                                                                                                                                                                                                              px;

  }
`;
const Box = styled.div`
  display:flex;
  align-items:center;

  @media (max-width: 480px) {
    flex-direction:column;
  }
`;
const MainBox = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;

  @media (max-width: 480px) {
    flex-direction:column;
   
      display: block;
      position: absolute;
      top: 0px;
      left: 0;
      margin-top:80px;
      background-color: #3b3054;
      color: #ffffff;
      width: 90%;
      // margin:auto;
      height: 40vh;
      border-right: #ccc 1px solid;
      padding: 15px;
      z-index: 4;
      border-radius:10px;
      transform: translateY(-500px);
      transition: transform 0.3s ease-in-out;
        align-items:flex-start;
        justify-content:unset;

      
    }
  
  }
`;
const Container = styled.div`
  display:flex;
  // justify-content:space-between;
  align-items:center;
  margin-top:10px;
  margin-bottom:80px;
  padding:20px;
position:relative;

  @media (max-width: 480px) {
  width:90%;
  padding:10px;




  }
`;
const Nav = styled.ul`
  display:flex;
  list-style:none;
  align-items:center;
  margin-left:20px;

  @media (max-width: 480px) {
    flex-direction:column;
margin-bottom:40px;
  }
`;
const NavItem = styled.li`
margin-right:20px;
color:grey;
font-size:12px;
cursor:pointer;

@media (max-width: 480px) {
  color:white;
  font-size:16px;
  font-weight:bold;
  margin-bottom:30px;

}
`;
const Menu = styled.img`
margin-right:20px;
width:33px;
cursor:pointer;
display:none;
z-index:200;


@media (max-width: 480px) {
   display:block;
   margin-left:auto;
   position:absolute;
   right:0;
   margin-right:0px;
}

`;

const Para1 = styled.p`

margin-right:20px;
color:#bfbfbf;
cursor:pointer;

@media (max-width: 480px) {
  color:white;
  font-size:16px;
  font-weight:bold;
  margin-bottom:30px;

}
`;

export default function Header() {
  const [menu,setMenu] = useState(false);
  const handleMenu = menu ? "main-nav show" : "main-nav";
    return (
        <Container className={menu ? 'goDown':""}>
                <Title>Shortly</Title>

            <MainBox  className={handleMenu}>
                <Nav>
                    <NavItem>Features</NavItem>
                    <NavItem>Pricing</NavItem>

                    <NavItem>Resources</NavItem>

                </Nav>

                <Box>
                <Para1>Login</Para1>
                <Button>Sign Up</Button>
                </Box>
            </MainBox>

         
            <Menu id="22" onClick={() => setMenu(prev => !prev)} src="icons8-menu-192.png" alt="fdf"/>
            <Box>
        

            </Box>
        </Container>
    )
}
