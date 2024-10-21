import React, { useEffect, useMemo, useState } from "react";
import useExchangeHook from "../../Hooks/ExchangeHooks/ExchangeHook";
import usePagination from "../../Hooks/Pagination";
import { PaginationControls } from "../../Hooks/Pagination/paginationControls";
import FiltersSection from "./Filters";
import HeaderSection from "./HeaderSections";

const Dashboard = () => {
  const { mergedExchange } = useExchangeHook();
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [maxVolume, setMaxVolume] = useState(100);

  const filteredExchanges = useMemo(() => {
    if (!mergedExchange) return [];

    return mergedExchange.filter((exchange) => {
      const exchangeId = exchange.exchange_id?.toString().toLowerCase() || "";
      const volume =
        exchange.volume_1day_usd?.toString().toLowerCase() || "";
      const volumeValue = parseFloat(exchange.volume_1day_usd) || 0;

      const matchesSearch =
        !searchTerm ||
        exchangeId.includes(searchTerm.toLowerCase()) ||
        volume.includes(searchTerm.toLowerCase());

      const withinPriceRange =
        volumeValue >= priceRange[0] && volumeValue <= priceRange[1];

      return matchesSearch && withinPriceRange;
    });
  }, [mergedExchange, searchTerm, priceRange]);

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

  useEffect(() => {
    if (mergedExchange?.length) {
      const max = Math.max(
        ...mergedExchange.map((ex) => parseFloat(ex.volume_1day_usd) || 0)
      );
      setMaxVolume(max);
      setPriceRange([0, max]);
    }
  }, [mergedExchange]);

  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
    handlePageClick(1);
  };

  return (
    <div className="w-full h-full flex items-center text-sky-900 flex-col justify-center  p-4 px-20 hide-scrollbar">
      <div className="w-full text-center flex flex-col  items-center justify-evenly !min-h-fit h-[35%]">
        <HeaderSection />
        <FiltersSection
          priceRange={priceRange}
          handlePriceRangeChange={handlePriceRangeChange}
          handleSearch={handleSearch}
          maxVolume={maxVolume}
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
        className="w-full text-center flex flex-col   overflow-auto font-semibold flex flex-col items-center hide-scrollbar "
        style={{ height: "calc(100% - 200px)" }}
      >
        {currentmergedExchanges?.length > 0 ? (
          currentmergedExchanges?.map((exchange, index) => (
            <div
              key={exchange.exchange_id}
              className=" h-[45px] min-h-[45px] w-full px-10 text-[13px] text-left flex items-center justify-between gap border-b border-b-[1px] border-lightGrey"
            >
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
