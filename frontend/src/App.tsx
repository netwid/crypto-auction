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
import { getAllLots } from './components/Contract';
import { Lot } from './components/Lot';

const myAcc = 'Kds..sdf'

const products: Lot[] = []

function App() {
  const [offset, setOffset] = useState(0);
  const [myOffset, setMyOffset] = useState(0);
  const [activePage, setActivePage] = useState(0)
  const p: Lot[] = [];
  const [fetchedProducts, setFetchedProducts] = useState(p)

  const contractAddress = '';
  let provider: ethers.providers.Web3Provider;
  let signer;
  let contract;

  // useEffect(() => {

  //   //fetch products
  //   setFetchedProducts(products)

  // },[])

  
  useEffect(() => {
    const f = async () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      // @ts-ignore
      setFetchedProducts(await getAllLots());
      console.log(fetchedProducts[0]);
    }

    f();
  });

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
            products={fetchedProducts}
          />
          <Scroll
            items={fetchedProducts}
            itemsPerPage={8}
            setOffset={setOffset}
            offset={offset + 1}
          />
        </> :
        <>
          <Page
            offset={myOffset}
            products={[...fetchedProducts.filter(product => product.owner === myAcc)]}
          />
          <Scroll
            items={[...fetchedProducts.filter(product => product.owner === myAcc)]}
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
