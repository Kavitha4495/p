import React ,{useState} from 'react'
import './Card1.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Card1() {
    const data = [
        { id: 1, pic:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTErI4ulhjqdCNjvLv6BJld_TBfLnMF29kM0SCoKoQ6ml7x4HoEufw88MSOdo03aijIl5D11ELc5Uu7PixD9dXGpfwWsk8TCLhrdETfOeDtkUOHI_PyxZK9&usqp=CAE' ,name:'THE COURAGE TO BE DISLIKED' ,text:'₹ 290 ' , rating:'Rating : 4.5'},
        { id: 2, pic: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTIkGsxYGNfot_dNyh7zKwwprOm3VPOWTI-WpqnFNrazXftA2XdkDezuOryZSCM4FFYDM0vxcxr00g3oclrZ6lA00rIqwiLPQbTlDZGo59m&usqp=CAE',name:'RICH DAD POOR DAD',text:'₹ 599', rating:'Rating : 4.8'},
        { id: 3, pic: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIY--3wnRU0eLPi20U04cvdxN-xgA9oyKlutcW1J4smo3IXGqNLLaB1B5tt6M2phVPyKD57b6RuXvD-mNYYpJGmtuNZ_cXcoif3YbmyyAgYwXSW41LdmtzZg&usqp=CAE', name:'ELON MUSK BY WALTER ISAASCON',text:'₹ 390', rating:'Rating : 4.9'},
        { id: 4, pic: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR6IGdyUZv4KDqg05xwBevOBf2AcTxeOTFtrOcQRuBo6XQCoRnyn7EZ1PqR7KLmt7wmumxbfEWgCoXOhBUmV2qPdH0Gojo2TcCPhxxcficKFW_JlQvKBtOh&usqp=CAE' ,name:'THE LAST WISH INTRODUSING THE WITCHER',text:'₹ 323', rating:'Rating : 4.1'},
        { id: 5, pic: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgnT3epK61kk7wAIZIj3ze15llhU6ODQXbIe6gxmH9fbkQLdYrQkJFFNQl0E8melj8M2qJiJDx0d1569CUIQQn_Pck0CbNt4bRi6g2G5bxAXKXW3SMUIbx&usqp=CAE',name:'THE TEMPEST PAPERBOOK',text:'₹ 390', rating:'Rating : 5'},
        { id: 6, pic:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRUQf4rKh5DdMLl0npyr4UxSRJQHvQPfFjenyJfBUWBEmixHYwXp2jP_nqNjmK4T-FSv0RPQnAnRvbz-C52GJcFrfuoWVGgLVEcHajD73pz&usqp=CAE' ,name:'DIVERGENT SERIES FOUR-BOOK COLLECTION BOX-SET',text:'₹ 1,500', rating:'Rating : 5'},
        { id: 7, pic:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBgeaaFgD3-rlBXvgKw54sUT5vEg3hVMExGzvmdxSna3wzf7HlvSR1q6oHmJ6W72aHJAiOcg4Urdj5e6bkHkM4YaloMfUoRW8NpxtF57wwPzBVFHaH4nPsWA&usqp=CAE' ,name:'ROOTS BY ALEX HALLY' ,text:'₹ 399', rating:'Rating : 3.9'},
        { id: 8, pic: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSqqId-kNQU2Bg-zw--xxUfoi_lusjapox7EVoL7icUqBT3WieTDMnsJVfeBnj3YZ95w5bT_JX7zyuROXXHfcWbo1ReMqgxJfi3IvRMmlf0fe2HR8wup2GRXA&usqp=CAE',name:'THE 5 AM CLUB' ,text:'₹ 1,799' ,rating:'Rating : 4.8'},
        { id: 9, pic:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRwEgLM4LHMr6-xQ6oYWBIWK3HnNrftgBoDMVE1N-SlNnmPmjjmclbTs5fl6uV-Zc-FQ2QMNzOlKgOlhGm_hs6LCj93izXRDyGC9pc8isWB&usqp=CAE' ,name:'WE ALL WANT IMPOSSBILE THINGS:A NOVEL AUDIOBOOK BY CATHERIN NEWMAN',text:'₹ 1,245' , rating:'Rating :3.8'},
        { id: 10, pic:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR251r99c5uVDFtyHb0bt5h3Apm04QfaGRL-Cl4mv-ypi0ZvtC-2ZnXtlRL9sMsg485qiMp8Me0pQDFiozDspbS7r5gDcwBSMPLRvjUMrvS&usqp=CAE', name:'THE COVENANT OF WATER: A NOVE',text:'₹ 242' , rating:'Rating : 4.3'},
        { id: 11, pic:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTeb7SlO7a_Rcsn2l2Rh3MUmnqYgF1AX1wLQSj3HEx2iJXTtJwQHwQe5EsJ4rYzA9d3Ki7UgJl0GyNA8FZg5pzfFQgJwWHTJi2UJw-dz8yPZQkIn-GTw_mNZw&usqp=CAE' ,name:'GREATEST WORKS OF JANE AUSTEN SET OF 5 BOOKS',text:'498', rating:'Rating : 3.4'},
        { id: 12, pic:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRu0dKKk0oCfnnitF8H1yvPwZfOyAr1PHfJgsCX9cODR9d718a0s67BfDHhEXxjb2Ki4C41U82khvlrxtxxFIgmvZ_QNPU0AQQ1reXqr8ez&usqp=CAE' ,name:'CRESCENDO BY BECCA FITZPATRICK' ,text:'₹ 125', rating:'Rating : 4.8'},
        
      ]; 

      
      const [Search, setserach] = useState(""); 
      const handleInputChange = (e) => {
        setserach(e.target.value)
      };
      const filterdata = data.filter((Searchvalue) => {
        const itemsearched = Search.toLowerCase();
        return (
          Searchvalue.name.toLowerCase().includes(itemsearched) ||
          Searchvalue.text.toString().includes(itemsearched)||
          Searchvalue.id.toString().includes(itemsearched) 
        )
      });
      const rows = filterdata.map((item) => (
       
        <MDBCol md='4'>
         
      <div className='card-main'>          
        <div className='cardcontainer'>
            <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src={item.pic} fluid alt='...' style={{height:'13em',width:'300px'}}  className='image-card'/>
            <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
            </MDBRipple>
            <MDBCardBody>
            <MDBCardTitle>{item.name}</MDBCardTitle>
            <MDBCardText>
                {item.top}
                </MDBCardText>
                <MDBCardText>
                {item.text}
                </MDBCardText>
                <MDBCardText>
                {item.rating}
                </MDBCardText>
            <MDBBtn href='#' className='button'>Buy</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        </div>
    </div>
        </MDBCol>


      ));
  return (
    <div>
        <input type='text' value={Search} onChange={handleInputChange} className='card-input-css' placeholder='      Search'/>
       <MDBRow>
     {rows}
     
    </MDBRow>
    </div>
  )
}

export default Card1