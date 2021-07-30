import React from 'react'

import styled from 'styled-components';
import { Button } from '../../styles/style';

const Box = styled.div`
  width:100%;
  height:10vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#4b3f6b;

  // background-image:url('bg-boost-desktop.svg');
margin-bottom:80px;
`;
const Input = styled.input`
  width:80%;
height:40px;
margin-right:10px;
border-radius:5px;
padding-left:20px;
border:none;
`;
export default function SearchBar() {
    return (
        <Box>
            <Input type="text" placeholder="Shorten a link here..."/>
            <Button style={{borderRadius:5,padding:'13px 20px'}}>Shorten It!</Button>
        </Box>
    )
}
