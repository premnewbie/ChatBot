import React from 'react'
import Navbar from './Navbar'
import RatingDropdown from './RatingDropdown'

export default function HistoryDialog({setOpen}) {
  return (
    <div style={{height:'100vh'}}>
        <Navbar setOpen={setOpen} />
        <RatingDropdown />
    </div>
  )
}
