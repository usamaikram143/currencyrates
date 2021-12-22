import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Currency_convertor = () => {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);

  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
   .then((res) => {
      setInfo(res.data[from]);
    })
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
  }, [info])

 
 

  return (
    <div>
        <h3>From</h3>
        <Dropdown options={options}
            onChange={(e) => { setFrom(e.value) }}
            value={from} placeholder="From" />
        <h3>To</h3>
        <Dropdown options={options}
            onChange={(e) => {setTo(e.value)}}
            value={to} placeholder="To" />
        
    </div>
  );
}

export default Currency_convertor;