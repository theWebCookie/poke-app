import React from 'react'

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
