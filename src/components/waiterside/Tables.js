import React from 'react'
import Table from './Table'

function Tables() {
  const totalTbles = []
  //Pushing Table ID to array
  for(let i =1;i<=14;i++){
    totalTbles.push(i)
  }
  return (
    <div className='flex flex-wrap gap-5 mx-auto mt-3 text-center items-center justify-center'>
        {
          totalTbles.map((index)=>(<Table tableId={index} key={index}/>))
        }
    </div>
  )
}

export default Tables