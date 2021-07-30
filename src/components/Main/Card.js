import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
 margin-right:20px;
  width:300px;
  height:170px;
  background:white;
  padding:20px;
  margin-bottom:${props => props.mb || '30px'} ;
  @media (max-width: 480px) {
    width:90%;
  height:160px;
  margin:auto;
  padding:15px;

  margin-bottom:${props => props.mb || '60px'} ;


  }
`;
const Title = styled.h1`
  font-size: 14px;

  color: black;
  @media (max-width: 480px) {
    font-size: 14px;

  }
`;
const Para = styled.p`
font-size: 12px;
font-weight:400;
  color: rgb(75, 73, 73);

  @media (max-width: 480px) {
    font-size: 14px;

  }
`;
export default function Card({title,img,mr}) {
    return (
        <Container mb={mr}> 
            <img src={img} alt=""/>
            <Title>{title}</Title>
            <Para>Book your links today
            Book your links today
            Book your links today
            Book your links today
            Book your links today
            Book your links today
            Book your links today
            Book your links today
            </Para>
        </Container>
    )
}
