import React from 'react';

export default function ButtonPad({incrementCount, decrementCount, resetCount}) {

    return (
        <div>
            <button onClick={incrementCount} >Up Button</button>
            <button onClick={decrementCount} >Down Button</button>
            <button onClick={resetCount} >Reset Button</button>
        </div>
    )
}
