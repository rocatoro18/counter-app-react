import PropTypes from 'prop-types'


export const CounterApp = ({value})=>{

    // Funcion de flecha
    const handleAdd = (event,newValue) => {
        //console.log(event)
        console.log(newValue)
    }

    return (
        <>
        <h1>Counter App</h1>
        <h2> { value } </h2>
        <button onClick={(event) => handleAdd(event,'Hola')}>
            1+
        </button>
        </>
    );

}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}