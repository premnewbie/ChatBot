import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useMediaQuery } from '@mui/material';
import newchat from '../Assets/newchat.png';
import editicon from '../Assets/editicon.png';
import { useNavigate } from "react-router-dom";


export default function Sidebar({open,setOpen}) {
  const screenSize = useMediaQuery('(max-width:768px)');
  let navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const routeToHome = () =>{
    navigate("/")
  }

  const routeToHistory = () => {
    navigate("/history")
  }

  const DrawerList = (
    <Box sx={{ width:"100%" }} role="presentation" onClick={toggleDrawer(false)}>
      <List disablePadding>        
        <ListItem disablePadding>
            <ListItemButton sx={{padding:0}}>
                <div className='new-chat' onClick={routeToHome}>                  
                  <img src={newchat} alt='newchat' />
                  <h2>New Chat</h2>
                  <img src={editicon} alt="editicon" />                  
                </div>
            </ListItemButton>
        </ListItem>    
        <ListItem disablePadding>
            <ListItemButton sx={{padding:"5%"}}>
                <div className='past-conversation' onClick={routeToHistory}>
                    <p>Past Conversation</p>
                </div>
            </ListItemButton>
        </ListItem>     
      </List>
    </Box>
  );

  return (
    <div className='sidebar'>
      {screenSize && <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>}
      {!screenSize && DrawerList}
    </div>
  );
}