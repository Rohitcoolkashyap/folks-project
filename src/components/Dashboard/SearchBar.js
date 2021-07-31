import React from 'react'

import styled from 'styled-components';
import { Button } from '../../styles/style';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import CopyToClipboard from 'react-copy-to-clipboard';
const BoxSearch = styled.div`
  width:100%;
  height:10vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#4b3f6b;

  // background-image:url('bg-boost-desktop.svg');
margin-bottom:80px;
`;
const Box = styled.div`

  display:flex;
  align-items:center;
  justify-content:space-between;
  background:white;
  padding:10px;
margin-bottom:20px;
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
  const [input,setInput] = useState();
  const [copy,setCopy] = useState(false);
const [error,setError] = useState();
const [loading,setLoading]=useState();
  const url = 'https://api.shrtco.de/v2/shorten?url=';
  const [shortenUrls,setShortenUrls] = useState();
  const handleSearch = ()=>{
setLoading(true);
    if(!input){
      setError('Field is empty')
    }
    async function fetch(){
      try {
        const {data} = await axios.get(`${url}${input}`);
        console.log(data.result);
        let result = data.result;
        let obj = {
          link1 : result.full_short_link,
          link2 : result.full_short_link2,
          link3 :result.full_short_link3,

        }
        setShortenUrls(obj);
        setLoading(false);

      } catch (error) {
        console.log(error.error);
        setLoading(true);

        // setError(error);
      }
     
    }
    fetch();

  }
  const handleCopy = (copyText)=>{
      /* Select the text field */
  // copyText.select();
  shortenUrls.link1.select();
  // copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");
    setCopy(true);
  }
    return (
      <div>
        <BoxSearch mb={6}>
            <Input onFocus={() => setError('')} style={{color:error && 'red',border:error && '1px solid red'}} value={error ? error:input} onChange={(e) => setInput(e.target.value)}  type="text" placeholder="Shorten a link here..."/>
            <Button onClick={handleSearch} style={{borderRadius:5,padding:'13px 20px'}}>Shorten It!</Button>
            
            </BoxSearch>
            {error && <p style={{color:'red'}}>please add a link</p>}


          {loading && <div>Loading....</div>}
           
            { (!loading &&  shortenUrls) && 
            <div mt={2}>
              <Box>
                        <p>{input}</p>
<Box>
                <p>{shortenUrls.link1}</p>
                <Button onClick={() =>navigator.clipboard.writeText(shortenUrls.link1)}>Copy</Button>
                </Box>
              </Box>

               <Box>
               <p>{input}</p>
               <Box>

       <p>{shortenUrls.link2}</p>
       <Button onClick={() =>navigator.clipboard.writeText(shortenUrls.link2)}>Copy</Button>
     </Box>
     </Box>

      <Box>
      <p>{input}</p>
      <Box>

<p>{shortenUrls.link3}</p>
<Button onClick={() =>navigator.clipboard.writeText(shortenUrls.link3)}>Copy</Button>
</Box>
</Box>

</div>
            }
        </div>
    )
}
