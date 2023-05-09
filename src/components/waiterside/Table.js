import React from 'react'
import { Link } from 'react-router-dom'

function Table({tableId}) {
  return (
    <div className=''>
      <Link to={`/table/${tableId}`}>
      <div className="w-40 h-40 flex border bg-slate-800 border-orange-500 rounded-lg">
        <div className='text-center items-center  my-auto mx-auto'>
          <div className=' w-40 h-5 mb-10'></div> 
          <p className='text-4xl tf font-extrabold text-orange-500'>T-{tableId}</p>
          {/* <div className='w-20 h-8 mt-2 rounded-xl bg-green-500'>Taken</div>
          <div className='w-20 h-8 mt-2 rounded-xl bg-red-500'>Closed</div>*/}
          <div className='bg-orange-500 w-[9.9rem] h-7 mt-8 rounded-b-lg'><p className="text-slate-800 font-bold text-md">W-04</p></div> 
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Table