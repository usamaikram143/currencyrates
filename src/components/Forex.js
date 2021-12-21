import * as React from 'react';
import { useQuery,gql } from '@apollo/client';


const EXCHANGE_RATES = gql`
query GetExchangeRates {
  rates(currency: "USD") {
    currency
    rate
  }
}
`;

function ExchangeRates (){
    const{ loading,error,data}=useQuery(EXCHANGE_RATES);
    if(loading) return <p>Loading the Data...</p>;
    if(error) return <p>There is somthing wrong, sorry for the inconvenient</p>

    return data.rates.map(({currency,rate}) => (
        <div key={currency}> Currency Symbol : {currency}
        <div>
            Exchange Rate $1 = {rate}{currency}
        </div>
        </div>
    ));
}

const Forex = () => {
    return (
        <div>
            <ExchangeRates/>
        </div>
    )
}

export default Forex;