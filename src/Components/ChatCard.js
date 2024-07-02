import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import soulai from '../Assets/soulai.png';
import user from '../Assets/user.png';
import Rating from "@mui/material/Rating";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Feedback from './Feedback';

export default function ChatCard({question,answer,
    localTime,setLocalTime,data}) {
    const currentTime = new Date().toLocaleString();
    const timeArr = currentTime.split(' ');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [showRating,setShowRating] = React.useState();
    const [feedback,setFeedback] = React.useState();
    const [value,setValue] = React.useState(0);

    React.useEffect(() => {
        if(value!==0){
            data.ratings = value;
            console.log(data);
        }
    },[value])    

    React.useEffect(()=>{
        setLocalTime(timeArr[1]+' '+timeArr[2]);
        data.time = localTime;
    },[])

  return (
    <div className='chat-card'>
        <CardContent>
            <Typography>
                <div className='question'>
                    <img src={user} alt='user' />
                    <div>
                        <h4>You</h4>
                        <p>{question}</p>
                        <h6>{localTime}</h6>
                    </div>
                </div>
            </Typography>
        </CardContent>
        <CardContent>
            <Typography>
                <div className='answer'>
                    <img src={soulai} alt='soulai' />
                    <div>
                        <h4>Soul AI</h4>
                        <p>{answer}</p>
                        <div style={{display: 'flex',gap:'0.5rem',alignItems:'center'}}>
                            <h6>{localTime}</h6>
                            <div>

                            </div>
                            <ThumbUpOffAltIcon onClick={() => {setShowRating((prev)=> !prev)}}/>
                            <ThumbDownOffAltIcon onClick={handleOpen} />
                        </div>
                        {showRating && <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event,newValue) => {
                            setValue(newValue);
                            }}
                        />}
                        {feedback && <p><strong>Feedback: </strong>{feedback}</p>}
                    </div>
                </div>
            </Typography>
        </CardContent>
        <Feedback open={open} handleClose={handleClose} inputText={feedback} setFeedback={setFeedback} data={data} />
    </div>
  )
}