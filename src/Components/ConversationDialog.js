import { useEffect,useState } from 'react'
import Navbar from './Navbar'
import sampleData from '../data/sampleData.json';
import soulai from '../Assets/soulai.png';
import ChatCard from './ChatCard';
import DefaultCards from './DefaultCards';

export default function ConversationDialog({setOpen}) {
    const [showCards,setShowCards] = useState(true);
    const [question,setQuestion] = useState('');
    const [chatData,setChatData] = useState([]);
    const [localTime,setLocalTime] = useState();
    const [localData,setLocalData] = useState(JSON.parse(localStorage.getItem('botAi')) || []);
    const [toggle,setToggle] = useState(true);
    const [answer,setAnswer] = useState('');


    const handleGetAnswer = () => {
      const targetValue = { "question": question };
      const exists = sampleData.some((obj) => obj.question.toLowerCase() === targetValue.question.toLowerCase());
      return exists;
    }

    useEffect(() => {
      if(question){
        const exists = handleGetAnswer();
        setAnswer(`Sorry, I did't understand query!`);
        if(exists){
          const response = sampleData.find((data) => data.question.toLowerCase() === question.toLowerCase());
          setAnswer(response.response);
        }
        setShowCards(false);           
        const obj = {"question": question,"answer":answer,"feedback":'',"ratings":0,"time":localTime}
        setChatData((prev) => [...prev,obj])
      }
    },[toggle])


    // const handleAsk = () => {      
    //   if(question){
    //     const exists = handleGetAnswer();
    //     setAnswer(`Sorry, I did't understand query!`);
    //     if(exists){
    //       const response = sampleData.find((data) => data.question.toLowerCase() === question.toLowerCase());
    //       setAnswer(response.response);
    //     }
    //     setShowCards(false);           
    //     const obj = {"question": question,"answer":answer,"feedback":'',"ratings":0,"time":localTime}
    //     setChatData((prev) => [...prev,obj])
    //   }
    // }


    const handleSave = () => {
      if(chatData.length!==0 && localData.length!==0){
        setLocalData((prev) => [...prev,chatData]);
        localStorage.setItem('botAi',JSON.stringify(localData));
      } else if(chatData.length!==0 && localData.length===0){
        localStorage.setItem('botAi',JSON.stringify(chatData));
      }
      setChatData([]);
      setShowCards(true);
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
          {showCards && <DefaultCards setQuestion={setQuestion} setAnswer={setAnswer} setToggle={setToggle} />}
          <div className='input-and-btns'> 
              <input type='text' onInput={(e)=>setQuestion(e.target.value)} />         
              <button onClick={() => setToggle(!toggle)}>Ask</button>
              <button onClick={handleSave}>Save</button>
          </div>
        </div>        
    </div>
  )
}
