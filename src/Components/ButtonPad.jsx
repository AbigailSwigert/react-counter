import React from 'react';

export default function ButtonPad({incrementCount, decrementCount, resetCount, doubleIncrementCount, fiveIncrementCount, tenIncrementCount}) {

    return (
        <div className='buttonPad'>
            <button className='btn' onClick={incrementCount} >+ 1</button>
            <button className='btn' onClick={doubleIncrementCount} >+ 2</button>
            <button className='btn' onClick={fiveIncrementCount} >+ 5</button>
            <button className='btn' onClick={tenIncrementCount} >+ 10</button>
            <button className='btn' onClick={decrementCount} >- 1</button>
            <button className='btn' onClick={resetCount} >Reset</button>
        </div>
    )
}
