import PropTypes from 'prop-types'
import {useState} from 'react'

export const CounterApp = ({value})=>{

    const [counter, setCounter] = useState(value)
    
    const handleAdd = () => {
       //setCounter(counter+1);
       setCounter((c)=>c + 1 );
    }

    const handleSubstract = () => {
        setCounter((c) => c - 1);
    }

    const handleRest = () => {
        setCounter(value);
    }

    return (
        <>
        <h1>Counter App</h1>
        <h2> { counter } </h2>
        <button onClick={handleAdd}>
            1+
        </button>
        <button onClick={handleSubstract}> -1 </button>
        <button onClick={handleRest}> Reset </button>
        </>
    );

}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}