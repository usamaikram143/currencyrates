import { React, useEffect, useState } from "react";
import Axios from "axios";
import './Crypto.css';
import bgimage from '../bgimage.jpeg';

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
  <div style={{backgroundImage: 'url('+bgimage+')', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
      <div className="heading">Cryptocurrencies</div>
      <table>
        <thead>
            <div className="column">
              <div className="text">
                <td>Name</td>
                <td>Symbol</td>
                <td>Price</td>
              </div>
            </div>
        </thead>
        
        
        <tbody> 
            {crypto.map((val, key) => {
                return (
                <div className="column">
                  <div className="text">
                  <tr id={key}>
                    <td>{val.name}</td>
                    <td>{val.symbol}</td>
                    <td>$ {val.price}</td>
                  </tr>
                  </div>
                </div>
                );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Crypto;
