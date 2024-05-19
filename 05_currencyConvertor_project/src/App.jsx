import React, { useEffect, useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo'

import InputBox from './components/InputBox';

import './App.css';

const App = () => {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const convert = useEffect(() => {
    
    const convertAmount = (amount * currencyInfo[to])
    
    if(isNaN(convertAmount)){
      setConvertedAmount(0)
    }
    else{
      setConvertedAmount(convertAmount)
    }

  }, [amount, from])

  const swap = () => {
    setTo(from);
    setFrom(to);

    setAmount(0);
  };

  const incrementAmount = () => {
    setAmount(amount+1)
  }

  const decrementAmount = () => {
    if(amount>=1) setAmount(amount-1)
  }


  return (
      <div className="app-container">

        <div className='mainBox'>

          <div className='position-relative'>

            <div>
                <InputBox
                  label = {"From"}
                  amount = {amount}
                  onAmountChange = {(amount) => setAmount(amount)}
                  onCurrencyChange = {(currency) => setFrom(currency)}
                  currencyOptions = {options}
                  selectCurrency = {from} 
                  incrementAmount = {incrementAmount}
                  decrementAmount = {decrementAmount} />
            </div>

            <button
            onClick={swap}
            className='btn btn-primary start-50 translate-middle-x border-white border-3 swap'>SWAP</button>

            <div className='mt-3'>
                <InputBox
                  label = {"To"}
                  amount = {convertedAmount}
                  onAmountChange = {(convertedAmount) => setConvertedAmount(convertedAmount)}
                  onCurrencyChange = {(currency) => setTo(currency)}
                  currencyOptions = {options}
                  selectCurrency = {to}
                  amountDisable />
            </div>

          </div>

          <div className='text-center mt-3'>
            <button
            onClick = {convert}
            className='w-100 btn btn-primary'>
              {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>

        </div>

      </div>

    );
};

export default App;
