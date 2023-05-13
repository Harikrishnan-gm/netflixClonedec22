import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
  const [show,setshow]= useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>100){
        setshow(true)}
        else{
          setshow(false)
        }
      
    })
  })
  return (
    <div className={`nav ${show&& 'blacknav'}`}>
      <img className='name' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
    </div>
  )
}

export default Nav