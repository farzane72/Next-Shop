import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch } from '@/redux/store';
import { useAppSelector } from '@/redux/store';
import { setPage } from '@/redux/features/panel/productsSlice';



interface PaginationReactProps {
    //itemsPerPage:number  
}
 
const PaginationReact: React.FunctionComponent<PaginationReactProps> = () => {

    const { itemOffset,products } = useAppSelector((store) => store.products);
    const dispatch=useAppDispatch()
  
  
  
  const [currentItems,setCurrentItems ]=useState<any>(null)
  const [pageCount,setPageCount]=useState(0)
  const itemsPerPage=products.count_items_current_page

 
  

  useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.results.slice(itemOffset,endOffset))
    setPageCount(Math.ceil(products.total_items/itemsPerPage))
  },[itemOffset,itemsPerPage,products])
 
  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * itemsPerPage) % products.total_items;
    
    //setItemOffset(newOffset);
    dispatch(setPage(newOffset))
  };

  return (
    <div dir="ltr">
      
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName='active'
       
      />
    </div>
  );
}





export default PaginationReact;