import React from 'react'
import user from '../Assets/user.png';
import soulai from '../Assets/soulai.png';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from "@mui/material/Rating";

export default function HistoryCards({data}) {
  return (
    <div className='history-card'>
        <CardContent>
            <Typography>
                <div className='history-question'>
                    <img src={user} alt='user' />
                    <div>
                        <h4>You</h4>
                        <p>{data.question}</p>
                    </div>
                </div>
                <div className='history-answer'>
                    <img src={soulai} alt='soulai' />
                    <div>
                        <h4>Soul Ai</h4>
                        <p>{data.answer}</p>
                        <div className='rating-and-feedback'>
                            {data.ratings!==0 && <Rating name="read-only" value={data.ratings} readOnly />}
                            {data.feedback!=='' && <p><strong>Feedback: </strong>{data.feedback}</p>}
                        </div>
                        <h6>{data.time}</h6>
                    </div>
                </div>
            </Typography>    
        </CardContent>
    </div>
  )
}
