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
            <div >
              <div >
                <td className="header">Name</td>
                <td className="header">Symbol</td>
                <td className="header">Price</td>
              </div>
            </div>
        </thead>
        
        
        <tbody> 
            {crypto.map((val, key) => {
                return (
                <div>
                  <tr id={key}>
                  
                    <td className="row">
                    <a className="row" href={val.websiteUrl} >
                  
                  <img src={val.icon} alt="logo" width="30px"/>
                  </a> {val.name}</td >
                    <td className="row">{val.symbol}</td >
                    <td className="row">$ {val.price.toFixed(2)}</td >
                  </tr>
                  
                </div>
                );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Crypto;
