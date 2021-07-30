import React from 'react'
import { Button, Flex } from '../../styles/style';
import styled from 'styled-components';

const BoxLeft = styled.div`
  width:500px;
  @media (max-width: 480px) {
    width:100%;

  }

`;
const Title = styled.h1`
  font-size: 4.1em;
  color: rgb(75, 73, 73);
  @media (max-width: 480px) {
    font-size: 2em;

  }

`;
const Para = styled.p`
  font-size: 1em;
  font-weight:400;
  color:rgb(185, 182, 282);
  margin-bottom:20px;
`;
const Img = styled.img`
width:500px;
height:400px;

@media (max-width: 480px) {
  width:200px;
  height:200px
}
`;
export default function Section1() {

    return (
        <Flex>
            <BoxLeft>
            <Title>More than just shorter links</Title>
            <Para> Build your brand's recognition and get detailed insights on how your links are performing
            </Para>
            <Button>Get Started</Button>
            </BoxLeft>
            <Img src="illustration-working.svg" alt=""/>
        </Flex>
    )
}
