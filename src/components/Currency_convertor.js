import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './currency_convertor.css';
import {HiSwitchHorizontal} from "react-icons/hi";
import { Flip } from '@mui/icons-material';

const Currency_convertor = () => {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input,setInput]=useState(0);
  const [output,setOutput]=useState(0);
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
    convert();
  }, [info])

 function convert(){
     var rate=info[to];
     setOutput(input*rate);
 }
 function flip(){
     var temp=from;
     setFrom(to);
     setTo(temp);
 }
 

  return (
    <div className='App'>
        <h1>
            Currency Convertor
        </h1>
        <div className='container'>
        <div className='left'>
            <h3>Amount</h3>
            <input type='text' placeholder='Enter the amount'
            onChange={(e) => setInput(e.target.value)}/>
        </div>
        <div className='middle'>
            <h3>From</h3>
            <Dropdown options={options}
                onChange={(e) => { setFrom(e.value) }}
                value={from} placeholder="From" />
        </div>

        <div className='switch'>
            <HiSwitchHorizontal size="30px"
                        onclick={ () => {Flip()}}/>
        </div>

        <div className='right'>
            <h3>To</h3>
            <Dropdown options={options}
                onChange={(e) => {setTo(e.value)}}
                value={to} placeholder="To" />
        </div>
        </div>
        
        <div className='result'>
            <button onClick={()=>{convert()}}>Convert</button>
            <h2>Converted Amount:</h2>
            <p>{input+" "+from+": "+output.toFixed(3)+" "+to}</p>
        </div>
        
        
    </div>
  );
}

export default Currency_convertor;