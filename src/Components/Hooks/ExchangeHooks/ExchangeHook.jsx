import { useQuery } from "react-query";
import { IconService } from "../../../Services/ExchangeServices/IconService";
import { useEffect, useMemo, useState } from "react";

const useExchangeHook = () => {
  console.log('import.meta.env.VITE_COIN_API_KEY',import.meta.env.VITE_COIN_API_KEY)
  const [mergedExchange, setMergedExchane] = useState([]);
  const getExchangeHookIcons = async () => {
    return await IconService.getExchangeIcons();
  };
  const getExchanges = async () => {
    return await IconService.getExchanges();
  };

  const { data: Icons } = useQuery("getIcons", getExchangeHookIcons);
  const { data: exchanges } = useQuery("getExchanges", getExchanges);


  const mergeIconsIntoExchanges =useMemo( () => {
    return exchanges?.map((exchange) => {
      const matchingIcon = Icons?.find(
        (icon) => icon.exchange_id === exchange.exchange_id
      );
      if (matchingIcon) {
        return {
          ...exchange,
          icon: matchingIcon.url,
        };
      }

      return exchange;
    });
  },[exchanges,Icons])

  useEffect(() => {
    setMergedExchane(mergeIconsIntoExchanges);
  }, [exchanges, Icons]);

  return {
    Icons,
    exchanges,
    mergedExchange,
  };
};

export default useExchangeHook;
