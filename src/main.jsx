import React from 'react';
import {createRoot} from 'react-dom/client'; // llama al React DOM para renderizar componentes

import {HelloWorldApp} from './HelloWorldApp'
import { FirstApp } from './FirstApp';
import './styles.css'

const saludo = <h1>¡Hola Mundo!</h1>

const root = createRoot(document.getElementById('root'));
root.render(<FirstApp/>);
