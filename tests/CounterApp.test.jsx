import { fireEvent, render, screen } from "@testing-library/react";

import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp/>',()=>{
    const valorInicial = 100;
    test('Debe de hacer match con el snapshot',()=>{
        const {container} = render(<CounterApp value={valorInicial}/>)
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostar el valor inicial de 100',()=>{
        render(<CounterApp value={100}/>)
        //screen.debug();
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
    });

    test('Debe de incrementar con el boton +1', ()=>{
        render(<CounterApp value={valorInicial}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('Debe de decrementar con el boton -1', ()=>{
        render(<CounterApp value={valorInicial}/>);
        fireEvent.click(screen.getByText('-1'));
        //screen.debug();
        expect(screen.getByText('99')).toBeTruthy();
    });

    test('Debe de funcionar el boton de reset', ()=>{
        // SUJETO DE PRUEBAS
        render(<CounterApp value={118}/>);
        // APLICAR ESTIMULO
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));
        // VER COMPORTAMIENTO ESPERADO DESPUES DE ESTIMULO
        expect(screen.getByText(118)).toBeTruthy();
    });

});