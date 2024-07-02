import React, { useEffect, useState } from 'react'
import HistoryCards from './HistoryCards';

export default function RatingDropdown() {
  const [cardData,setCardData] = useState([]);
  const [filteredCard,setFilteredCard] = useState([]);


  const handleCardFilter = (value) => {
    if(value==='AllRatings'){
      setFilteredCard(JSON.parse(localStorage.getItem('botAi')))
    } else if(value==='NoRatings'){
      setFilteredCard(cardData.filter((card) => card.ratings===0))
    } else{
      setFilteredCard(cardData.filter((card) => card.ratings===value))
    }
  }

  useEffect(() => {
    setCardData(JSON.parse(localStorage.getItem('botAi')));
    setFilteredCard(JSON.parse(localStorage.getItem('botAi')))
  },[])

  return (
    <div className='conversation-history'>
        <h1 style={{marginLeft:'2rem'}}>Conversation History</h1>
        <div className='rating-dropdown' style={{marginLeft:'2rem'}}>
            <p>Filter by rating</p>
            <select name='ratings' id='ratings' onInput={(e) => handleCardFilter(e.target.value)}>
                <option value='AllRatings'>All ratings</option>
                <option value='NoRatings'>No Rating</option>
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
            </select>
        </div>
        <div style={{marginLeft:'1rem'}}>
          <div className='chat-and-input'>
            <div className='history-chats'>
              {filteredCard?.map((data) => <HistoryCards data={data} />)}
            </div>
            <div className='input-and-btns'> 
                <input type='text' />         
                <button>Ask</button>
                <button>Save</button>
            </div>
          </div>
        </div>
    </div>
  )
}
