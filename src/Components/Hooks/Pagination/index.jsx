import { useState, useMemo } from 'react';

const usePagination = (items, itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginationData = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(items?.length / itemsPerPage);

   
    let pageNumbers = [];
    if (totalPages <= 4) {
     
      pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
     
      if (currentPage <= 2) {
      
        pageNumbers = [1, 2, 3, totalPages];
      } else if (currentPage >= totalPages - 1) {
       
        pageNumbers = [1, totalPages - 2, totalPages - 1, totalPages];
      } else {
      
        pageNumbers = [1, currentPage - 1, currentPage, currentPage + 1];
      }
    }

    return {
      currentItems,
      totalPages,
      pageNumbers
    };
  }, [items, currentPage, itemsPerPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < paginationData.totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    currentItems: paginationData.currentItems,
    totalPages: paginationData.totalPages,
    pageNumbers: paginationData.pageNumbers,
    handlePreviousPage,
    handleNextPage,
    handlePageClick
  };
};

export default usePagination;