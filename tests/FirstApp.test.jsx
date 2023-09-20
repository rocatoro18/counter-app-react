import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />',()=>{
    
    /*
    test('Debe de hacer match con el snapshot',()=>{
        const title = 'Hola, soy Roberto';
        const {container} = render(<FirstApp title={title}/>);

        // Esta prueba asegura que el compomente no vaya a cambiar de manera accidental
        expect(container).toMatchSnapshot();
    });
    */
    test('Debe de mostrar el titulo en un h1',()=>{
        const title = 'Hola, soy Roberto';
        const {container,getByText, getByTestId} = render(<FirstApp title={title}/>);
        expect(getByText(title)).toBeTruthy();
        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toBe(title);
        //expect(h1.innerHTML).toContain(title);
        expect(getByTestId('test-title').innerHTML).toBe(title);
    });

    test('Debe de mostrar el subtitulo enviado por props',()=>{
        const title = 'Hola, soy Roberto';
        const subtitle = 'Soy un subtitulo';
        const {getByText,getAllByText} = render(
         <FirstApp 
            title={title}
            subTitle={subtitle}
          />
        );
        expect(getAllByText(subtitle).length).toBe(2);
        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toBe(title);
        //expect(h1.innerHTML).toContain(title);
       // expect(getByTestId('test-title').innerHTML).toBe(title);
    });

});