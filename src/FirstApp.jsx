//import { Fragment } from "react";

const newMessage = {
    message: 'Hola Mundo',
    title: 'Roberto'
};

const getName = ()=>{
    return 'Hola Carlos';
}

export const FirstApp = () => {

    return (
        // Esto es un fragmento (agrupador de otros elementos html
        // en los cuales se tiene un nodo padre)
        // <code>{JSON.stringify(newMessage)}</code>
        <>
            <>{getName()}</>
            <p>Soy un subtitulo</p>
        </>
    )
}