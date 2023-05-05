import React from 'react'

function Header() {
  return (
    <header className='fixed w-full z-50'>
          <nav className="bg-slate-900 border-b border-orange-500 backdrop:blur-md bg-opacity-95">
              <div className="max-w-screen flex flex-wrap items-center justify-between mx-4 py-2">
                  <a href="/" className="flex items-center">
                      {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
                      <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-400">OrderMate</span>
                  </a>
                  <div className="flex items-center md:order-2">
                      <button type="button" className="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                          <span className="sr-only">Open user menu</span>
                          <img className="w-10 h-10 rounded-full" src="data:image/jpeg;base64,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" alt="user" />
                      </button>
                      {/*  Dropdown menu */}
                      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                          <div className="px-4 py-3">
                              <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                          </div>
                          <ul className="py-2" aria-labelledby="user-menu-button">
                              <li>
                                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                              </li>
                              <li>
                                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                              </li>
                              <li>
                                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                              </li>
                              <li>
                                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                              </li>
                          </ul>
                      </div>
                      {/* <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                          <span className="sr-only">Open main menu</span>
                          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                      </button> */}
                  </div>
                  {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                          <li>
                              <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                          </li>
                          <li>
                              <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                          </li>
                          <li>
                              <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                          </li>
                          <li>
                              <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                          </li>
                          <li>
                              <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                          </li>
                      </ul>
                  </div> */}
              </div>
          </nav>

    </header>
  )
}

export default Header