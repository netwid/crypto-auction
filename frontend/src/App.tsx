import './App.css';
import { Router, Route, Routes, Link } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { Web3 } from './pages/Web3/Web3';
import Header from './components/Header';
import Page from './components/Page';
import Scroll from './components/Scroll';
import { useEffect, useRef, useState } from 'react';
import Product from './types';
import { ethers } from "ethers";
import Auction from './Auction.json';

const myAcc = 'Kds..sdf'

const products: Product[] = [
  {
    id: 1,
    name: '1',
    description: 'a very nice loved cat',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: 'Kds..sdf',
    bid: 1247573,
    bidder: 'ftfhfjf',
    endTime: new Date().getTime() + 3600000
  },
  {
    id: 2,
    name: '2',
    description: '',
    href: '#',
    price: '$35',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Gregory_Caracal.jpg',
    imageAlt: '?',
    owner: 'Kds..sdf',
    bid: 146523,
    bidder: 'ftfhfjf',
    endTime: new Date().getTime() + 3600000
  },
  {
    id: 3,
    name: '3',
    description: '',
    href: '#',
    price: '$89',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Big_Floppa_and_Justin_2_%28cropped%29.jpg',
    imageAlt: '?',
    owner: 'Kds..sdf',
    bid: 14723,
    bidder: 'ftfhfjf',
    endTime: new Date().getTime() + 3600000
    
  },
  {
    id: 4,
    name: '4',
    description: '',
    href: '#',
    price: '$35',
    imageSrc: 'https://i1.sndcdn.com/artworks-vog58LBUoWgkjgPZ-6Ru4Hg-t500x500.jpg',
    imageAlt: '?',
    owner: 'Kds..sdf',
    bid: 1254543,
    bidder: 'ftfhfjf',
    endTime: new Date().getTime() + 3600000
  },
  {
    id: 5,
    name: '5',
    description: '',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: 'Kds..sdf',
    bid: 124574753,
    bidder: 'ftfhfjf',
    endTime: new Date().getTime() + 3600000
  },
  {
    id: 6,
    name: '6',
    description: '',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: 'Kds..sdf',
    bid: 1464723,
    bidder: 'ftfhfjf',
    endTime: new Date().getTime() + 3600000
  },
  {
    id: 7,
    name: '7',
    description: '',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: 'Kds..vdf',
    bid: 123,
    bidder: 'ftfhfjf',
    endTime: new Date().getTime() + 3600000
  },
  {
    id: 8,
    name: '8',
    description: '',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: 'Kds..sfghf',
    bid: 132323,
    bidder: 'ftfhfjf',
    endTime: new Date().getTime() + 3600000
  },
  {
    id: 9,
    name: '9',
    description: '',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: 'Kds..gsdf',
    bid: 124553,
    bidder: 'gdhfftfhfjf',
    endTime: new Date().getTime() + 1000000
  },
  {
    id: 10,
    name: '10',
    description: '',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: '248s..sdf',
    bid: 1275473,
    bidder: 'shftfhfjf',
    endTime: new Date().getTime() + 100000000
  },
  {
    id: 11,
    name: '11',
    description: '',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: '248s..sdf',
    bid: 123,
    bidder: 'ftfhsdfjf',
    endTime: new Date().getTime() + 100000
  },
  {
    id: 12,
    name: '12',
    description: '',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
    owner: '248s..sdf',
    bid: 123,
    bidder: 'ftfhddffjf',
    endTime: new Date().getTime() + 100000000000
  },
]

function App() {
  const [offset, setOffset] = useState(0);
  const [myOffset, setMyOffset] = useState(0);
  const [activePage, setActivePage] = useState(0)
  const p: Product[] = [];
  const [fetchedProducts, setFetchedProducts] = useState(p)

  const contractAddress = '';
  let provider: ethers.providers.Web3Provider;
  let signer;
  let contract;

  useEffect(() => {

    //fetch products
    setFetchedProducts(products)

  },[])

  useRef(() => {
    if (!ethereum)
      alert('Please install metamask');
    provider = new ethers.providers.Web3Provider(ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, Auction.abi, signer);
  })
  .toString()
  return (

    <>


      <Header
        activePage={activePage}
        setActivePage={setActivePage}
      />
      {activePage === 0 ?

        <>
          <Page
            offset={offset}
            products={products}
          />
          <Scroll
            items={products}
            itemsPerPage={8}
            setOffset={setOffset}
            offset={offset + 1}
          />
        </> :
        <>
          <Page
            offset={myOffset}
            products={[...products.filter(product => product.owner === myAcc)]}
          />
          <Scroll
            items={[...products.filter(product => product.owner === myAcc)]}
            itemsPerPage={8}
            setOffset={setMyOffset}
            offset={myOffset + 1}
          />
        </>
      }
    </>
  );
}

export default App;
