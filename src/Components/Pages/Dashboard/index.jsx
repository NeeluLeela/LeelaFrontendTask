import React, { useMemo, useState } from "react";
import { Input } from "../../Library/UI/Input";
import { FaBuildingShield } from "react-icons/fa6";
import useExchangeHook from "../../Hooks/ExchangeHooks/ExchangeHook";
import usePagination from "../../Hooks/Pagination";
import { PaginationControls } from "../../Hooks/Pagination/paginationControls";

const Dashboard = () => {
  const { mergedExchange } = useExchangeHook();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredExchanges = useMemo(() => {
    return mergedExchange?.filter((exchange) =>
      exchange.volume_1day_usd.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [mergedExchange, searchTerm]);

  const {
    currentItems: currentmergedExchanges,
    currentPage,
    totalPages,
    pageNumbers,
    firstIndex,
    lastIndex,
    handlePreviousPage,
    handleNextPage,
    handlePageClick,
  } = usePagination(filteredExchanges);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    handlePageClick(1);
  };
  const startIndex = (currentPage - 1) * 10;


  return (
    <div className="w-full h-full flex items-center text-sky-900 flex-col justify-center  p-4 px-20 hide-scrollbar">
      <div className="w-full text-center flex flex-col h-[150px] items-center justify-evenly !min-h-fit">
        <div className="w-full ">
          <p className="text-[18px] text-sky-900 font-bold">
            Top Crypto exchanges
          </p>
          <p className="text-[10px] font-normal">
            Compare all 190 top crypto exchanges. The list is ranked by trading
            volume
          </p>
        </div>
        <div className="w-full h-[40px] border-b-[1px] border-border flex items-end justify-center mb-[20px] ">
          <p className="underline underline-offset-4 text-[14px] font-semibold	">
            {" "}
            Exchanges
          </p>
        </div>
        <Input
          value={searchTerm}
          onChange={handleSearch}
          InputType="search"
          containerClass="max-w-[300px]"
          className="b-lightgrey rounded-[10px] max-w-[300px] rounded-[20px] m-auto border-[1px] border- p-2 pl-10 "
          Icon={<FaBuildingShield />}
        />
      </div>
      <hr />
      <div className="h-[45px]  min-h-[45px] w-full px-24 text-[13px] uppercase text-[12px] font-semibold text-left flex items-center justify-between gap-2 border-b border-b-[1px] border-border">
        <div className="w-[50%] flex items-center justify-center text-center  min-w-[200px] max-w-[350px]">
          <p>exchanges</p>
        </div>
        <div className="w-[50%] flex items-center justify-center text-center  min-w-[200px] max-w-[350px] ">
          <p>24 h Trade volume</p>
        </div>
      </div>

      <div
        className="w-full text-center flex flex-col overflow-auto font-semibold flex flex-col items-center hide-scrollbar "
        style={{ height: "calc(100% - 250px)" }}
      >
        {currentmergedExchanges?.length > 0 ? (
          currentmergedExchanges?.map((exchange, index) => (
            <div key={exchange.exchange_id} className=" h-[45px] min-h-[45px] w-full px-10 text-[13px] text-left flex items-center justify-between gap border-b border-b-[1px] border-lightGrey">
              <div className="min-w-fit  h-full flex gap-4 w-[50%] items-center justify-end max-w-[300px] min-w-[200px] ">
                <div className="w-[200px] flex  gap-4">
                  <p>{startIndex + index + 1}</p>
                  <img
                    className="w-[25px] h-[25px] "
                    src={exchange.icon}
                    alt={`img${index}`}
                  />
                  <p>{exchange.exchange_id}</p>
                </div>
              </div>
              <div className="w-[50%] flex items-center  max-w-[300px] min-w-[200px] ">
                <p>${exchange.volume_1day_usd}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p>No exchanges found</p>
          </div>
        )}
      </div>
      {currentmergedExchanges?.length > 0 && (
        <div className="w-full h-[70px] flex items-center justify-center">
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            pageNumbers={pageNumbers}
            onPrevious={handlePreviousPage}
            onNext={handleNextPage}
            onPageClick={handlePageClick}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
