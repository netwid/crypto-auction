import { Transition, Dialog } from '@headlessui/react'
import { startNewAuction } from '../Contract';
import { Fragment, useEffect, useState } from 'react'
import {  XIcon } from '@heroicons/react/outline'
import { Upload } from './Upload/Upload';
import { Contract } from 'ethers';
import { LoadingButton } from '../LoadingButton/LoadingButton';

export const Create = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [minimalBidIncrement, setMinimalBidIncrement] = useState(0);
    const [auctionEndTime, setAuctionEndTime] = useState(0);

    const create = async () => {
        console.log(name, description, imageURL, minimalBidIncrement, auctionEndTime);
        setLoading(true);
        await startNewAuction(name, description, imageURL, minimalBidIncrement, auctionEndTime);
        setLoading(false);
    }

    useEffect(() => {
        setAuctionEndTime(Date.now());
    }, []);

    return (
        <>
            <div className='text-white h-10 border-white border-2 rounded-md'>
                <button className="p-1" onClick={() => setOpen(true)}>
                    Create new auction +
                </button>
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
                            <div className="flex items-center justify-center text-base text-left transform transition w-full 
                            md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                                <div className="w-11/12 relative flex rounded-lg items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                    <button
                                        type="button"
                                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    <div className="w-full">

                                        <div className="sm:col-span-8 lg:col-span-7">
                                            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{ }</h2>

                                            <section aria-labelledby="options-heading" className="mt-4">
                                                <h3 id="options-heading" className="sr-only">
                                                    Auction options
                                                </h3>


                                                <form>
                                                    <div className='bg-white text-2xl flex justify-center'>
                                                        <div>
                                                            <div>
                                                                Name: { }
                                                                <input
                                                                    type="text"
                                                                    className="h-7 mb-2 ml-20 w-60 bg-transparent border-2 border-grey"
                                                                    style={{ border: "none", borderBottom: "2px solid #324054", outline: "0", color: "#000000" }}
                                                                    value={name}
                                                                    onInput={e => setName((e.target as HTMLInputElement).value)}
                                                                />
                                                            </div>
                                                            <div>
                                                                Description: { }
                                                                <input
                                                                    type="text"
                                                                    className="h-7 ml-6 mb-2 w-60 bg-transparent border-2 border-grey"
                                                                    style={{ border: "none", borderBottom: "2px solid #324054", outline: "0", color: "#000000" }}
                                                                    value={description}
                                                                    onInput={e => setDescription((e.target as HTMLInputElement).value)}
                                                                />
                                                            </div>
                                                            <div className=''>
                                                                Time to end: { }
                                                                <input
                                                                    id="datetime" type="datetime-local"
                                                                    className=" h-7 mb-2 ml-5 w-60 bg-transparent border-2 border-grey"
                                                                    style={{ border: "none", borderBottom: "2px solid #324054", outline: "0", color: "#000000" }}
                                                                    value={new Date(auctionEndTime).toISOString().slice(0, -5)}
                                                                    onInput={e => setAuctionEndTime(+new Date((e.target as HTMLInputElement).value))}
                                                                />
                                                            </div>

                                                            <div>
                                                                <div>Minimal bid:
                                                                    <input
                                                                        min="0"
                                                                        type="number"
                                                                        placeholder="0"
                                                                        className="h-7 ml-7 w-60 bg-transparent border-2 border-grey"
                                                                        style={{ border: "none", borderBottom: "2px solid #324054", outline: "0", color: "#000000" }}
                                                                        value={minimalBidIncrement}
                                                                        onInput={e => setMinimalBidIncrement(Number.parseInt((e.target as HTMLInputElement).value))}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <Upload changeUrl={setImageURL} />

                                                            <input id="url" type="hidden" value={imageURL} />

                                                            <div className='flex justify-center'>


                                                                {loading ?
                                                                    <LoadingButton />
                                                                    :
                                                                    <button
                                                                        type="submit"
                                                                        className="bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                        onClick={create}
                                                                    >
                                                                        Create auction
                                                                    </button>}


                                                            </div>


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
        </>
    )
}