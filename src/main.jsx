import React, { StrictMode } from 'react';
import {createRoot} from 'react-dom/client'; // llama al React DOM para renderizar componentes

import {HelloWorldApp} from './HelloWorldApp'
import { FirstApp } from './FirstApp';
import './styles.css'
import { CounterApp } from './CounterApp';

const saludo = <h1>¡Hola Mundo!</h1>

const root = createRoot(document.getElementById('root'));
root.render(
    /*
    <StrictMode>
        <FirstApp title= "Hola soy Roberto" />
    </StrictMode>
    */
   /*
    <StrictMode>
    <FirstApp title="Rocatoro" subTitle = {18}/>
    </StrictMode>
    */
    <StrictMode>
    <CounterApp value={0} />
    </StrictMode>

);
