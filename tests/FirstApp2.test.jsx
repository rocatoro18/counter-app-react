import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />',()=>{
    
    const title = 'Hola, Soy Roberto';
    const subtitle = 'Soy un subtitulo';

    test('Debe de hacer match con el snapshot',()=>{
        // SUJETO DE PRUEBAS
        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    }); 
    
    test('Debe mostrar el mensaje "Hola, Soy Roberto"',()=>{
        render(<FirstApp title={title}/>);
        //screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    }); 

    test('Debe mostrar el titulo en un h1',()=>{
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading',{level: 1}).innerHTML).toContain(title);
    }); 

    test('Debe mostrar el subtitulo enviado por props',()=>{
        render(<FirstApp title={title} subTitle={subtitle}/>);
        expect(screen.getAllByText(subtitle).length).toBe(2);
    }); 

});