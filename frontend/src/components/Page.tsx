import { Fragment, SetStateAction, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Product from '../types';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

let bid = 23423;
let bidder = "LKj..KJds";

const products = [
  {
    id: 1,
    name: 'floppa',
    description: 'a very nice loved cat',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: 'Kds..sdf',
    
  },
  {
    id: 2,
    name: 'floppa2',
    href: '#',
    price: '$35',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Gregory_Caracal.jpg',
    imageAlt: '?',
    owner: '2Jsd..Lh',
  },
  {
    id: 3,
    name: 'floppa3',
    href: '#',
    price: '$89',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Big_Floppa_and_Justin_2_%28cropped%29.jpg',
    imageAlt: '?',
    owner: '3Kds..sdf',
    
  },
  {
    id: 4,
    name: 'floppa4',
    href: '#',
    price: '$35',
    imageSrc: 'https://i1.sndcdn.com/artworks-vog58LBUoWgkjgPZ-6Ru4Hg-t500x500.jpg',
    imageAlt: '?',
    owner: '4Kds..sdf',
    
  },
  {
    id: 5,
    name: 'floppa',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: '34Kds..sdf',
    
  },
  {
    id: 6,
    name: 'floppa',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: '987Kds..sdf',
    
  },
  {
    id: 7,
    name: 'floppa',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: '87Kds..sdf',
    
  },
  {
    id: 8,
    name: 'floppa',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: '248s..sdf',
    
  },
]


export default function Page(props: { products: Array<Product>, offset: number }) {
  const [open, setOpen] = useState(false)
  const [activeElement, setActiveElement] = useState(0)

  function show(i: SetStateAction<number>) {
    setActiveElement(i)
    setOpen(true)
  }



  return (
    <div>
      <div className="bg-white">

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Auctions</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {props.products.slice(props.offset, props.offset + 8).map((product: Product, ind: number) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <button
                    type="button"
                    onClick={() => show(ind + props.offset)}>
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-80 object-center object-cover group-hover:opacity-75"
                    />
                  </button>
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
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
                    <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                      <img src={props.products[activeElement].imageSrc} alt={props.products[activeElement].imageAlt} className="object-center object-cover" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{props.products[activeElement].name}</h2>

                      <section aria-labelledby="information-heading" className="mt-2">
                        <h3 id="information-heading" className="sr-only">
                          Auction information
                        </h3>

                        <p className="text-2xl text-gray-900">{props.products[activeElement].description}</p>
                        </section>

                    <section className='mt-4 text-2xl'>
                      <div>Owner: {products[activeElement].owner}</div>
                      <div>Highest bid: {bid}</div>
                      <div>Bidder: {bidder}</div>
                    </section>

                    <section aria-labelledby="options-heading" className="mt-4">
                      <h3 id="options-heading" className="sr-only">
                         Bid options
                      </h3>

                      
                      
                      <div className='text-2xl mb-3'>
                        Time to end: {}
                      </div>

                      <form>
                        <div className='bg-white text-2xl border-2 p-4 border-indigo-600 rounded-md'>
                        
                        <div>
                          <div className='text-indigo-600 flex justify-center'>Set new bid</div>
                          <div>Minimal value: </div>
                          <div>Enter value:
                          <input
                                    type="number"
                                    placeholder="0.0"
                                    className="h-7 ml-7 w-60 bg-transparent border-2 border-grey"
                                    style={{ border: "none", borderBottom: "2px solid #324054", outline: "0", color: "#FFFFFF" }}
                                />
              
                           </div>
                        </div>
                          <div className='flex justify-center'>
                      
                            <button
                              type="submit"
                              className="mt-6 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Create bid 
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