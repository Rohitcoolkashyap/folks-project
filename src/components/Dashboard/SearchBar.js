import React,{useState} from 'react'

import styled from 'styled-components';
import axios from 'axios';
const BoxSearch = styled.div`
  width:100%;
  height:10vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#4b3f6b;

  // background-image:url('bg-boost-desktop.svg');
margin-bottom:80px;
@media (max-width: 480px) {
  flex-direction:column;
  padding:20px;
}
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
@media (max-width: 480px) {
  font-size:15px;
  width:93%;
  margin-right:0px;
  margin-bottom:10px;
  height:60px;
  padding:10px;



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
  width:100%;
  height:40px;

  border-radius:20px;

}
`;
 function SearchBar() {
  const [text,setText] = useState();
const [error,setError] = useState();
const [loading,setLoading]=useState();
const [shortenUrls,setShortenUrls] = useState();

  const url = 'https://api.shrtco.de/v2/shorten?url=';
  const handleSearch = ()=>{
setLoading(true);
    if(!text){
      setError('Field is empty')
    }
    async function fetch(){
      try {
        const {data} = await axios.get(`${url}${text}`);
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

        setError('Not a valid link');
      }
     
    }
    fetch();

  }
 
    return (
      <div>
        <BoxSearch mb={6}>
            <Input  style={{color:error && 'red',border:error && '1px solid red'}} value={error ? error:text} onChange={(e) => setText(e.target.value)}  type="text" placeholder="Shorten a link here..."/>
            <Button onClick={handleSearch} style={{borderRadius:5,padding:'13px 20px'}}>Shorten It!</Button>
            
            </BoxSearch>
            {error && <p style={{color:'red'}}>please add a link</p>}


          {loading && <div>Loading....</div>}
           
            { (!loading &&  shortenUrls) && 
            <div mt={2}>
              <Box>
                        <p>{text}</p>
<Box>
                <p>{shortenUrls.link1}</p>
                <Button onClick={() =>navigator.clipboard.writeText(shortenUrls.link1)}>Copy</Button>
                </Box>
              </Box>

               <Box>
               <p>{text}</p>
               <Box>

       <p>{shortenUrls.link2}</p>
       <Button width="40px"  onClick={() =>navigator.clipboard.writeText(shortenUrls.link2)}>Copy</Button>
     </Box>
     </Box>

      <Box>
      <p>{text}</p>
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

export default SearchBar;