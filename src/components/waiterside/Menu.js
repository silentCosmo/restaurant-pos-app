import React, { useState } from 'react'
import MenuItem from './MenuItem';

function Menu() {
    const menuItems = {
        Beverages: [
            { id: 1, item: "Water", price: 20 },
            { id: 2, item: "Soda", price: 40 },
            { id: 3, item: "Iced Tea", price: 50 },
            { id: 4, item: "Lemonade", price: 60 },
            { id: 5, item: "Coffee", price: 30 },
            { id: 6, item: "Hot Tea", price: 30 },
        ],
        Appetizers: [
            { id: 7, item: "French Fries", price: 100 },
            { id: 8, item: "Onion Rings", price: 120 },
            { id: 9, item: "Mozzarella Sticks", price: 150 },
            { id: 10, item: "Chicken Wings", price: 200 },
            { id: 11, item: "Nachos", price: 180 },
            { id: 12, item: "Quesadilla", price: 220 },
        ],
        Entrees: [
            { id: 13, item: "Burger", price: 250 },
            { id: 14, item: "Cheeseburger", price: 280 },
            { id: 15, item: "Veggie Burger", price: 220 },
            { id: 16, item: "Grilled Chicken Sandwich", price: 300 },
            { id: 17, item: "Philly Cheesesteak", price: 350 },
            { id: 18, item: "Fish and Chips", price: 320 },
        ],
        Desserts: [
            { id: 19, item: "Ice Cream Sundae", price: 150 },
            { id: 20, item: "Cheesecake", price: 200 },
            { id: 21, item: "Chocolate Cake", price: 180 },
            { id: 22, item: "Apple Pie", price: 170 },
            { id: 23, item: "Banana Split", price: 190 },
            { id: 24, item: "Brownie Sundae", price: 220 },
        ],
    };

    const [selectedCategory, setSelectedCategory] = useState("Beverages");


  return (
    <div className='py-16 px-5'>
          <div className="flex">
              {/* Left side menu */}
              <div className="w-1/3 bg-gray-100 mt-5">
                  {/* Define the categories as buttons */}
                  {Object.keys(menuItems).map((category) => (
                      <button
                          key={category}
                          className={`w-full py-4 px-6 text-left font-semibold ${selectedCategory === category ? "bg-orange-500 text-white rounded-md focus:text-lg duration-300" : ""
                              }`}
                          onClick={() => setSelectedCategory(category)}
                      >
                          {category}
                      </button>
                  ))}
              </div>
              {/* Right side menu */}
              <div className="w-2/3 flex flex-wrap gap-1 md:gap-3 p-2 text-center items-center justify-center">
                  {/* Map over the selected category's items and render them as clickable buttons */}
                  {menuItems[selectedCategory].map((item) => (
                    <MenuItem item={item} />
                  ))}
              </div>
          </div>
    </div>
  )
}

export default Menu