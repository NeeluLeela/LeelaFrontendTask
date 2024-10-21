const HeaderSection = () => {
  return (
    <>
      <div className="w-full h-[70px] flex flex-col justify-center">
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
    </>
  );
};
export default HeaderSection
