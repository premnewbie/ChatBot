import { Button, useMediaQuery } from '@mui/material'
import hamburger from '../Assets/hamburger.png';

export default function Navbar({setOpen}) {
    const screenSize = useMediaQuery('(max-width:768px)');

  return (
    <div className='navbar'>
        {screenSize && <Button onClick={()=>setOpen(true)}>
            <img src={hamburger} alt='hamburger-menu' />
        </Button>}
        <h1>Bot Ai</h1>
    </div>
  )
}
