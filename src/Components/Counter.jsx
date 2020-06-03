import React, {useState} from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';


function Counter() {

    const [display,setDisplay] = useState(0);

    const incrementCount = () => {
        setDisplay(display + 1);
    };
      
    const decrementCount = () => {
        setDisplay(display - 1);
    };
      
    const resetCount = () => {
        setDisplay(0);
    };

    return (
        <div className="counter">
            <Display count={display} />
            <ButtonPad incrementCount={incrementCount} decrementCount={decrementCount} resetCount={resetCount} />
        </div>
    )
};


export default Counter;