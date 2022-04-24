import { Fragment, SetStateAction, useState, useEffect } from 'react';
import React from 'react';
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Product from '../utils/types';
import { getAllLots } from './Contract';
import { Lot } from './Lot';
import { LotAction } from './LotAction/LotAction';
import { useTimer } from 'react-timer-hook';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

let bid = 23423;
let bidder = "LKj..KJds";

export default function Page(props: { products: Array<Lot>, offset: number }) {
  const [open, setOpen] = useState(false)
  const [activeElement, setActiveElement] = useState(0);

  function show(i: SetStateAction<number>) {
    setActiveElement(i)
    setOpen(true)
  }



  const Desc = () => {
    const timer = useTimer({ expiryTimestamp: new Date(props.products[activeElement].auctionEndTime.toNumber()), autoStart: true })
    return <>

      {
        props.products[activeElement] != null &&
        <section className='mt-4 text-2xl'>
          <div>
            Owner: <a href={`https://ropsten.etherscan.io/address/${props.products[activeElement].owner}`}
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              target="_blank"
              rel="noreferrer">
              {props.products[activeElement].owner.slice(2, 5) + '...' + props.products[activeElement].owner.slice(-3)}
            </a>
          </div>
          <div>Highest bid: {props.products[activeElement].highestBid.toNumber()}</div>
          <div>
            Bidder: <a href={`https://ropsten.etherscan.io/address/${props.products[activeElement].highestBidder.toString()}`}
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              target="_blank"
              rel="noreferrer">
              {props.products[activeElement].highestBidder.toString().slice(2, 5) + '...' + props.products[activeElement].highestBidder.toString().slice(-3)}
            </a>
          </div>
        </section>
      }
     
      <section aria-labelledby="options-heading" className="mt-4">
        <h3 id="options-heading" className="sr-only">
          Bid options
        </h3>

        <div className='text-2xl mb-5'>
          Time to end: {timer.days} days {(timer.hours < 10 ? '0' : '') + timer.hours}:{(timer.minutes < 10 ? '0' : '') + timer.minutes}:{(timer.seconds < 10 ? '0' : '') + timer.seconds}
        </div>
      </section>
    </>
  }

  return (
    <div>
      <div className="bg-white">

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Auctions</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {props.products.slice(props.offset, props.offset + 8).map((product: Lot, ind: number) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a key={product.id.toNumber()} href={'#'} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <button
                    type="button"
                    onClick={() => show(ind + props.offset)}>
                    <img
                      src={product.imageURL}
                      alt={'Lot page'}
                      className="w-full h-80 object-center object-cover group-hover:opacity-75"
                    />
                  </button>
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{
                  Math.max(product.highestBid.toNumber(), product.minimalBidIncrement.toNumber())}</p>
              </a>
            ))}
          </div>
        </div>


      </div>
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
              <div className="flex text-base text-left transform transition w-full md:inline-block 
              md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                <div className="w-full relative flex-none rounded-lg items-center bg-white px-4 pt-14
                 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <div className='flex'>
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6
                     md:top-6 md:right-6 lg:top-8 lg:right-8"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className='flex w-9/12'>

                      <div className="w-7/12 mr-10 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">

                        <div className="aspect-w-3 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                          {
                            props.products[activeElement] != null &&
                            <img src={props.products[activeElement].imageURL} alt={props.products[activeElement].description} className="object-center object-cover" />
                          }
                        </div>
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{props.products[activeElement]?.name}</h2>

                        <section aria-labelledby="information-heading" className="mt-2">
                          <h3 id="information-heading" className="sr-only">
                            Auction information
                          </h3>
                          {
                            props.products[activeElement] != null &&
                            <p className="text-2xl text-gray-900 italic" >"{props.products[activeElement].description}"</p>
                          }
                        </section>
                        <Desc />
                      </div>

                    </div>

                  </div>
                  <div className=''>
                    {
                      props.products[activeElement] != null &&
                      <LotAction lot={props.products[activeElement]} />
                    }
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