import React from 'react'

// weightpok={data.weight} 
//                 heightpok={data.height} 
//                 pokstat1={data.stats[0].stat.name}
//                 pokstat2={data.stats[1].stat.name}
//                 pokstat3={data.stats[2].stat.name}
//                 pokstat4={data.stats[3].stat.name}
//                 pokstat5={data.stats[4].stat.name}
//                 pokstat6={data.stats[5].stat.name}
                
//                 posbs1={data.stats[0].base_stat}
//                 posbs2={data.stats[1].base_stat}
//                 posbs3={data.stats[2].base_stat}
//                 posbs4={data.stats[3].base_stat}
//                 posbs5={data.stats[4].base_stat}
//                 posbs6={data.stats[5].base_stat}

const Details = (data) => {
  return (
    <div>
      <p><b>Height</b> is <b>{data.height*10} cm.</b></p>
      <p><b>Weight</b> is <b>{data.weight*0.1} kg</b></p>
      <h3>Statistics</h3>
      <p><b>{data.stats[0].stat.name} : {data.stats[0].base_stat}</b></p>
      <p><b>{data.stats[1].stat.name} : {data.stats[1].base_stat}</b></p>
      <p><b>{data.stats[2].stat.name} : {data.stats[2].base_stat}</b></p>
      <p><b>{data.stats[3].stat.name} : {data.stats[3].base_stat}</b></p>
      <p><b>{data.stats[4].stat.name} : {data.stats[4].base_stat}</b></p>
      <p><b>{data.stats[5].stat.name} : {data.stats[5].base_stat}</b></p>
    </div>
  )
}

export default Details;