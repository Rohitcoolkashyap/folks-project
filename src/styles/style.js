import styled from "styled-components";

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
  width:100%;

  border-radius:20px;

}
`;
const Container = styled.div`
  width:80%;
  margin:auto;
  @media (max-width: 480px) {
    width:100%;
  }
`;
const Flex = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
@media (max-width: 480px) {
  flex-direction:column;

}

`
export {Button,Container,Flex}