import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from '../utils/types';
import { Lot } from './Lot';
let resultsNumber = 20;

export default function Scroll(props: { items: Array<Lot>, itemsPerPage: number, offset: number, setOffset: Function }) {
  const [currentItems, setCurrentItems] = useState(props.items);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + props.itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(props.items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(props.items.length / props.itemsPerPage));
  }, [itemOffset, props.itemsPerPage]);

  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = (event.selected * props.itemsPerPage) % props.items.length;
    props.setOffset(newOffset);
  };


  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div>
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{props.offset}</span> to <span className="font-medium">{(props.items.length - props.offset > 7) ? props.offset + 7 : props.items.length}</span> of{' '}
          <span className="font-medium">{props.items.length}</span> results
        </p>
      </div>
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={8}
          pageCount={pageCount}
          previousLabel="< previous"
          previousClassName='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          nextClassName='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          pageClassName='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
          containerClassName='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          activeClassName='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
          breakClassName='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
        />
      </nav>
    </div>
  )
}