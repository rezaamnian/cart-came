import React from 'react'

export default function Game(j) {

const showcart=()=>{
  if(!j.dis){
    j.wech(j.d);
  }
  
}

  return (

    <div>
      <div className='gamecart' y={j.key}>
          
        <div className={j.rotat ? "rott" : ""}>
          <img src={j.d.src} className='front' alt="no body"  />
          <img src="/img/chlsi.png" alt="no body" className='back' onClick={showcart}/>
        </div>
        </div>
    </div>
  )
}
