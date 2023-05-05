import React, { useState } from 'react'

function MenuItem({item}) {
    const handleItemClick = (item) => {
        console.log(`You clicked on ${item}`);
        // Do something with the selected item, such as adding it to an order
    };
    
    const [order,setOrder] = useState({});
    console.log('order',order);
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        if(count<9){
        setCount(count + 1);
        setOrder({ ...item, count: count + 1 });
    }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
            setOrder({ ...item, count: count - 1 });
        }
    }
  return (
    <div>
          <div
              key={item.item}
              className="w-24 h-32 md:w-36 md:h-40 pt-2 border border-orange-500 text-center rounded-md flex flex-col hover:scale-105 transition duration-300"
              onClick={() => handleItemClick(item.item)}>
              <div className='text-xs md:text-base md:h-24  px-2'>
                  <p className='text-orange-700 font-semibold'>{item.item}</p>
                  <p className='text-red-900'>&#8377;{item.price}</p>
              </div>
              <div className='flex md:h-12 mt-auto justify-center py-1 bg-orange-500'>
                  <div className="flex justify-between">
                  <button
                          className="active:bg-orange-600 rounded-md text-orange-900 font-bold py-1 px-3"
                      onClick={handleDecrement}
                      >
                      -
                  </button>
                  <span className="bg-orange-600 rounded-md text-slate-100 font-bold py-1 md:px-3 px-2 md:mx-2 mx-[0.1rem]">
                      {count}
                  </span>
                  <button
                          className="active:bg-orange-600 rounded-md text-orange-900 font-bold py-1 px-3"
                      onClick={handleIncrement}
                  >
                      +
                  </button>
                  </div>
              </div> 
        </div>
    </div>
  )
}

export default MenuItem