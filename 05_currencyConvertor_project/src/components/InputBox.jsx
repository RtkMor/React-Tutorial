import React from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    incrementAmount,
    decrementAmount
}){


    return (
        <div className='container-fluid bg-white rounded-3'>

            {/* From and Currency Type */}
            <div className="d-flex flex-row text-secondary p-2">
                <div className="col-6 me-auto">{label}</div>
                <div className="g-col-6 ms-auto">Currency Type</div>
            </div>


            {/* Input Field */}
            <div className="d-flex flex-row text-secondary ps-2 pe-2 mt-1">

                {/* Input Currency Value */}
                <div className="col-8 me-auto">
                    <div className="input-group mb-3">
                        <input
                        value={amount}
                        disabled={amountDisable}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        type="text" 
                        className="form-control"/>
                        {label === 'From' && (
                            <span className="input-group-text d-flex flex-column p-0">
                                <button 
                                onClick={incrementAmount}
                                className="btn btn-sm btn-outline-secondary" type="button">&#9650;</button>
                                <button
                                onClick={decrementAmount}
                                className="btn btn-sm btn-outline-secondary" type="button">&#9660;</button>
                            </span>
                        )}
                    </div>
                </div>

                {/* Select Currency Input Field */}
                <div className="col-3 ms-auto">
                <select
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
                className="form-select">

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}

                </select>
                </div>

            </div>

        </div>
    );
};

export default InputBox;
