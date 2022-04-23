import './App.css';
import { Router, Route, Routes, Link } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { Web3 } from './pages/Web3/Web3';
import Header from './components/Header';
import Page from './components/Page';
import Scroll from './components/Scroll';
import { useState } from 'react';
import Product from './utils/types';

const products: Array<Product> = [
  {
    id: 1,
    name: 'floppa',
    description: 'a very nice loved cat',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',

  },
  {
    id: 2,
    name: 'floppa2',
    description: 'a very nice loved cat',
    href: '#',
    price: '$35',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Gregory_Caracal.jpg',
    imageAlt: '?',
  },
  {
    id: 3,
    name: 'floppa3',
    description: 'a very nice loved cat',
    href: '#',
    price: '$89',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Big_Floppa_and_Justin_2_%28cropped%29.jpg',
    imageAlt: '?',
  },
  {
    id: 4,
    name: 'floppa4',
    description: 'a very nice loved cat',
    href: '#',
    price: '$35',
    imageSrc: 'https://i1.sndcdn.com/artworks-vog58LBUoWgkjgPZ-6Ru4Hg-t500x500.jpg',
    imageAlt: '?',
  },
  {
    id: 5,
    name: 'floppa',
    description: 'a very nice loved cat',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
  },
  {
    id: 6,
    name: 'floppa',
    description: 'a very nice loved cat',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
  },
  {
    id: 7,
    name: 'floppa',
    description: 'a very nice loved cat',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
  },
  {
    id: 8,
    name: 'floppa',
    description: 'a very nice loved cat',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
  },
  {
    id: 9,
    name: 'floppa',
    description: 'a very nice loved cat',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
  },
  {
    id: 10,
    name: 'floppa',
    description: 'a very nice loved cat',
    href: '#',
    price: '$48',
    imageSrc: 'https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg',
    imageAlt: '??',
  },
  {
    id: 11,
    name: 'floppa2',
    description: 'a very nice loved cat',
    href: '#',
    price: '$35',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Gregory_Caracal.jpg',
    imageAlt: '?',
  },
  {
    id: 12,
    name: 'floppa2',
    description: 'a very nice loved cat',
    href: '#',
    price: '$35',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Gregory_Caracal.jpg',
    imageAlt: '?',
  },
]

function App() {
  const [offset, setOffset] = useState(0);
  const [activePage, setActivePage] = useState(0)

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
        </>
      }

      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/web3">Web3</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/web3" element={<Web3 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
