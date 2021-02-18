//importar o componente que vai fazer o teste
import { render } from '@testing-library/react';
import React from 'react';

import Home from '../pages/Home';


//Estrutura de teste unitario

describe ('Home', () => {
    it('Project app', () => {
        //consumir o teste
        const {debug} = render(<Home />)

        //acessar a lib
        debug();
    })
})