import { React, useEffect, useState } from "react";
import Axios from "axios";

const Crypto = () => {
    const [crypto, setCrypto] = useState([]);
    
    useEffect(() => {
        Axios.get(
`https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=USD`
    ).then((res) => {
      setCrypto(res.data.coins);
    });
  }, []);

  return (
    <div>
      <h1>All Cryptocurrencies</h1>
      <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Symbol</td>
                <td>Price</td>
            </tr>
        </thead>
        
        
        <tbody> 
            {crypto.map((val, key) => {
                return (
                <>
                <tr id={key}>
                    <td>{val.name}</td>
                    <td>{val.symbol}</td>
                    <td>$ {val.price}</td>
                </tr>
                </>
                );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Crypto;
