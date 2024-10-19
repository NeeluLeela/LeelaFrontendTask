import { useQuery } from "react-query";
import { IconService } from "../../../Services/ExchangeServices/IconService";

const useExchangeHook = () => {
  const getExchangeHookIcons = async () => {
    return await IconService.getExchangeIcons();
  };

  const { data: Icons } = useQuery("getIcons", getExchangeHookIcons);

  return {
    Icons,
  };
};

export default useExchangeHook;
