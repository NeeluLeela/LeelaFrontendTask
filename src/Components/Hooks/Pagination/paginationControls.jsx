import { Fragment } from "react";
import { PaginationEllipsis,Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../../Library/Pagination";

export const PaginationControls = ({
    currentPage,
    totalPages,
    pageNumbers,
    onPrevious,
    onNext,
    onPageClick
  }) => {
    const renderPageNumbers = () => {
      return pageNumbers.map((number, index) => {
        // Add ellipsis if there's a gap
        const shouldShowEllipsis = index > 0 && number - pageNumbers[index - 1] > 1;
  
        return (
          <Fragment key={number}>
            {shouldShowEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                isActive={currentPage === number}
                onClick={() => onPageClick(number)}
                className={currentPage === number ? 'bg-blue-950 text-white' : ''}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          </Fragment>
        );
      });
    };
  
    return (
      <div className="flex items-center justify-end space-x-4 gap-3 py-1">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                disabled={currentPage === 1}
                onClick={onPrevious}
                className={`${
                  currentPage > 1 ? '!text-[white] bg-blue-600 cursor-pointer  ' : 'text-gray-400 cursor-not-allowed'
                }`}
              />
            </PaginationItem>
  
            {renderPageNumbers()}
  
            <PaginationItem>
              <PaginationNext
                disabled={currentPage === totalPages}
                onClick={onNext}
                className={`${
                  currentPage < totalPages ? '!text-[white] bg-blue-600 cursor-pointer ' : 'text-gray-400 cursor-not-allowed'
                }`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  };