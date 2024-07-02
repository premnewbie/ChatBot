import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import bulb from '../Assets/bulb.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Feedback({open,handleClose,feedback,setFeedback,data}) {
  const [tempInput,setTempInput] = React.useState('');

  const handleSubmit = () => {
    setFeedback(tempInput);
    data.feedback = tempInput;
    console.log(data);
    handleClose();
  }
 
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{backgroundColor: '#FFFFFFC4'}}
      >
        <Box sx={style} style={{width:'30rem',height:'16rem',padding:16,borderRadius:'15px',border:'none'}}>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <div style={{display:'flex',alignItems:'center',marginBottom:"0.5rem"}}>
                    <img src={bulb} alt='bulb' style={{width:"2rem",marginRight:"0.5rem"}}/>
                    <p>Provide Additional Feedback</p>
                </div>
                <button onClick={handleClose} style={{border:'none',fontSize:'x-large',fontWeight:600}}>X</button>
            </div>
            <input type='text' style={{width:"28rem",height:'9rem'}} value={feedback} onInput={(e)=>setTempInput(e.target.value)} />
            <div style={{display:'flex',justifyContent:'flex-end',marginTop:'0.5rem'}}><button onClick={handleSubmit} style={{width:'5rem',height:'2rem'}}>Submit</button></div>                   
        </Box>
      </Modal>
    </div>
  );
}