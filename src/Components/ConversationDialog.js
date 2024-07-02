import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import sampleData from '../data/sampleData.json';
import soulai from '../Assets/soulai.png';
import ChatCard from './ChatCard';
import Feedback from './Feedback';

export default function ConversationDialog({setOpen}) {
    const [showCards,setShowCards] = useState(true);
    const [question,setQuestion] = useState('');
    const [chatData,setChatData] = useState([]);
    const [localTime,setLocalTime] = useState();
    const [localData,setLocalData] = useState([]); 

    const handleGetAnswer = () => {
      const targetValue = { "question": question };
      const exists = sampleData.some((obj) => obj.question.toLowerCase() === targetValue.question.toLowerCase());
      return exists;
    }

    const handleAsk = () => {      
      if(question){
        const exists = handleGetAnswer();
        let tempAns=`Sorry, I did't understand query!`;
        if(exists){
          const response = sampleData.find((data) => data.question.toLowerCase() === question.toLowerCase());
          tempAns=response.response;
        }
        setShowCards(false);           
        const obj = {"question": question,"answer":tempAns,"feedback":'',"ratings":0}
        setChatData((prev) => [...prev,obj])
      }
    }

    const handleSave = () => {
      setLocalData(JSON.parse(localStorage.getItem('botAi')));
      setShowCards(true);      
      if(chatData && localData!==undefined){
        setLocalData((prev) => [...prev,...chatData])
        console.log('local data ',localData)
        localStorage.setItem('botAi',JSON.stringify(localData));
      } else if(chatData && localData===undefined){
        localStorage.setItem('botAi',JSON.stringify(chatData));
      }
      setChatData([])
    }

  return (
    <div style={{height:"100%"}}>
        <Navbar setOpen={setOpen}/>
        {showCards && <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'10rem'}}><h2>
          How Can I Help You Today?
        </h2>
        <img src={soulai} alt='soulai' style={{borderRadius:'50%',width:'3rem'}}/></div>}
        <div className='chat-and-input'>
          {!showCards && <div className='chats'>
            {chatData?.map((data)=><ChatCard question={data.question} answer={data.answer} localTime={localTime} 
            setLocalTime={setLocalTime} data={data}
            />)}
          </div>}
          <div className='input-and-btns'> 
              <input type='text' onInput={(e)=>setQuestion(e.target.value)} />         
              <button onClick={handleAsk}>Ask</button>
              <button onClick={handleSave}>Save</button>
          </div>
        </div>        
    </div>
  )
}
