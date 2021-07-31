import React, { useState } from 'react'
import styled from 'styled-components';
import { Button } from '../../styles/style';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: rgb(75, 73, 73);

  @media (max-width: 480px) {
    font-size: 12px;

  }
`;
const Box = styled.div`
  display:flex;
  align-items:center;

  @media (max-width: 480px) {
    flex-direction:column;
  }
`;
const Container = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:10px;
  margin-bottom:80px;
position:relative;
  @media (max-width: 480px) {
    padding: 4px !important;
    margin:0;
    flex-direction:column;
    top:-100px;
    transition:0s ease-in-out;


  }
`;
const Nav = styled.ul`
  display:flex;
  list-style:none;
  align-items:center;
  margin-left:20px;

  @media (max-width: 480px) {
   
  }
`;
const NavItem = styled.li`
margin-right:10px;
color:grey;
font-size:12px;
`;

export default function Header() {
  const [menu,setMenu] = useState(false);
    return (
        <Container>
            <Box>
                <Title>Shortly</Title>
                <Nav>
                    <NavItem>Features</NavItem>
                    <NavItem>Pricing</NavItem>

                    <NavItem>Resources</NavItem>

                </Nav>
            </Box>
            <Box>
                <p style={{marginRight:20,color:	'#bfbfbf'}}>Login</p>
                <Button>Sign Up</Button>
            </Box>
            {!menu && <p>me</p>}
        </Container>
    )
}
