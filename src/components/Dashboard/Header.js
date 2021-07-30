import React from 'react'
import styled from 'styled-components';
import { Button } from '../../styles/style';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: rgb(75, 73, 73);

  @media (max-width: 480px) {
    font-size: 1em;

  }
`;
const Box = styled.div`
  display:flex;
  align-items:center;


`;
const Container = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:10px;
  margin-bottom:80px;

  @media (max-width: 480px) {
    padding: 4px !important;
    margin:0
  }
`;
const Nav = styled.ul`
  display:flex;
  list-style:none;
  align-items:center;
  margin-left:20px;
`;
const NavItem = styled.li`
margin-right:10px;
color:grey;
`;

export default function Header() {
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
        </Container>
    )
}
