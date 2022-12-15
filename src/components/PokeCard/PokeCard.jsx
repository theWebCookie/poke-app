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
        <img src={data.sprites.other.dream_world.front_default} alt={data.name} />
        <div>
          <button onClick={() => setShow(!show)}>{show ? "Hide details" : "Show details"}</button>
          {show ? <Details 
                weightpok={data.weight} 
                heightpok={data.height} 
                pokstat1={data.stats[0].stat.name}
                pokstat2={data.stats[1].stat.name}
                pokstat3={data.stats[2].stat.name}
                pokstat4={data.stats[3].stat.name}
                pokstat5={data.stats[4].stat.name}
                pokstat6={data.stats[5].stat.name}
                
                posbs1={data.stats[0].base_stat}
                posbs2={data.stats[1].base_stat}
                posbs3={data.stats[2].base_stat}
                posbs4={data.stats[3].base_stat}
                posbs5={data.stats[4].base_stat}
                posbs6={data.stats[5].base_stat}
                /> : <></>}
        </div>
      </div>
    </div>
  )
}

export default PokeCard;