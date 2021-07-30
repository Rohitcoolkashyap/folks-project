import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
background: rgb(31, 30, 30);

color:white;
display:flex;
justify-content:space-around;
align-items:center;
height:30vh;

@media (max-width: 480px) {
    flex-direction:column;
    height:60vh;

  }
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;

  @media (max-width: 480px) {
    font-size: 1em;

  }
`;
const Box = styled.div`

`;
const Li = styled.li`
color:grey;
`;
const Heading = styled.p`
margin-bottom:10px;
font-size:18px;

@media (max-width: 480px) {
    font-size: 1em;
  }
`;
export default function Footer() {
    return (
        <Container>
                            <Title>Shortly</Title>

                <Box> 
            <Heading> Features </Heading>

                <ul>
                    <Li>About</Li>
                    <Li>Our Team</Li>

                    <Li>Carrers</Li>

                    <Li>Contact</Li>



                </ul>
                </Box> 

                <div> 

                <Heading> Resources </Heading>

                <ul>
                <Li>About</Li>
                    <Li>Our Team</Li>

                    <Li>Carrers</Li>

                    <Li>Contact</Li>

                </ul>
                </div> 

                <div> 

                <Heading> Company </Heading>

                <ul>
                <Li>About</Li>
                    <Li>Our Team</Li>

                    <Li>Carrers</Li>

                    <Li>Contact</Li>

                </ul>
</div>
            <div>
                <img src="iicon-fully-customizable.svg" alt=""/>
                <img src="icon-fully-customizable.svg" alt=""/>

                <img src="icon-fully-customizable.svg" alt=""/>

            </div>
        </Container>
    )
}
