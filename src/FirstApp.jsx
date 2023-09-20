//import { Fragment } from "react";
import PropTypes from 'prop-types'

const newMessage = {
    message: 'Hola Mundo',
    title: 'Roberto'
};

const getName = ()=>{
    return 'Hola Carlos';
}

export const FirstApp = ({title, subTitle = 'RCTR', name}) => {

    /*
    if(!title){
        throw new Error('El title no existe');
    }
    */
    //console.log(props);

    return (
        // Esto es un fragmento (agrupador de otros elementos html
        // en los cuales se tiene un nodo padre)
        // <code>{JSON.stringify(newMessage)}</code>
        // <>{getName()}</>
        <>
            {<h1 data-testid="test-title">{title}</h1>}
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    //title: 'Ho hay titulo',
    subTitle : 'No hay subtitulo',
    name: 'Roberto Torres',
}
