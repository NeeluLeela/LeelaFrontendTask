import axios from '../../Config/Authaxios'

export const IconService = {
    getExchanges: async () => {
        const response = await axios.get("https://rest.coinapi.io/v1/exchanges",
        )
        return response.data
    },
    getExchangeIcons: async () => {
        const response = await axios.get(" https://rest.coinapi.io/v1/exchanges/icons/32",
        )
        return response.data
    },

   

     

}