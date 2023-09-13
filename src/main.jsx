import React from 'react';
import {createRoot} from 'react-dom/client'; // llama al React DOM para renderizar componentes


const saludo = <h1>¡Hola Mundo!</h1>

const root = createRoot(document.getElementById('root'));
root.render(saludo);
