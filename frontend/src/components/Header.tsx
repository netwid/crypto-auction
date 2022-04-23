import { Fragment, SetStateAction, useState } from 'react'
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ethers } from 'ethers'

let yourWallet = 'Lfs..Kjwe'
let yourBalance = '123984'



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header( props:{ setActivePage: Function, activePage: number, contract: ethers.Contract }) {
  const navigation = [
    { name: 'All lots', action: () => props.setActivePage(0), current: props.activePage == 0 },
    { name: 'My lots', action: () => props.setActivePage(1), current: props.activePage == 1 }
  ]
  const [open, setOpen] = useState(false)
  return (
    <div>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto h-24 px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-24">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => item.action()}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='text-white border-white border-2 rounded-md'>
                <button
                  type="button"
                  className="p-1"
                  onClick={() => setOpen(true)}
                >
                  Create new auction +
                </button>
              </div>

              <div className="absolute inset-y-0 p-2 right-0  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-white border-white border-2 rounded-md">
                <div className='pr-4'> Your wallet: {yourWallet} </div>
                <div>Your balance: {yourBalance} </div>

              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
      </Disclosure>


      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
          <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" style={{ fontSize: 0 }}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                    {/* <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5"> */}
                      {/* <img src={} alt={} className="object-center object-cover" /> */}
                    {/* </div> */}
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{}</h2>

                    <section aria-labelledby="options-heading" className="mt-4">
                      <h3 id="options-heading" className="sr-only">
                         Auction options
                      </h3>


                      <form>
                        <div className='bg-white text-2xl border-2 p-4 mt-9 border-indigo-600 rounded-md'>
                          <div>
                            Name: {}
                            <input
                              type="text"
                              className="h-7 ml-20 w-60 bg-transparent border-2 border-grey"
                              style={{ border: "none", borderBottom: "2px solid #324054", outline: "0", color: "#000000" }}
                            />
                          </div>
                          <div>
                            Description: {}
                            <input
                              type="text"
                              className="h-7 ml-6 w-60 bg-transparent border-2 border-grey"
                              style={{ border: "none", borderBottom: "2px solid #324054", outline: "0", color: "#000000" }}
                            />
                          </div>
                          <div className=''>
                            Time to end: {}
                            <input
                              id="datetime" type="datetime-local"
                              className=" h-7 ml-5 w-60 bg-transparent border-2 border-grey"
                              style={{ border: "none", borderBottom: "2px solid #324054", outline: "0", color: "#000000" }}
                            />
                          </div>
                        
                        <div>
                          <div>Minimal bid:
                          <input
                                    type="number"
                                    placeholder="0"
                                    className="h-7 ml-7 w-60 bg-transparent border-2 border-grey"
                                    style={{ border: "none", borderBottom: "2px solid #324054", outline: "0", color: "#000000" }}
                                />
                           </div>
                           <div className='flex justify-center mt-5'>
                             
                             <input 
                             type="image"
                             className="h-20 ml-7 w-60 bg-transparent border-2 border-grey"
                             style={{ border: "none", borderBottom: "2px solid #324054", outline: "0", color: "#000000" }}/>
                           </div>
                           
                        </div>
                          <div className='flex justify-center'>
                      
                            <button
                              type="submit"
                              className="mt-6 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Create auction 
                            </button>
                          </div>
                          
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>



      </div>
    
  )
}