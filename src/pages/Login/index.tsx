import React from 'react';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';

import { LoginContainer } from './style';

const Login: React.FC = () => {
    return(
        <LoginContainer>
            <form>
                <h1>Faça seu login</h1>
                <input type="text" placeholder="Digite seu usário"/>
                <input type="text" placeholder="Digite seu senha"/>
                <button><span>Continuar</span><FiArrowRight></FiArrowRight></button>
            </form>
            <div>
                <a href="">Esqueci minha senha<FiChevronRight/></a>
                <a href="">Ainda nao sou cliente<FiChevronRight/></a>
            </div>
        </LoginContainer>

    )
}   

export default Login;