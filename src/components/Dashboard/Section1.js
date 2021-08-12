import React from 'react'
import styled from 'styled-components';

const BoxLeft = styled.div`
  width:500px;

  @media (max-width: 480px) {
    width:100%;
    text-align:center;
    margin-bottom:60px;

  }

`;
const Title = styled.h1`
  font-size: 4.1em;
  color: rgb(75, 73, 73);
  line-height:1.2;

  @media (max-width: 480px) {
    font-size: 2.3rem;
    font-weight:bold;
    line-height:1.2;

  }

`;
const Para = styled.p`
  font-size: 1em;
  font-weight:400;
  color:rgb(185, 182, 282);
  margin-bottom:20px;
  @media (max-width: 480px) {
    font-size: 1rem;

  }
`;
const Img = styled.img`
width:500px;
height:400px;
@media (max-width: 480px) {
  width:100%;
  height:300px;
  margin-bottom:30px;

}
`;
const Flex = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
@media (max-width: 480px) {
  flex-direction:column-reverse;
  width:100%;


}
`;
const Button = styled.button`
color:white;
padding:10px 18px;
background-color:#2acfcf;
border:none;
border-radius:20px;
font-weight:600;
font-size:14px;
cursor:pointer;

&:hover {
  background-color:#7cf0f0;

}
@media (max-width: 480px) {
  font-size:15px;
  width:150px;

  border-radius:20px;

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
