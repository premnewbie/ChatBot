import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function DefaultCards({setQuestion,setAnswer,setToggle}) {

  const handleQuestion = (quesNum) => {
      if(quesNum===1){
        setQuestion('Hi, what is the weather?')
        setAnswer('Enter your Location? OR visit https://weather.com/');
        setToggle((prev) => !prev);
      } else if(quesNum===2){
        setQuestion('Hi, what is my location?')
        setAnswer('No Access to your location!');
        setToggle((prev) => !prev);
      } else if(quesNum===3){
        setQuestion('Hi, what is the temperature?')
        setAnswer('Unable to measure the temperature');
        setToggle((prev) => !prev);
      } else if(quesNum===4){
        setQuestion('Hi, how are you?')
        setAnswer(`I'm here and ready to assist! How can I help you today?`);
        setToggle((prev) => !prev);
      }
  }


  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className='default-card' onClick={() => handleQuestion(1)}>
            <h3>Hi, what is the weather?</h3>
            <p>Get immediate AI generated response</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className='default-card' onClick={() => handleQuestion(2)}>
            <h3>Hi, what is my location?</h3>
            <p>Get immediate AI generated response</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className='default-card' onClick={() => handleQuestion(3)}>
            <h3>Hi, what is the temperature?</h3>
            <p>Get immediate AI generated response</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className='default-card' onClick={() => handleQuestion(4)}>
            <h3>Hi, how are you?</h3>
            <p>Get immediate AI generated response</p>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}
