import styled from "styled-components";

const Button = styled.button`
color:white;
padding:10px 18px;
background-color:#2acfcf;
border:none;
border-radius:20px;
font-weight:600;
font-size:14px;
&:hover {
  background-color:#7cf0f0;

}
@media (max-width: 480px) {
  font-size:12px;
  padding:5px 9px;
  border-radius:15px;

}
`;
const Container = styled.div`
  width:80%;
  margin:auto;
 
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