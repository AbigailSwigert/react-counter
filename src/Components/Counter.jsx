import React, {useState} from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';


function Counter() {
    const [displayHistory, setDisplayHistory] = useState([]);
    const [display,setDisplay] = useState(0);

    const incrementCount = () => {
        setDisplayHistory(displayHistory.concat(display + ', '));
        setDisplay(display + 1);
    };
      
    const decrementCount = () => {
        setDisplayHistory(displayHistory.concat(display + ', '));
        setDisplay(display - 1);
    };
      
    const resetCount = () => {
        setDisplayHistory([]);
        setDisplay(0);
    };

    const doubleIncrementCount = () => {
        setDisplayHistory(displayHistory.concat(display + ', '));
        setDisplay(display + 2);
    };

    const fiveIncrementCount = () => {
        setDisplayHistory(displayHistory.concat(display + ', '));
        setDisplay(display + 5);
    };

    const tenIncrementCount = () => {
        setDisplayHistory(displayHistory.concat(display + ', '));
        setDisplay(display + 10);
    };

    return (
        <div className="displayAndButtons">
            <Display count={display} />
            <ButtonPad incrementCount={incrementCount} decrementCount={decrementCount} resetCount={resetCount} doubleIncrementCount={doubleIncrementCount} fiveIncrementCount={fiveIncrementCount} tenIncrementCount={tenIncrementCount} />
            <span>History: {displayHistory}</span>
        </div>
    )
};


export default Counter;