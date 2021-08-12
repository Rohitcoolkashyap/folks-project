import React from 'react'
import Card from '../../components/Main/Card';
import styled from 'styled-components';
const Container = styled.div`
  display:grid;
  place-items:center;
  margin-top:10px;
  margin-bottom:80px;
  @media (max-width: 480px) {
    width:90%;
    margin:auto;

`;
const Container2 = styled.div`
  display:grid;
  place-items:center;
  margin-top:10px;
  background:#4b3f6b;
 width:100%;
 height:150px;

 @media (max-width: 480px) {
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

    height:240px;
    margin-top:0px;
    margin-bottom:0px;
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
  width:160px;
  padding:14px 24px;

  border-radius:20px;

}
`;
const Title = styled.h1`
  font-size: 2.5em;

  text-align: center;
  color: ${props => props.color || 'black' };

  @media (max-width: 480px) {
    font-size: 1.5em;
    text-align:center;
margin-bottom:10px;

  }
`;
const Para = styled.p`
width:400px;
font-size: 12px;
font-weight:400;
color:rgb(185, 182, 282);
  text-align: center;
  color: rgb(75, 73, 73);
  margin-bottom:30px;

  @media (max-width: 480px) {
    margin-bottom:10px;
    font-size: 16px;
    text-align:center;


  }

`;
const BoxCards = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
margin-bottom:60px;

@media (max-width: 480px) {
  flex-direction:column;
  margin-bottom:30px;

  }

`;
export default function Main() {
    return (
        <Container>
            <div>
                <Title>
                    Advanced Statistics
                </Title>
                <Para>
                    Track how your links are performing across the web with our advanced statistics dashboard.
                 
                </Para>
            </div>

            <BoxCards>

               { [{title:'Brand Recognition',img:'icon-brand-recognition.svg',mr:''},{title:'Detailed Records',img:'icon-detailed-records.svg',mr:'5px'},{title:'Fully Customizable',img:'icon-fully-customizable.svg',mr:'10px'}].map(item =>(
                   <Card key={item.title} title={item.title}  img={item.img}/>
               ))}
            </BoxCards>
            <Container2 img="bg-boost-desktop.svg">

                <Title color="white">Book your links today</Title>
                <Button>Get started</Button>
            </Container2>
        </Container>
    )
}
