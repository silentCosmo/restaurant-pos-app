import React, { useEffect, useState } from 'react'
import WaiterSide from '../components/WaiterSide'
import Reception from '../components/Reception'

function Home() {
    const [waiter,setWaiter] = useState(Boolean)
    useEffect(() => {
        setWaiter(true)
    }, []);
  return (
    <div className=' py-16 px-5 text-slate-800'>
    { waiter ? <WaiterSide/> : <Reception/> }
  </div>
  )
}

export default Home