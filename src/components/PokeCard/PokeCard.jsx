import React, { useState } from 'react'
import './PokeCard.css'
import Details from '../Details/Details'

// {id,name,image,type,height,weight,stat1,stat2,stat3,stat4,stat5,stat6,bs1,bs2,bs3,
//   bs4,bs5,bs6}

const PokeCard = (data) => {
  const [show, setShow] = useState(false);
  return (
    <div className='card'>
      <div>
        <div>
          <p>#{data.id} {data.name.toUpperCase()}</p>
        </div>
        <div><img src={data.sprites.other.dream_world.front_default} alt={data.name} /></div>
        <div className='details'>
          <button className='btn' onClick={() => setShow(!show)}>{show ? "Hide details" : "Show details"}</button>
          {show ? <Details {...data}/> : <></>}
        </div>
      </div>
    </div>
  )
}

export default PokeCard;